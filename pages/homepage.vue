<template>
  <div class="bg-main">
    <HomePageTopbar></HomePageTopbar>
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-3 content-center">
        <div class="col-span-2">
          <Post />
        </div>
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/post.vue";
import Sidebar from "../components/HomePage/sidebar/rsidebar.vue";

export default {
  components: { Post, Sidebar },
};
</script>

<style>
</style>