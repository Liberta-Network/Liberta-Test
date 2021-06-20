/* @hash e471115b872f1f9ad11cd5a1a4b0e655 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { PostsSmartContract } from './types';
import { postsABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AbqL4thm7wmEQMEh4tDuJBdgs1S8MaEtPa',
    },
  },
  abi: postsABI,
  sourceMaps,
};

export const createPostsSmartContract = <TClient extends Client>(client: TClient): PostsSmartContract<TClient> =>
  client.smartContract(definition);
