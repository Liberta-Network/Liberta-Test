/* @hash a07efd817601e71988aac031f8cd4f40 */
// tslint:disable
/* eslint-disable */
import { ABI } from '@neo-one/client';

export const postsABI: ABI = {
  events: [
    {
      name: 'postAdded',
      parameters: [
        {
          forwardedValue: false,
          name: 'post',
          optional: false,
          properties: {
            canBeParent: {
              forwardedValue: false,
              optional: false,
              type: 'Boolean',
            },
            commentCount: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
            },
            content: {
              forwardedValue: false,
              optional: false,
              type: 'String',
            },
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
            images: {
              forwardedValue: false,
              optional: false,
              type: 'Array',
              value: {
                forwardedValue: false,
                optional: false,
                type: 'String',
              },
            },
            owner: {
              forwardedValue: false,
              optional: false,
              type: 'Address',
            },
            parentPostId: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
            },
            shareCount: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
            },
          },
          type: 'Object',
        },
      ],
    },
  ],
  functions: [
    {
      claim: false,
      constant: false,
      name: 'addPost',
      parameters: [
        {
          forwardedValue: false,
          name: 'owner',
          optional: false,
          type: 'Address',
        },
        {
          forwardedValue: false,
          name: 'content',
          optional: false,
          type: 'String',
        },
        {
          decimals: 0,
          forwardedValue: false,
          name: 'parentPostId',
          optional: true,
          type: 'Integer',
        },
        {
          forwardedValue: false,
          name: 'images',
          optional: true,
          type: 'Array',
          value: {
            forwardedValue: false,
            optional: false,
            type: 'String',
          },
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
      name: 'deletePost',
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
          name: 'postId',
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
      name: 'editPost',
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
          name: 'postId',
          optional: false,
          type: 'Integer',
        },
        {
          forwardedValue: false,
          name: 'newContent',
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
      claim: false,
      constant: true,
      name: 'getPostsByAddress',
      parameters: [
        {
          forwardedValue: false,
          name: 'owner',
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
            canBeParent: {
              forwardedValue: false,
              optional: false,
              type: 'Boolean',
            },
            commentCount: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
            },
            content: {
              forwardedValue: false,
              optional: false,
              type: 'String',
            },
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
            images: {
              forwardedValue: false,
              optional: false,
              type: 'Array',
              value: {
                forwardedValue: false,
                optional: false,
                type: 'String',
              },
            },
            owner: {
              forwardedValue: false,
              optional: false,
              type: 'Address',
            },
            parentPostId: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
            },
            shareCount: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
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
      constant: false,
      name: 'toggleParentPost',
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
          name: 'postId',
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
