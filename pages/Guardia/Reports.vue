<template>
  <div class="bg-main">
    <HomePageTopbar />
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 content-center">
        <div class="col-span-1 md:col-span-2">
          <reportuser />
        </div>
        <div class="h-screen col-span-1">
          <div class="mb-4 mt-2">
            <a
              href="#"
              class="
                block
                bg-libertia
                hover:bg-blue-700
                text-white
                font-bold
                py-3
                px-4
                rounded-full
                mb-3
                w-full
                text-center
              "
            >
              See My Guardia Rewards
            </a>
          </div>
          <reportsidebar class="mt-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import reportsidebar from "../../components/ReportPage/reportsidebar.vue";
import Reportuser from "../../components/ReportPage/reportuser.vue";

export default {
  components: { reportsidebar, Reportuser },
};
</script>

<style>
</style
Reportsidebar>