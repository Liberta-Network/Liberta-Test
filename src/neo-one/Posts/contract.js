/* @hash cbf28df23c9cc8cf618c01ca1b0839a9 */
// tslint:disable
/* eslint-disable */
import { postsABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'ANJaLz957jEeDXueT5Sm7iLXWyqYpLV9TD',
    },
  },
  abi: postsABI,
  sourceMaps,
};

export const createPostsSmartContract = (client) => client.smartContract(definition);
