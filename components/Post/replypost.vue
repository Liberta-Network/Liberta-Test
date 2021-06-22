<template>
  <div class="h-auto flex">
    <!-- Start of component -->
    <div class="lg:w-full replyborder bg-white border p-6 tracking-wide  mx-3">
        <div class="relative mx-auto text-gray-600 lg:block mr-5 ">
        <p class="mb-2 ml-1">Reply To WinneRose</p>
        <input 
          class="
            bg-searchbarBG
            h-10
            min-w-200
            px-4
            rounded
            text-sm
            focus:outline-none
            w-10/12
            mr-10
            
          "
          contenteditable= "true"
          type="text"
          name="comment"
          placeholder="Comment"
        />
          <libertabutton text="Send" class="text-md text-white hover:text-libertia font-bold bg-libertia "></libertabutton>
      </div>
    
    </div>
  </div>
</template>

<script>
import Libertabutton from '../libertabutton.vue'
export default {

}
</script>

<style>
.replyborder{
    border-radius: 0px 0px 10px 10px;
}




</style>