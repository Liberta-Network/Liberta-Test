/* @hash 996bba60259fe019d33ac5b2b1a2b4e3 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Client,
  Event,
  GetOptions,
  InvocationTransaction,
  InvokeReceipt,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export interface PostsPostAddedEventParameters {
  readonly post: {
    readonly id: BigNumber;
    readonly owner: AddressString;
    readonly content: string;
    readonly likeCount: BigNumber;
    readonly shareCount: BigNumber;
    readonly date: BigNumber;
  };
}
export interface PostsPostAddedEvent extends Event<'postAdded', PostsPostAddedEventParameters> {}
export type PostsEvent = PostsPostAddedEvent;

export interface PostsSmartContract<TClient extends Client = Client> extends SmartContract<TClient, PostsEvent> {
  readonly addPost: {
    (owner: AddressString, content: string, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, PostsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner: AddressString,
      content: string,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly deploy: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, PostsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly getPostsByAddress: (owner: AddressString) => Promise<
    Array<{
      readonly id: BigNumber;
      readonly owner: AddressString;
      readonly content: string;
      readonly likeCount: BigNumber;
      readonly shareCount: BigNumber;
      readonly date: BigNumber;
    }>
  >;
}

export interface PostsMigrationSmartContract {
  readonly addPost: (
    owner: AddressString | Promise<AddressString>,
    content: string | Promise<string>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly deploy: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly getPostsByAddress: (owner: AddressString | Promise<AddressString>) => Promise<
    Array<{
      readonly id: BigNumber;
      readonly owner: AddressString;
      readonly content: string;
      readonly likeCount: BigNumber;
      readonly shareCount: BigNumber;
      readonly date: BigNumber;
    }>
  >;
}
