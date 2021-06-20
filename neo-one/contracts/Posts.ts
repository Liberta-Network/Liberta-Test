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
  owner: Address;
  content: string;
  likeCount: number;
  shareCount: number;
  date: number;
}

const notifyPostAdded = createEventNotifier<Post>("postAdded", "post")

export class Posts extends SmartContract {
  private postCount = 0;
  private readonly postStorage = MapStorage.for<number, Post>();

  public addPost(owner: Address, content: string): boolean {
    if (!Address.isCaller(owner)) return false;

    const post = {
      id: this.postCount, owner, content,
      likeCount: 0,
      shareCount: 0,
      date: Blockchain.currentBlockTime
    } as Post;

    this.postStorage.set(post.id, post);
    this.postCount++;

    notifyPostAdded(post);

    return true;
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
    let _post: Post = null as any;
    this.postStorage.forEach(post => {
      if (post.id === id) _post = post;
    });

    if (_post != null) return _post

    throw ("Error: There is no post by this id.");
  }
}