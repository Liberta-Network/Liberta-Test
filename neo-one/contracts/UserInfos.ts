import { SmartContract, Address, MapStorage, constant } from "@neo-one/smart-contract";

type UserInfo = {
  address: Address;
  profileImage: string;
  username: string;
  fullname: string;
  biography: string;
};

// TODO: Private account option

export class UserInfos extends SmartContract {
  private readonly userInfoStorage = MapStorage.for<Address, UserInfo>();

  @constant
  public getUserInfoByAddress(addr: Address): UserInfo {
    const info = this.userInfoStorage.get(addr);

    if (info == undefined) throw ("Error: Address not available");
    return info;
  }

  public setUserInfo(owner: Address, profileImage: string, username: string, fullname: string, biography: string) {
    if (!Address.isCaller(owner)) throw ("Error: address is not caller.");

    const info = { address: owner, profileImage, username, fullname, biography } as UserInfo;

    this.userInfoStorage.set(owner, info);
  }
}