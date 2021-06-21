<template>
  <div class="bg-main">
    <HomePageTopbar></HomePageTopbar>
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 content-center">
        <div class="col-span-1 md:col-span-2">
          <profilecard class="mt-5"></profilecard>

          <Post v-for="post of posts" :post="post" :key="post.id" />
        </div>
        <div class="h-screen mt-5 col-span-1">
          <HomePageSidebarSection title="Top Communites">
            <nav class="mt-4">
              <a
                class="
                  flex
                  items-center
                  mt-2
                  py-2
                  text-gray-600
                  border-white
                  hover:bg-gray-200
                  hover:text-gray-700
                  hover:border-gray-700
                  px-6
                "
                href="#"
              >
                <cryptoicon symbol="neo" size="24" color="black" />
                <span class="mx-4 font-medium">NEO</span>
              </a>
              <a
                class="
                  flex
                  items-center
                  mt-2
                  py-2
                  text-gray-600
                  border-white
                  hover:bg-gray-200
                  hover:text-gray-700
                  hover:border-gray-700
                  px-6
                "
                href="#"
              >
                <cryptoicon symbol="btc" size="24" color="black" />
                <span class="mx-4 font-medium">BTC</span>
              </a>
              <a
                class="
                  flex
                  items-center
                  mt-2
                  py-2
                  text-gray-600
                  border-white
                  hover:bg-gray-200
                  hover:text-gray-700
                  hover:border-gray-700
                  px-6
                "
                href="#"
              >
                <cryptoicon symbol="doge" size="24" color="black" />
                <span class="mx-4 font-medium">DOGE</span>
              </a>
            </nav>
          </HomePageSidebarSection>

          <HomePageSidebarSection title="Top Tags">
            <nav class="mt-4">
              <div class="mt-2 px-6">
                <span class="mx-2 text-tags">#Bitcoin</span><br />
                <span class="mx-2 font-medium">3000 Tags</span>
                <hr class="mt-3" width="200px" />
              </div>
              <div class="mt-2 px-6">
                <span class="mx-2 font-medium">#Bitcoin</span><br />
                <span class="mx-2 font-medium">3000 Tags</span>
                <hr class="mt-3" width="200px" />
              </div>
              <div class="mt-2 px-6">
                <span class="mx-2 font-medium">#Bitcoin</span><br />
                <span class="mx-2 font-medium">3000 Tags</span>
                <hr class="mt-3" width="200px" />
              </div>
              <div class="mt-2 px-6">
                <span class="mx-2 font-medium">#Bitcoin</span><br />
                <span class="mx-2 font-medium">3000 Tags</span>
                <hr class="mt-3" width="200px" />
              </div>
            </nav>
          </HomePageSidebarSection>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 0,
    owner: "WinneRose",
    content:
      "Hello this is my new post.Cillum cupidatat minim non voluptate reprehenderit irure aliqua nulla commodo nisi cillum. Duis sunt incididunt in voluptate ut. Non ea fugiat nostrud dolor in. Tempor et magna qui est nisi enim fugiat esse esse et commodo sunt sit do. Lorem incididunt culpa do veniam magna fugiat do officia velit et. Laborum ut ipsum dolor tempor aliqua reprehenderit do elit tempor reprehenderit Lorem ipsum.",
    likeCount: 0,
    shareCount: 0,
    date: Date.now(),
  },
  {
    id: 1,
    owner: "WinneRose",
    content: "Hello this is my first post.",
    likeCount: 0,
    shareCount: 0,
    date: Date.now(),
  },
];

import rsidebar from "../components/HomePage/sidebar/rsidebar.vue";
import Post from "../components/post.vue";
import Profilecard from "../components/ProfilePage/profilecard.vue";
export default {
  data() {
    return {
      posts: dummyData,
    };
  },
  components: { rsidebar, Post, Profilecard },
};
</script>

<style>
</style>