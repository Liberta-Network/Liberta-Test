/* @hash fa160a284d25f4d103f0db5188d95986 */
// tslint:disable
/* eslint-disable */
export const postsABI = {
  events: [
    {
      name: 'postAdded',
      parameters: [
        {
          forwardedValue: false,
          name: 'post',
          optional: false,
          properties: {
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
            likeCount: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
            },
            owner: {
              forwardedValue: false,
              optional: false,
              type: 'Address',
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
      constant: true,
      name: 'postCount',
      parameters: [],
      returnType: {
        decimals: 0,
        forwardedValue: false,
        optional: false,
        type: 'Integer',
      },
    },
    {
      name: 'setPostCount',
      parameters: [
        {
          decimals: 0,
          forwardedValue: false,
          name: 'postCount',
          optional: false,
          type: 'Integer',
        },
      ],
      returnType: {
        type: 'Void',
      },
    },
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
            likeCount: {
              decimals: 0,
              forwardedValue: false,
              optional: false,
              type: 'Integer',
            },
            owner: {
              forwardedValue: false,
              optional: false,
              type: 'Address',
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
      name: 'deploy',
      parameters: [],
      returnType: {
        type: 'Boolean',
      },
    },
  ],
};
