<template>
  <div class="bg-main">
    <HomePageTopbar></HomePageTopbar>
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 content-center">
        <div class="col-span-1 md:col-span-2">
       <reportpost/>
        </div>
        <div class="h-screen col-span-1">
          <div class="mx-auto text-center mt-4">
           
          </div>
         <reportsidebar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reportpost from '../../components/ReportPage/reportpost.vue'
import reportsidebar from '../../components/ReportPage/reportsidebar.vue'
export default {
  components: { reportsidebar, Reportpost },

}
</script>

<style>

</style>