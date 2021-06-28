import { SmartContract, Address, MapStorage, constant } from "@neo-one/smart-contract";

type UserInfo = {
  address: Address;
  profileImage: string;
  username: string;
  fullname: string;
  biography: string;
  legitReportCount: number;
  wrongReportCount: number;
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

  @constant
  public checkUsernameAvailable(_username: String, owner: Address = Address.from('NKuyBkoGdZZSLyPbJEetheRhMjeznFZszf')): boolean {
    let available = true;

    this.userInfoStorage.forEach(userInfo => {
      if (userInfo.username == _username && owner != userInfo.address) available = false;
    })

    return available;
  }

  public setUserInfo(owner: Address, profileImage: string, username: string, fullname: string, biography: string) {
    if (!Address.isCaller(owner)) throw ("Error: address is not caller.");

    const user = this.getUserInfoByAddress(owner);

    if (!this.checkUsernameAvailable(username, owner))
      throw ("Error: This username is taken.")

    user.profileImage = profileImage;
    user.username = username;
    user.fullname = fullname;
    user.biography = biography;
    user.legitReportCount = user.legitReportCount || 0;
    user.wrongReportCount = user.wrongReportCount || 0;

    this.userInfoStorage.set(owner, user);
  }
}