// This is for changing properties when hovering

<template>
  <a @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)" class="content-around">
    <client-only>
      <eva-icon
        class="mr-1 align-middle"
        :width="width"
        :height="height"
        v-bind:name="computedName"
        :fill="computedFillColor"
      />
    </client-only>
    <span
      class="text-center align-middle"
      v-bind:style="{ color: computedFillColor }"
      >{{ count == null ? 0 : count }}</span
    >
  </a>
</template>

<script>
export default {
  props: ["name", "nameOnHover", "height", "width", "count", "fillColor"],
  data() {
    return {
      hover: false,
      computedName: this.name,
      computedFillColor: "black",
    };
  },
  methods: {
    toggleHover(hover) {
      if (hover) {
        this.computedName =
          this.nameOnHover == null ? this.name : this.nameOnHover;
        this.computedFillColor = this.fillColor;
      } else {
        this.computedName = this.name;
        this.computedFillColor = "black";
      }
    },
  },
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>