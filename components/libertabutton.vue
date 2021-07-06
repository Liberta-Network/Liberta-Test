<template>
  <a
    v-bind:href="click"
    class="
      block
      mt-4
      lg:inline-block
      lg:mt-0
      px-4
      py-2
      rounded
      hover:bg-searchbarBG
      mr-2
      text-libertia
      cursor-pointer
    "
  >
   {{text}}
  </a>
</template>

<script>
export default {
  props: ['text', 'click'],
};
</script>

