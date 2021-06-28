/* @hash 366b0aac97b5bfb2edab88bb9cb0d459 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { ProfileReportsSmartContract } from './types';
import { profileReportsABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'AQGdnHKGSRfPj2hzfcZo1BkRTfeHWjRUCb',
    },
  },
  abi: profileReportsABI,
  sourceMaps,
};

export const createProfileReportsSmartContract = <TClient extends Client>(
  client: TClient,
): ProfileReportsSmartContract<TClient> => client.smartContract(definition);
