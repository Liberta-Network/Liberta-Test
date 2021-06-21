<template>
  <div
    class="
      bg-white
      border
      flex
      p-6
      mt-66
      sm:mx-smprofilecard
      grid grid-cols-1
      md:grid-cols-2
    "
  >
    <div class="col-span-1">
      <div id="header" class="flex items-center mb-4">
        <img
          alt="avatar"
          class="w-20 rounded-full border-2 border-gray-300"
          src="https://picsum.photos/seed/picsum/200"
        />

        <div class="ml-7">
          <p class="text-base leading-6 font-medium text-gray-700">WinneRose</p>
          <p
            class="
              text-sm
              leading-5
              font-medium
              text-gray-400
              group-hover:text-gray-300
            "
          >
            @WinneRose
          </p>
          <i
            class="
              text-sm
              leading-5
              font-small
              text-gray-400
              group-hover:text-gray-300
              font-open-sans
            "
          >
            ~GTHRTHtr6htrHTRHrt6HTRh
          </i>
        </div>
      </div>
    </div>

    <div class="col-span-1">
      <div class="grid grid-cols-3 md:ml-26">
        <div>
          <p class="text-center leading-6 font-medium text-gray-700">
            Followers
          </p>
          <p
            class="
              text-sm
              leading-5
              font-medium
              text-gray-400
              group-hover:text-gray-300
              text-center
            "
          >
            10
          </p>
        </div>
        <div class="">
          <p class="text-center leading-6 font-medium text-gray-700">
            Following
          </p>
          <p
            class="
              text-sm
              leading-5
              font-medium
              text-gray-400
              group-hover:text-gray-300
              text-center
            "
          >
            10
          </p>
        </div>
        <div class="">
          <p class="text-center leading-6 font-medium text-gray-700">Posts</p>
          <p
            class="
              text-sm
              leading-5
              font-medium
              text-gray-400
              group-hover:text-gray-300
              text-center
            "
          >
            10
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.rounded-full {
  border-radius: 100%;
}
</style>