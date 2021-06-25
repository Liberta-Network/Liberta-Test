import { Address, constant, MapStorage, SmartContract } from "@neo-one/smart-contract";

type LikedPost = {
  id: number;
  postId: number;
  owner: Address;
}

export class LikedPosts extends SmartContract {
  private likeCount = 0;
  private readonly likeStorage = MapStorage.for<number, LikedPost>();

  @constant
  public getLikeCountFromPostId(id: number): number {
    let count = 0;

    this.likeStorage.forEach(like => {
      if (like.postId == id) count++;
    })

    return count;
  }

  @constant
  public checkOwnerLiked(owner: Address, id: number): boolean {
    let ownerLiked = false;

    this.likeStorage.forEach(like => {
      if (id == like.postId && like.owner == like.owner) ownerLiked = true;
    })

    return ownerLiked;
  }

  public likePost(owner: Address, id: number) {
    if (!Address.isCaller(owner)) throw ("Error: Address is not caller.");

    if (this.checkOwnerLiked(owner, id)) throw ("Error: Owner is already liked this post.");

    const likedPost = {
      id: this.likeCount,
      owner,
      postId: id
    } as LikedPost;

    this.likeStorage.set(id, likedPost);
  }

  public unlikePost(owner: Address, id: number) {
    if (!Address.isCaller(owner)) throw ("Error: Address is not caller.");
    if (!this.checkOwnerLiked(owner, id)) throw ("Error: Owner is didn't like.");

    this.likeStorage.delete(id);
  }
}