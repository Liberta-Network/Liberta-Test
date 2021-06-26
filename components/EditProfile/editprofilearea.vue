<template>
  <div class="bg-white border mt-5 mx-44 w-auto">
    <div class="flex flex-row content-between rounded-libertiabr">
      <div class="flex-auto">
        <div class="ml-10">
          <nav class="mt-4 ml-16">
            <div class="flex">
              <h1 class="text-xl font-bold mb-7 mt-5">Profile Settings</h1>
            </div>
            <div id="header" class="flex items-center mb-10">
              <img
                alt="avatar"
                class="w-10 rounded-full border-2 border-gray-300"
                src="https://picsum.photos/seed/picsum/200"
              />
              <div id="header-text" class="leading-5 ml-6 sm">
                <h4 class="text-lg font-semibold text-gray-500 -mt-1">
                  walletcode
                </h4>

                <a class="text-libertia text-sm" href="../homepage"
                  >Change Profile Picture</a
                >
              </div>
            </div>
            <form class="bg-white rounded">
              <div class="mb-8">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Your Name
                </label>
                <input
                  class="
                    bg-searchbarBG
                    h-10
                     w-2/4
                    px-4
                    rounded
                    text-sm
                    focus:outline-none
                  "
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
                
              </div>

              <div class="mb-8">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Username
                </label>
                <input
                  class="
                    bg-searchbarBG
                    h-10
                    w-2/4
                    px-4
                    rounded
                    text-sm
                    focus:outline-none
                  "
                  id="username"
                  type="text"
                  placeholder="Username"
                />
                
              </div>
              <div class="mb-8">
               <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-1 leading-tight" type="checkbox">
      <span class="text-sm">
        Private Account
      </span>
    </label>
                
              </div>
<libertabutton text="Save" click="../homepage" class="bg-libertia text-white rounded-libertabr hover:text-current hover:bg-current mb-8"/>
              
            </form>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Libertabutton from '../libertabutton.vue';
export default {};
</script>

<style>

</style>
Libertabutton