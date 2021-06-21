<template>
  <div class="h-auto flex">
    <!-- Start of component -->
    <div class="w-full rounded bg-white border p-6 tracking-wide mt-5 mx-3">
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

        <div class="flex-auto text-gray-700 inline">
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
  props: ["post"],
};
</script>
 
