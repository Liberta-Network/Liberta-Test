/* @hash 94cbee59f89f5388a06f9ace4e1d10f7 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { LikedPostsSmartContract } from './types';
import { likedPostsABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AQxeU5mB4nuyDdhbfy1BK2gmoYFnjvgnje',
    },
  },
  abi: likedPostsABI,
  sourceMaps,
};

export const createLikedPostsSmartContract = <TClient extends Client>(
  client: TClient,
): LikedPostsSmartContract<TClient> => client.smartContract(definition);
