import {
  Address,
  Blockchain,
  constant,
  createEventNotifier,
  MapStorage,
  SmartContract,
} from "@neo-one/smart-contract";


type Post = {
  id: number;
  parentPostId: number;
  canBeParent: boolean;
  owner: Address;
  content: string;
  commentCount: number;
  shareCount: number;
  date: number;
  images: string[],
}

const notifyPostAdded = createEventNotifier<Post>("postAdded", "post")


export class Posts extends SmartContract {
  private postCount = 0;
  private readonly postStorage = MapStorage.for<number, Post>();

  public addPost(owner: Address, content: string, parentPostId: number = -1, images: string[] = []): boolean {
    if (!Address.isCaller(owner)) throw ("Error: Address is not caller.")

    const parentPost = this.getPostById(parentPostId);
    if (!parentPost.canBeParent)
      throw ("Error: Parent post can not be parent.");


    if (content == "" && images.length == 0) throw ("Error: Post is empty.");

    if (parentPostId != -1) {
      const parentPost = this.getPostById(parentPostId);
      parentPost.commentCount++;
      this.postStorage.set(parentPostId, parentPost);
    }

    const post = {
      id: this.postCount, owner, content,
      shareCount: 0,
      commentCount: 0,
      parentPostId,
      canBeParent: true,
      date: Blockchain.currentBlockTime,
      images
    } as Post;

    this.postStorage.set(post.id, post);
    this.postCount++;

    notifyPostAdded(post);

    return true;
  }

  public deletePost(owner: Address, postId: number) {
    if (!Address.isCaller(owner)) throw ("Error: Address is not caller.")
    const post = this.getPostById(postId);

    if (post.owner != owner) throw ("Post's owner is not caller");

    if (post.parentPostId == -1) {
      const parentPost = this.getPostById(post.parentPostId);
      parentPost.commentCount--;
      this.postStorage.set(post.parentPostId, parentPost);
    }

    post.canBeParent = false;
    post.content = "";
    post.images = [];
    post.parentPostId = -1;

    this.postStorage.set(postId, post);
  }

  public editPost(owner: Address, postId: number, newContent: string) {
    if (!Address.isCaller(owner)) throw ("Error: Address is not caller.")
    if (newContent == "") throw ("Error: content is empty");

    const post = this.getPostById(postId);

    if (post.owner != owner) throw ("Post's owner is not caller");

    post.content = newContent;
    this.postStorage.set(postId, post);
  }

  @constant
  public getPostsByAddress(owner: Address): Post[] {
    const posts: Post[] = [];
    this.postStorage.forEach(post => {
      if (post.owner === owner) posts.push(post)
    });


    return posts;
  }

  @constant getPostById(id: number): Post {
    const post = this.postStorage.get(id);

    if (post == null)
      throw ("Error: There is no post by this id.");

    return post;
  }

  public toggleParentPost(owner: Address, postId: number) {
    if (!Address.isCaller(owner)) throw ("Error: Address is not caller.");

    const post = this.getPostById(postId)

    if (post.owner != owner) throw ("Error: post's owner is not caller.")

    post.canBeParent = !post.canBeParent;
    this.postStorage.set(postId, post);
  }

}