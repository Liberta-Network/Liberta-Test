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
      <div class="flex mt-7">
        <div class="flex mr-5 text-gray-700 text-sm">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            class="w-4 h-4 mr-1"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          <span>8</span>
        </div>

        <div class="flex mr-2 text-gray-700 text-sm">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            class="w-4 h-4 mr-1"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          <span>8</span>
        </div>
      </div>
    </div>
    <!-- End of component -->
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

