/* @hash aa39a3a16b115d7adb25f9362489770f */
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

export type UserInfosEvent = never;

export interface UserInfosSmartContract<TClient extends Client = Client>
  extends SmartContract<TClient, UserInfosEvent> {
  readonly deploy: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, UserInfosEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, UserInfosEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly getUserInfoByAddress: (addr: AddressString) => Promise<{
    readonly address: AddressString;
    readonly profileImage: string;
    readonly username: string;
    readonly fullname: string;
    readonly biography: string;
  }>;
  readonly setUserInfo: {
    (
      owner: AddressString,
      profileImage: string,
      username: string,
      fullname: string,
      biography: string,
      options?: TransactionOptions,
    ): Promise<TransactionResult<InvokeReceipt<undefined, UserInfosEvent>, InvocationTransaction>>;
    readonly confirmed: (
      owner: AddressString,
      profileImage: string,
      username: string,
      fullname: string,
      biography: string,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, UserInfosEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface UserInfosMigrationSmartContract {
  readonly deploy: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, UserInfosEvent> & { readonly transaction: InvocationTransaction }>;
  readonly getUserInfoByAddress: (addr: AddressString | Promise<AddressString>) => Promise<{
    readonly address: AddressString;
    readonly profileImage: string;
    readonly username: string;
    readonly fullname: string;
    readonly biography: string;
  }>;
  readonly setUserInfo: (
    owner: AddressString | Promise<AddressString>,
    profileImage: string | Promise<string>,
    username: string | Promise<string>,
    fullname: string | Promise<string>,
    biography: string | Promise<string>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, UserInfosEvent> & { readonly transaction: InvocationTransaction }>;
}
