/* @hash 7a62b1926aa563104350e5fd95732b4b */
// tslint:disable
/* eslint-disable */
import { Client, DeveloperClients } from '@neo-one/client';
import { createClient, createDeveloperClients } from './client';
import { Contracts } from './contracts';
import { createLikedPostsSmartContract } from './LikedPosts/contract';
import { createPostsSmartContract } from './Posts/contract';
import { createUserInfosSmartContract } from './UserInfos/contract';

export class ContractsService {
  public client: Client;
  public developerClients: DeveloperClients;
  public likedPosts: Contracts['likedPosts'];
  public posts: Contracts['posts'];
  public userInfos: Contracts['userInfos'];

  constructor() {
    this.client = createClient();
    this.developerClients = createDeveloperClients();
    this.likedPosts = createLikedPostsSmartContract(this.client);
    this.posts = createPostsSmartContract(this.client);
    this.userInfos = createUserInfosSmartContract(this.client);
  }

  public setHost(host?: string) {
    this.client = createClient(host);
    this.developerClients = createDeveloperClients(host);
    this.likedPosts = createLikedPostsSmartContract(this.client);
    this.posts = createPostsSmartContract(this.client);
    this.userInfos = createUserInfosSmartContract(this.client);
  }
}

export const contractsService = new ContractsService();
