/* @hash 367dff203a117ea55c5ecde9d1c5a77d */
// tslint:disable
/* eslint-disable */
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

export const createPostsSmartContract = (client) => client.smartContract(definition);
