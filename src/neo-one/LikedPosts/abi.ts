/* @hash 307f67ba11880567c5d7c65ce23b9ab7 */
// tslint:disable
/* eslint-disable */
import { ABI } from '@neo-one/client';

export const likedPostsABI: ABI = {
  events: [],
  functions: [
    {
      claim: false,
      constant: true,
      name: 'getLikeCountFromPostId',
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
      name: 'checkOwnerLiked',
      parameters: [
        {
          forwardedValue: false,
          name: 'owner',
          optional: false,
          type: 'Address',
        },
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
        type: 'Boolean',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      claim: false,
      constant: false,
      name: 'likePost',
      parameters: [
        {
          forwardedValue: false,
          name: 'owner',
          optional: false,
          type: 'Address',
        },
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
        optional: false,
        type: 'Void',
      },
      send: false,
      sendUnsafe: false,
    },
    {
      claim: false,
      constant: false,
      name: 'unlikePost',
      parameters: [
        {
          forwardedValue: false,
          name: 'owner',
          optional: false,
          type: 'Address',
        },
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
