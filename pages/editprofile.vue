<template>
   <div class="bg-main">
    <HomePageTopbar/>
    <div class="max-w-screen-xl">
      <div class="grid grid-cols-2 md:grid-cols-3 ">
        <div class="col-span-2">
        <editprofilearea/>
        </div>
        <editsidebar/>
      </div>
    </div>
  </div>
</template>

<script>
import Editprofilearea from '../components/EditProfile/editprofilearea.vue'
import editsidebar from '../components/EditProfile/editsidebar.vue'
export default {
  components: { editsidebar, Editprofilearea },

}
</script>

<style>

</style>