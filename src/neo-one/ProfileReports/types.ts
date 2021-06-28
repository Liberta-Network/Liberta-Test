/* @hash f5fe07f73ef5fe47c367f073bce7a8b9 */
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

export type ProfileReportsEvent = never;

export interface ProfileReportsSmartContract<TClient extends Client = Client>
  extends SmartContract<TClient, ProfileReportsEvent> {
  readonly deploy: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, ProfileReportsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, ProfileReportsEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly getAllReportsFromUser: (reportedAddress: AddressString) => Promise<
    Array<{
      readonly id: BigNumber;
      readonly reporter: AddressString;
      readonly reported: AddressString;
      readonly reason: string;
      readonly date: BigNumber;
    }>
  >;
  readonly getHowManyReportedPerUser: (reported: AddressString, reporter: AddressString) => Promise<BigNumber>;
  readonly getPreviousReportsDateDiff: (reported: AddressString, reporter: AddressString) => Promise<BigNumber>;
  readonly getReportById: (id: BigNumber) => Promise<{
    readonly id: BigNumber;
    readonly reporter: AddressString;
    readonly reported: AddressString;
    readonly reason: string;
    readonly date: BigNumber;
  }>;
  readonly reportProfile: {
    (owner: AddressString, reported: AddressString, reason: string, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, ProfileReportsEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner: AddressString,
      reported: AddressString,
      reason: string,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, ProfileReportsEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface ProfileReportsMigrationSmartContract {
  readonly deploy: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, ProfileReportsEvent> & { readonly transaction: InvocationTransaction }>;
  readonly getAllReportsFromUser: (reportedAddress: AddressString | Promise<AddressString>) => Promise<
    Array<{
      readonly id: BigNumber;
      readonly reporter: AddressString;
      readonly reported: AddressString;
      readonly reason: string;
      readonly date: BigNumber;
    }>
  >;
  readonly getHowManyReportedPerUser: (
    reported: AddressString | Promise<AddressString>,
    reporter: AddressString | Promise<AddressString>,
  ) => Promise<BigNumber>;
  readonly getPreviousReportsDateDiff: (
    reported: AddressString | Promise<AddressString>,
    reporter: AddressString | Promise<AddressString>,
  ) => Promise<BigNumber>;
  readonly getReportById: (id: BigNumber | Promise<BigNumber>) => Promise<{
    readonly id: BigNumber;
    readonly reporter: AddressString;
    readonly reported: AddressString;
    readonly reason: string;
    readonly date: BigNumber;
  }>;
  readonly reportProfile: (
    owner: AddressString | Promise<AddressString>,
    reported: AddressString | Promise<AddressString>,
    reason: string | Promise<string>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, ProfileReportsEvent> & { readonly transaction: InvocationTransaction }>;
}
