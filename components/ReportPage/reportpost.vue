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
              test
            </h4>
            <small class="text-sm text-gray-700 ml-3">22h ago</small>
          </div>
        </div>
      </div>
      <div class="font-roboto w-340">
        test2test2test2test2test2test2test2test2
         <liberta-button text="Show Reports" />
      </div>
   
         
      </div>
      
    </div>
    <!-- End of component -->
</template>

<script>
import LibertaButton from "../libertabutton.vue";
export default {
  components: { LibertaButton },
  props: ["post", "radiusJustTop"],
  data() {
    return {
      hover: false,
    };
  },
}


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