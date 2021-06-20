/* @hash f036fc023f566fae8a8fc9d6ea29ec2e */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { PostsSmartContract, PostsMigrationSmartContract } from './Posts/types';

import { createPostsSmartContract } from './Posts/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly posts: PostsSmartContract<TClient>;
}
// Refer to the MigrationSmartContract documentation at https://neo-one.io/docs/deployment for more information.
export interface MigrationContracts {
  readonly posts: PostsMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  posts: createPostsSmartContract(client),
});
