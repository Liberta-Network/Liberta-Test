/* @hash 6324e798a2d27571826c560af347e5ef */
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

export type LikedPostsEvent = never;

export interface LikedPostsSmartContract<TClient extends Client = Client>
  extends SmartContract<TClient, LikedPostsEvent> {
  readonly checkOwnerLiked: (owner: AddressString, id: BigNumber) => Promise<boolean>;
  readonly deploy: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, LikedPostsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, LikedPostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly getLikeCountFromPostId: (id: BigNumber) => Promise<BigNumber>;
  readonly likePost: {
    (owner: AddressString, id: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, LikedPostsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner: AddressString,
      id: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, LikedPostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly unlikePost: {
    (owner: AddressString, id: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, LikedPostsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner: AddressString,
      id: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, LikedPostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface LikedPostsMigrationSmartContract {
  readonly checkOwnerLiked: (
    owner: AddressString | Promise<AddressString>,
    id: BigNumber | Promise<BigNumber>,
  ) => Promise<boolean>;
  readonly deploy: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, LikedPostsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly getLikeCountFromPostId: (id: BigNumber | Promise<BigNumber>) => Promise<BigNumber>;
  readonly likePost: (
    owner: AddressString | Promise<AddressString>,
    id: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, LikedPostsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly unlikePost: (
    owner: AddressString | Promise<AddressString>,
    id: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, LikedPostsEvent> & { readonly transaction: InvocationTransaction }>;
}
