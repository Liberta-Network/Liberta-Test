<template>
  <div class="bg-main">
    <HomePageTopbar></HomePageTopbar>
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 content-center">
        <div class="col-span-1 md:col-span-2">
          <profilecard class="mt-5"></profilecard>

          <Post v-for="post of posts" :post="post" :key="post.id" />
        </div>
        <div class="h-screen col-span-1">
          <rsidebar />
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