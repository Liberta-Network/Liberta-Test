/* @hash c421ad4c1c7a0ec119ebab4182dfe200 */
// tslint:disable
/* eslint-disable */
import { createClient, createDeveloperClients } from './client';
import { createPostsSmartContract } from './Posts/contract';

export class ContractsService {
  constructor() {
    this.client = createClient();
    this.developerClients = createDeveloperClients();
    this.posts = createPostsSmartContract(this.client);
  }

  setHost(host) {
    this.client = createClient(host);
    this.developerClients = createDeveloperClients(host);
    this.posts = createPostsSmartContract(this.client);
  }
}

export const contractsService = new ContractsService();
