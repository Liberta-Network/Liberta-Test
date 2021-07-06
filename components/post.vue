<template>
  <div class="h-auto flex">
    <!-- Start of component -->

    <div
      class="w-full bg-white border p-6 tracking-wide mt-5 mx-3 cursor-pointer"
      v-bind:class="{
        rounded: !radiusJustTop,
        'rounded-t': radiusJustTop,
        shadow: hover,
      }"
      @click="redirectToPost"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <div id="header" class="flex items-center mb-4">
        <img
          alt="avatar"
          class="w-10 rounded-full border-2 border-gray-300"
          src="https://picsum.photos/seed/picsum/200"
        />
        <div id="header-text" class="leading-5 ml-6 sm">
          <div class="flex justify-between">
            <h4 class="text-lg font-semibold text-gray-900 -mt-1">
              {{ post.owner }}
            </h4>
            <small class="text-sm text-gray-700 ml-3">22h ago</small>
          </div>
        </div>
      </div>
      <div class="font-roboto w-340">
        {{ post.content }}
      </div>
      <div class="flex rounded mt-5 py-3 px-3 bg-searchbarBG md:w-1/4">
        <div class="flex-auto text-gray-700 inline">
          <SocialButton
            name="heart-outline"
            nameOnHover="heart"
            width="20"
            height="20"
            fillColor="red"
            :count="post.likeCount"
          />
        </div>

        <div class="flex-auto content-center text-gray-700 inline">
          <SocialButton
            name="message-circle-outline"
            nameOnHover="message-circle"
            width="20"
            height="20"
            fillColor="blue"
          />
        </div>
      </div>
    </div>
    <!-- End of component -->
  </div>
</template>

<script>
import SocialButton from "./social-button.vue";

export default {
  components: { SocialButton },
  props: ["post", "radiusJustTop"],
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    redirectToPost() {
      console.log(this.post);
      if (this.post == undefined) return;
      const { id } = this.post;
      const route = `/Post/${id}`;
      this.$router.push(route);
    },
  },
};
</script>
 
<style scoped>
.rounded-t {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.hover-shadow {
  -webkit-box-shadow: 0px 0px 24px 1px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 0px 24px 1px rgba(0, 0, 0, 0.65);
}
</style>