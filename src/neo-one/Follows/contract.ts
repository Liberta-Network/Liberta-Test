/* @hash c1d7cb16243538dcd4080e386f5b616a */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { FollowsSmartContract } from './types';
import { followsABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AcSJhvuzJrff79ZeGUpeJHMYkeMLJG1FqX',
    },
  },
  abi: followsABI,
  sourceMaps,
};

export const createFollowsSmartContract = <TClient extends Client>(client: TClient): FollowsSmartContract<TClient> =>
  client.smartContract(definition);
