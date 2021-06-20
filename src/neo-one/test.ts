/* @hash 6c0e7b5bcb84405e58d911b4b28b5182 */
// tslint:disable
/* eslint-disable */
import { createWithContracts, TestOptions, WithContractsOptions } from '@neo-one/smart-contract-test';
import { Contracts } from './contracts';
import * as path from 'path';

export const withContracts: (
  test: (contracts: Contracts & TestOptions) => Promise<void>,
  options?: WithContractsOptions,
) => Promise<void> = createWithContracts([
  { name: 'Posts', filePath: path.resolve(__dirname, '../../neo-one/contracts/Posts.ts') },
]);
