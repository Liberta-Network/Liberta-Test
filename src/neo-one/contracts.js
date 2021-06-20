/* @hash 2d2348e3fcb189791f92e6565926fcf7 */
// tslint:disable
/* eslint-disable */
import { createPostsSmartContract } from './Posts/contract';

export const createContracts = (client) => ({
  posts: createPostsSmartContract(client),
});
