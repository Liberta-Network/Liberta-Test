/* @hash 3f23902c7d0e94c4815432f8c7bff44b */
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
    readonly parentPostId: BigNumber;
    readonly canBeParent: boolean;
    readonly owner: AddressString;
    readonly content: string;
    readonly commentCount: BigNumber;
    readonly shareCount: BigNumber;
    readonly date: BigNumber;
    readonly images: Array<string>;
  };
}
export interface PostsPostAddedEvent extends Event<'postAdded', PostsPostAddedEventParameters> {}
export type PostsEvent = PostsPostAddedEvent;

export interface PostsSmartContract<TClient extends Client = Client> extends SmartContract<TClient, PostsEvent> {
  readonly addPost: {
    (
      owner: AddressString,
      content: string,
      parentPostId?: BigNumber,
      images?: Array<string>,
      options?: TransactionOptions,
    ): Promise<TransactionResult<InvokeReceipt<boolean, PostsEvent>, InvocationTransaction>>;
    readonly confirmed: (
      owner: AddressString,
      content: string,
      parentPostId?: BigNumber,
      images?: Array<string>,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly deletePost: {
    (owner: AddressString, postId: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, PostsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner: AddressString,
      postId: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly deploy: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, PostsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly editPost: {
    (owner: AddressString, postId: BigNumber, newContent: string, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, PostsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner: AddressString,
      postId: BigNumber,
      newContent: string,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly getPostsByAddress: (owner: AddressString) => Promise<
    Array<{
      readonly id: BigNumber;
      readonly parentPostId: BigNumber;
      readonly canBeParent: boolean;
      readonly owner: AddressString;
      readonly content: string;
      readonly commentCount: BigNumber;
      readonly shareCount: BigNumber;
      readonly date: BigNumber;
      readonly images: Array<string>;
    }>
  >;
  readonly toggleParentPost: {
    (owner: AddressString, postId: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, PostsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner: AddressString,
      postId: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface PostsMigrationSmartContract {
  readonly addPost: (
    owner: AddressString | Promise<AddressString>,
    content: string | Promise<string>,
    parentPostId?: BigNumber | Promise<BigNumber>,
    images?: Array<string> | Promise<Array<string>>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly deletePost: (
    owner: AddressString | Promise<AddressString>,
    postId: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly deploy: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly editPost: (
    owner: AddressString | Promise<AddressString>,
    postId: BigNumber | Promise<BigNumber>,
    newContent: string | Promise<string>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, PostsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly getPostsByAddress: (owner: AddressString | Promise<AddressString>) => Promise<
    Array<{
      readonly id: BigNumber;
      readonly parentPostId: BigNumber;
      readonly canBeParent: boolean;
      readonly owner: AddressString;
      readonly content: string;
      readonly commentCount: BigNumber;
      readonly shareCount: BigNumber;
      readonly date: BigNumber;
      readonly images: Array<string>;
    }>
  >;
  readonly toggleParentPost: (
    owner: AddressString | Promise<AddressString>,
    postId: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, PostsEvent> & { readonly transaction: InvocationTransaction }>;
}
