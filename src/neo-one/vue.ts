/* @hash 392026133da4afcefced592125599c54 */
// tslint:disable
/* eslint-disable */
import { Client, DeveloperClients } from '@neo-one/client';
import { createClient, createDeveloperClients } from './client';
import { Contracts } from './contracts';
import { createPostsSmartContract } from './Posts/contract';

export class ContractsService {
  public client: Client;
  public developerClients: DeveloperClients;
  public posts: Contracts['posts'];

  constructor() {
    this.client = createClient();
    this.developerClients = createDeveloperClients();
    this.posts = createPostsSmartContract(this.client);
  }

  public setHost(host?: string) {
    this.client = createClient(host);
    this.developerClients = createDeveloperClients(host);
    this.posts = createPostsSmartContract(this.client);
  }
}

export const contractsService = new ContractsService();
