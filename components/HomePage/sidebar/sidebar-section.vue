<template>
  <div class="rounded border bg-white px-8 py-5 mb-3">
    <div class="flex">
      <h1 class="text-xl font-bold">{{ title }}</h1>
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

