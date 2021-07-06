<template>
  <div class="bg-main">
    <HomePageTopbar />
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 content-center">
        <div class="col-span-1 md:col-span-2">
          <reportuser />
        </div>
        <div class="h-screen col-span-1">
          <reportsidebar class="mt-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import reportsidebar from "../components/ReportPage/reportsidebar.vue";
import Reportuser from "../components/ReportPage/reportuser.vue";

export default {
  components: { reportsidebar, Reportuser },
};
</script>

<style>
</style
Reportsidebar>