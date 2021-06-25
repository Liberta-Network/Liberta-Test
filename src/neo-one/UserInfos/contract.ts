/* @hash aa892f732a033351a820300b1c2ce326 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { UserInfosSmartContract } from './types';
import { userInfosABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'ASjjWsjsHbWD7VPkgWK2n2n92iGzaGiCBW',
    },
  },
  abi: userInfosABI,
  sourceMaps,
};

export const createUserInfosSmartContract = <TClient extends Client>(
  client: TClient,
): UserInfosSmartContract<TClient> => client.smartContract(definition);
