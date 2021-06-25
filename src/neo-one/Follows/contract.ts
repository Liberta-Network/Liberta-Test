/* @hash a708602475f84c65b6ec1381ed9aa654 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { FollowsSmartContract } from './types';
import { followsABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AbnME52ue8GkjdJou415yKyCwmJNe4jJXb',
    },
  },
  abi: followsABI,
  sourceMaps,
};

export const createFollowsSmartContract = <TClient extends Client>(client: TClient): FollowsSmartContract<TClient> =>
  client.smartContract(definition);
