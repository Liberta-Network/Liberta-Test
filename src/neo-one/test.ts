/* @hash ac177827bc01fae75af13758d6131a70 */
// tslint:disable
/* eslint-disable */
import { createWithContracts, TestOptions, WithContractsOptions } from '@neo-one/smart-contract-test';
import { Contracts } from './contracts';
import * as path from 'path';

export const withContracts: (
  test: (contracts: Contracts & TestOptions) => Promise<void>,
  options?: WithContractsOptions,
) => Promise<void> = createWithContracts([
  { name: 'LikedPosts', filePath: path.resolve(__dirname, '../../neo-one/contracts/LikedPosts.ts') },
  { name: 'Posts', filePath: path.resolve(__dirname, '../../neo-one/contracts/Posts.ts') },
  { name: 'UserInfos', filePath: path.resolve(__dirname, '../../neo-one/contracts/UserInfos.ts') },
]);
