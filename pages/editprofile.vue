<template>
  <div class="bg-main">
    <HomePageTopbar />
    <div class="max-w-screen-md mx-auto">
      <editprofilearea />
    </div>
  </div>
</template>

<script>
import Editprofilearea from "../components/EditProfile/editprofilearea.vue";
export default {
  components: { Editprofilearea },
};
</script>

<style>
</style>