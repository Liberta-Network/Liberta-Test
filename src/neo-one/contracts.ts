/* @hash 3d45229ff520b0f60ff22433c40d6756 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { FollowsSmartContract, FollowsMigrationSmartContract } from './Follows/types';
import { LikedPostsSmartContract, LikedPostsMigrationSmartContract } from './LikedPosts/types';
import { PostsSmartContract, PostsMigrationSmartContract } from './Posts/types';
import { UserInfosSmartContract, UserInfosMigrationSmartContract } from './UserInfos/types';

import { createFollowsSmartContract } from './Follows/contract';
import { createLikedPostsSmartContract } from './LikedPosts/contract';
import { createPostsSmartContract } from './Posts/contract';
import { createUserInfosSmartContract } from './UserInfos/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly follows: FollowsSmartContract<TClient>;
  readonly likedPosts: LikedPostsSmartContract<TClient>;
  readonly posts: PostsSmartContract<TClient>;
  readonly userInfos: UserInfosSmartContract<TClient>;
}
// Refer to the MigrationSmartContract documentation at https://neo-one.io/docs/deployment for more information.
export interface MigrationContracts {
  readonly follows: FollowsMigrationSmartContract;
  readonly likedPosts: LikedPostsMigrationSmartContract;
  readonly posts: PostsMigrationSmartContract;
  readonly userInfos: UserInfosMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  follows: createFollowsSmartContract(client),
  likedPosts: createLikedPostsSmartContract(client),
  posts: createPostsSmartContract(client),
  userInfos: createUserInfosSmartContract(client),
});
