// import Vue from "vue";

// import {
//   DappBrowserUserAccountProvider,
//   BrowserExtensionUserAccountProvider,
//   SomeOtherWalletProvider,
//   LocalKeyStore,
//   LocalMemoryStore,
//   LocalUserAccountProvider,
// } from "@neo-one/client";
// import { createClient, contractsService } from "../src/neo-one";

// const getUserAccountProviders = (provider) => {
//   const dapp = new DappBrowserUserAccountProvider();
//   const extension = new BrowserExtensionUserAccountProvider();
//   const other = new SomeOtherWalletProvider();
//   if (process.env.NODE_ENV === 'production') {
//     return { dapp, extension, other };
//   }

//   const memory = new LocalUserAccountProvider({
//     keystore: new LocalKeyStore(new LocalMemoryStore()),
//     provider,
//   });

//   return { dapp, extension, other, memory };
// };

// const client = createClient(getUserAccountProviders);

// Vue.prototype.$neolineN3.then(async (neoline) => {
//   const provider = await neoline.getProvider();
//   const accountProviders = getDefaultUserAccountProviders(provider);
//   // console.log(accountProviders);

//   const client = createClient(accountProviders);
//   const currentAccount = client.getCurrentUserAccount();
//   console.log(currentAccount);
// });

// Vue.prototype.$postContract = contractsService.posts;
// // console.log(contractsService.posts);

// // contractsService.posts.addPost(
// //   "NVdNWeZSgEtzW6Sdo1LLWDU2cgxkj2igmv",
// //   "It is my first post",
// //   0,
// //   0
// // );
