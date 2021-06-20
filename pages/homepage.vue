<template>
  <div class="bg-main">
    <HomePageTopbar></HomePageTopbar>
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-3 content-center">
        <div class="col-span-2">
          <Post v-for="post of posts" :post="post" :key="post.id" />
        </div>
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/post.vue";
import Sidebar from "../components/HomePage/sidebar/rsidebar.vue";

const dummyData = [
  {
    id: 0,
    owner: "",
    content: "Hello this is my new post.",
    likeCount: 0,
    shareCount: 0,
    date: Date.now(),
  },
  {
    id: 1,
    owner: "",
    content: "Hello this is my first post.",
    likeCount: 0,
    shareCount: 0,
    date: Date.now(),
  },
  {
    id: 2,
    owner: "",
    content: "Hello this is my second post.",
    likeCount: 0,
    shareCount: 0,
    date: Date.now(),
  },
  {
    id: 3,
    owner: "",
    content: "Hello this is my third post.",
    likeCount: 0,
    shareCount: 0,
    date: Date.now(),
  },
];

export default {
  data() {
    return {
      posts: dummyData,
    };
  },
  components: { Post, Sidebar },
};
</script>

<style>
</style>