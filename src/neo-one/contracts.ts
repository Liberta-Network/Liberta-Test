/* @hash 8fd1b5572c6234646161e89553d27007 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { LikedPostsSmartContract, LikedPostsMigrationSmartContract } from './LikedPosts/types';
import { PostsSmartContract, PostsMigrationSmartContract } from './Posts/types';
import { UserInfosSmartContract, UserInfosMigrationSmartContract } from './UserInfos/types';

import { createLikedPostsSmartContract } from './LikedPosts/contract';
import { createPostsSmartContract } from './Posts/contract';
import { createUserInfosSmartContract } from './UserInfos/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly likedPosts: LikedPostsSmartContract<TClient>;
  readonly posts: PostsSmartContract<TClient>;
  readonly userInfos: UserInfosSmartContract<TClient>;
}
// Refer to the MigrationSmartContract documentation at https://neo-one.io/docs/deployment for more information.
export interface MigrationContracts {
  readonly likedPosts: LikedPostsMigrationSmartContract;
  readonly posts: PostsMigrationSmartContract;
  readonly userInfos: UserInfosMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  likedPosts: createLikedPostsSmartContract(client),
  posts: createPostsSmartContract(client),
  userInfos: createUserInfosSmartContract(client),
});
