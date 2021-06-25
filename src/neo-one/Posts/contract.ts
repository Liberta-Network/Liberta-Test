/* @hash 9e5d05dbf39f363a3d849dba573f4f53 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { PostsSmartContract } from './types';
import { postsABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'ARqThoM5X5twzahi2Cv6fzULX7HPN4ur3b',
    },
  },
  abi: postsABI,
  sourceMaps,
};

export const createPostsSmartContract = <TClient extends Client>(client: TClient): PostsSmartContract<TClient> =>
  client.smartContract(definition);
