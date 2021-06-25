/* @hash 59e2ee7098d851f6a974808ab24e5843 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Client,
  GetOptions,
  InvocationTransaction,
  InvokeReceipt,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export type FollowsEvent = never;

export interface FollowsSmartContract<TClient extends Client = Client> extends SmartContract<TClient, FollowsEvent> {
  readonly checkFollowing: (owner: AddressString, followingUser: AddressString) => Promise<boolean>;
  readonly deploy: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, FollowsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, FollowsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly followUser: {
    (owner: AddressString, followingUser: AddressString, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, FollowsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner: AddressString,
      followingUser: AddressString,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, FollowsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly getFollowerCount: (addr: AddressString) => Promise<BigNumber>;
  readonly unfollowUser: {
    (owner: AddressString, followingUser: AddressString, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, FollowsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner: AddressString,
      followingUser: AddressString,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, FollowsEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface FollowsMigrationSmartContract {
  readonly checkFollowing: (
    owner: AddressString | Promise<AddressString>,
    followingUser: AddressString | Promise<AddressString>,
  ) => Promise<boolean>;
  readonly deploy: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, FollowsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly followUser: (
    owner: AddressString | Promise<AddressString>,
    followingUser: AddressString | Promise<AddressString>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, FollowsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly getFollowerCount: (addr: AddressString | Promise<AddressString>) => Promise<BigNumber>;
  readonly unfollowUser: (
    owner: AddressString | Promise<AddressString>,
    followingUser: AddressString | Promise<AddressString>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, FollowsEvent> & { readonly transaction: InvocationTransaction }>;
}
