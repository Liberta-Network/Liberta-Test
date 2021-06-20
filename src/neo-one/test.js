/* @hash 6d8babf747060b94a5cb375b28ebef37 */
// tslint:disable
/* eslint-disable */
import { createWithContracts } from '@neo-one/smart-contract-test';
import * as path from 'path';

export const withContracts = createWithContracts([
  { name: 'Posts', filePath: path.resolve(__dirname, '../../neo-one/contracts/Posts.ts') },
]);
