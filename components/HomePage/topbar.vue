<template>
  <!-- component -->
  <div class="border-solid border-t-2 border-libertia bg-white">
    <nav
      class="
        flex
        items-center
        justify-between
        flex-wrap
        py-4
        mx-auto
        max-w-screen-xl
      "
    >
      <div
        class="
          flex
          justify-between
          lg:w-auto
          w-full
          lg:border-b-0
          pl-6
          pr-2
          border-solid border-b-2 border-gray-300
          pb-5
          lg:pb-0
        "
      >
        <div class="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <span class="font-bold text-xl tracking-tight text-libertia"
            >Liberta</span
          >
        </div>
        <div v-on:click="isHidden = !isHidden" class="block lg:hidden">
          <button
            id="nav"
            class="
              flex
              items-center
              px-3
              py-2
              border-2
              rounded
              text-libertia
              border-libertia
              hover:text-libertia
              hover:border-libertia
            "
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- This is an example component -->
      <div class="mx-auto text-gray-600 lg:block hidden mr-5">
        <input
          class="
            bg-searchbarBG
            h-10
            w-60
            px-4
            rounded
            text-sm
            focus:outline-none
          "
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>

      <div
        class="
          menu
          w-full
          lg:block
          flex-grow
          lg:flex
          lg:items-center
          lg:w-auto
          lg:px-3
          px-3
        "
        v-if="!isHidden"
      >
        <div class="text-md font-bold text-libertia lg:flex-grow">
          <libertabutton click="/" text="Home"></libertabutton>
          <libertabutton click="/Explore" text="Explore"></libertabutton>
          <libertabutton click="/Messages" text="Messages"></libertabutton>
          <libertabutton click="/Profile" text="Profile"></libertabutton>
        </div>

        <div class="flex">
          <a
            href="#"
            v-if="!isConnected"
            class="
              block
              text-md
              px-2
              ml-2
              py-2
              rounded
              text-libertia
              font-bold
              hover:text-white
              mt-4
              hover:bg-libertia
              lg:mt-0
            "
            >Connect</a
          >
          <span v-else>{{ walletAddress }}</span>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import libertabutton from '../libertabutton.vue';
export default {
  components: { libertabutton },
  data: function () {
    return {
      isHidden: false,
      isConnected: false,
      isLoading: false,
      walletAddress: null,
    };
  },
  mounted() {
    this.$neolineN3.then((neoline) => {
      let loader = this.$loading.show({
        container: this.fullPage,
        canCancel: false,
      });

      neoline
        .getAccount()
        .then((account) => {
          this.isConnected = true;
          this.walletAddress = account.address;
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    });
  },
};
</script>

<style>
a {
  font-weight: 700;
  font-family: "Open Sans";
}
</style>