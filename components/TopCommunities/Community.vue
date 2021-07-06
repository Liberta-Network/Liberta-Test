<template>
  <div class="mt-2 mb-2">
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
        rounded
      "
    >
      <div class="col-span-1">
        <div id="header" class="flex items-center mb-4">
          <img
            alt="avatar"
            class="w-20 rounded-full border-2 border-gray-300"
            src="https://bitcoin.org/img/icons/opengraph.png?1625145073"
          />

          <div class="ml-7">
            <p class="text-base leading-6 font-medium text-gray-700">
              {{ CommunityName }}
            </p>
            <i>#{{ Rank }}</i>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="grid grid-rows-2 grid-flow-col">
          <div>
            <div class="grid grid-cols-2">
              <div>
                <p class="text-center leading-6 font-medium text-gray-700">
                  Users
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
                  {{ Users }}
                </p>
              </div>

              <div class="">
                <p class="text-center leading-6 font-medium text-gray-700">
                  Posts
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
                  {{ Posts }}
                </p>
              </div>
            </div>
          </div>
          <div class="text-right my-auto">
            <liberta-button text="Join" />
            <liberta-button text="View" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LibertaButton from "../libertabutton.vue";

export default {
  components: { LibertaButton },
  props: ["CommunityName", "Users", "Posts", "Id", "Rank"],
};
</script>