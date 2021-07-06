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

import Modal from "../components/Modal.vue";

const dummyData = [
  {
    id: 0,
    owner: "Winnerose",
    content:
      "Hello this is my new post.Cillum cupidatat minim non voluptate reprehenderit irure aliqua nulla commodo nisi cillum. Duis sunt incididunt in voluptate ut. Non ea fugiat nostrud dolor in. Tempor et magna qui est nisi enim fugiat esse esse et commodo sunt sit do. Lorem incididunt culpa do veniam magna fugiat do officia velit et. Laborum ut ipsum dolor tempor aliqua reprehenderit do elit tempor reprehenderit Lorem ipsum.",
    likeCount: 0,
    shareCount: 0,
    date: Date.now(),
  },
  {
    id: 1,
    owner: "Winnerose",
    content: "Hello this is my first post.",
    likeCount: 0,
    shareCount: 0,
    date: Date.now(),
  },
  {
    id: 2,
    owner: "Winnerose",
    content: "Hello this is my second post.",
    likeCount: 0,
    shareCount: 0,
    date: Date.now(),
  },
  {
    id: 3,
    owner: "Winnerose",
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
      modalShow: true,
    };
  },
  components: { Post, Sidebar, Modal },
  methods: {},
};
</script>

<style>
</style>