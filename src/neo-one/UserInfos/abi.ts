/* @hash afb59a3f65a36017ea8752dd13914781 */
// tslint:disable
/* eslint-disable */
import { ABI } from '@neo-one/client';

export const userInfosABI: ABI = {
  events: [],
  functions: [
    {
      claim: false,
      constant: true,
      name: 'getUserInfoByAddress',
      parameters: [
        {
          forwardedValue: false,
          name: 'addr',
          optional: false,
          type: 'Address',
        },
      ],
      receive: false,
      returnType: {
        forwardedValue: false,
        optional: false,
        properties: {
          address: {
            forwardedValue: false,
            optional: false,
            type: 'Address',
          },
          biography: {
            forwardedValue: false,
            optional: false,
            type: 'String',
          },
          fullname: {
            forwardedValue: false,
            optional: false,
            type: 'String',
          },
          profileImage: {
            forwardedValue: false,
            optional: false,
            type: 'String',
          },
          username: {
            forwardedValue: false,
            optional: false,
            type: 'String',
          },
        },
        type: 'Object',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      claim: false,
      constant: false,
      name: 'setUserInfo',
      parameters: [
        {
          forwardedValue: false,
          name: 'owner',
          optional: false,
          type: 'Address',
        },
        {
          forwardedValue: false,
          name: 'profileImage',
          optional: false,
          type: 'String',
        },
        {
          forwardedValue: false,
          name: 'username',
          optional: false,
          type: 'String',
        },
        {
          forwardedValue: false,
          name: 'fullname',
          optional: false,
          type: 'String',
        },
        {
          forwardedValue: false,
          name: 'biography',
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
