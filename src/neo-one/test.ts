/* @hash 553bf5105c9e1648e8445c8931229f36 */
// tslint:disable
/* eslint-disable */
import { createWithContracts, TestOptions, WithContractsOptions } from '@neo-one/smart-contract-test';
import { Contracts } from './contracts';
import * as path from 'path';

export const withContracts: (
  test: (contracts: Contracts & TestOptions) => Promise<void>,
  options?: WithContractsOptions,
) => Promise<void> = createWithContracts([
  { name: 'Follows', filePath: path.resolve(__dirname, '../../neo-one/contracts/Follows.ts') },
  { name: 'LikedPosts', filePath: path.resolve(__dirname, '../../neo-one/contracts/LikedPosts.ts') },
  { name: 'Posts', filePath: path.resolve(__dirname, '../../neo-one/contracts/Posts.ts') },
  { name: 'UserInfos', filePath: path.resolve(__dirname, '../../neo-one/contracts/UserInfos.ts') },
]);
