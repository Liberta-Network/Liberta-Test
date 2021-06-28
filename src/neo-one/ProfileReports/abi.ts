/* @hash 6fac0483b48c2753d78a66f69e360588 */
// tslint:disable
/* eslint-disable */
import { ABI } from '@neo-one/client';

export const profileReportsABI: ABI = {
  events: [],
  functions: [
    {
      claim: false,
      constant: true,
      name: 'getReportById',
      parameters: [
        {
          decimals: 0,
          forwardedValue: false,
          name: 'id',
          optional: false,
          type: 'Integer',
        },
      ],
      receive: false,
      returnType: {
        forwardedValue: false,
        optional: false,
        properties: {
          date: {
            decimals: 0,
            forwardedValue: false,
            optional: false,
            type: 'Integer',
          },
          id: {
            decimals: 0,
            forwardedValue: false,
            optional: false,
            type: 'Integer',
          },
          reason: {
            forwardedValue: false,
            optional: false,
            type: 'String',
          },
          reported: {
            forwardedValue: false,
            optional: false,
            type: 'Address',
          },
          reporter: {
            forwardedValue: false,
            optional: false,
            type: 'Address',
          },
        },
        type: 'Object',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      claim: false,
      constant: true,
      name: 'getAllReportsFromUser',
      parameters: [
        {
          forwardedValue: false,
          name: 'reportedAddress',
          optional: false,
          type: 'Address',
        },
      ],
      receive: false,
      returnType: {
        forwardedValue: false,
        optional: false,
        type: 'Array',
        value: {
          forwardedValue: false,
          optional: false,
          properties: {
            date: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
            },
            id: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
            },
            reason: {
              forwardedValue: false,
              optional: false,
              type: 'String',
            },
            reported: {
              forwardedValue: false,
              optional: false,
              type: 'Address',
            },
            reporter: {
              forwardedValue: false,
              optional: false,
              type: 'Address',
            },
          },
          type: 'Object',
        },
      },
      send: false,
      sendUnsafe: false,
    },
    {
      claim: false,
      constant: true,
      name: 'getHowManyReportedPerUser',
      parameters: [
        {
          forwardedValue: false,
          name: 'reported',
          optional: false,
          type: 'Address',
        },
        {
          forwardedValue: false,
          name: 'reporter',
          optional: false,
          type: 'Address',
        },
      ],
      receive: false,
      returnType: {
        decimals: 0,
        forwardedValue: false,
        optional: false,
        type: 'Integer',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      claim: false,
      constant: true,
      name: 'getPreviousReportsDateDiff',
      parameters: [
        {
          forwardedValue: false,
          name: 'reported',
          optional: false,
          type: 'Address',
        },
        {
          forwardedValue: false,
          name: 'reporter',
          optional: false,
          type: 'Address',
        },
      ],
      receive: false,
      returnType: {
        decimals: 0,
        forwardedValue: false,
        optional: false,
        type: 'Integer',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      claim: false,
      constant: false,
      name: 'reportProfile',
      parameters: [
        {
          forwardedValue: false,
          name: 'owner',
          optional: false,
          type: 'Address',
        },
        {
          forwardedValue: false,
          name: 'reported',
          optional: false,
          type: 'Address',
        },
        {
          forwardedValue: false,
          name: 'reason',
          optional: false,
          type: 'String',
        },
      ],
      receive: false,
      returnType: {
        optional: false,
        type: 'Void',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      name: 'deploy',
      parameters: [],
      returnType: {
        type: 'Boolean',
      },
    },
  ],
};
