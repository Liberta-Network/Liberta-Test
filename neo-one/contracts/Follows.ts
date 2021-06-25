import { SmartContract, Address, MapStorage, constant } from "@neo-one/smart-contract";

type Follow = {
  id: number;
  follower: Address;
  following: Address;
}

export class Follows extends SmartContract {
  private followCount = 0;
  private readonly followStorage = MapStorage.for<number, Follow>();

  @constant
  public getFollowerCount(addr: Address): number {
    let count = 0;

    this.followStorage.forEach(follow => {
      if (follow.following == addr) count++;
    })

    return count;
  }

  @constant getFollowingCount(addr: Address): number {
    let count = 0;

    this.followStorage.forEach(follow => {
      if (follow.follower == addr) count++;
    })

    return count;
  }

  @constant
  public checkFollowing(owner: Address, followingUser: Address): boolean {
    let following = false;
    this.followStorage.forEach(follow => {
      if (follow.follower == owner && follow.following == followingUser)
        following = true;
    });

    return following;
  }

  public followUser(owner: Address, followingUser: Address) {
    if (!Address.isCaller(owner)) throw ("Error: Address is not caller.");

    const isFollowing = this.checkFollowing(owner, followingUser);
    if (isFollowing) throw ("Error: address is already following");

    const follow = { id: this.followCount, follower: owner, following: followingUser } as Follow;
    this.followStorage.set(this.followCount, follow);

    this.followCount++;
  }

  public unfollowUser(owner: Address, followingUser: Address) {
    let unfollowed = false;
    if (!Address.isCaller(owner)) throw ("Error: Address is not caller.");

    this.followStorage.forEach(follow => {
      if (follow.follower == owner && follow.following == followingUser) {
        this.followStorage.delete(follow.id);
        unfollowed = true;
      }
    })

    if (!unfollowed) throw ("Error: user isn't already following.")
  }
}