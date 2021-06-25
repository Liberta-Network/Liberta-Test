/* @hash 780e94b0e5c5007dc85ba108cb07ee47 */
// tslint:disable
/* eslint-disable */
import { Client, DeveloperClients } from '@neo-one/client';
import { createClient, createDeveloperClients } from './client';
import { Contracts } from './contracts';
import { createFollowsSmartContract } from './Follows/contract';
import { createLikedPostsSmartContract } from './LikedPosts/contract';
import { createPostsSmartContract } from './Posts/contract';
import { createUserInfosSmartContract } from './UserInfos/contract';

export class ContractsService {
  public client: Client;
  public developerClients: DeveloperClients;
  public follows: Contracts['follows'];
  public likedPosts: Contracts['likedPosts'];
  public posts: Contracts['posts'];
  public userInfos: Contracts['userInfos'];

  constructor() {
    this.client = createClient();
    this.developerClients = createDeveloperClients();
    this.follows = createFollowsSmartContract(this.client);
    this.likedPosts = createLikedPostsSmartContract(this.client);
    this.posts = createPostsSmartContract(this.client);
    this.userInfos = createUserInfosSmartContract(this.client);
  }

  public setHost(host?: string) {
    this.client = createClient(host);
    this.developerClients = createDeveloperClients(host);
    this.follows = createFollowsSmartContract(this.client);
    this.likedPosts = createLikedPostsSmartContract(this.client);
    this.posts = createPostsSmartContract(this.client);
    this.userInfos = createUserInfosSmartContract(this.client);
  }
}

export const contractsService = new ContractsService();
