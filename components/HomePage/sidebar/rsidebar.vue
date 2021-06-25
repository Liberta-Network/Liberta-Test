<template>
  <div class="mt-3 hidden md:block flex flex-col pt-2">
    <Modal :showing="modalShow" @close="modalShow = false">
      <span class="text-lg font-bold">Add Post</span>

      <textarea
        class="
          mt-3
          bg-searchbarBG
          py-2
          px-4
          rounded
          text-sm
          focus:outline-none
          w-full
          text-base
        "
        rows="3"
        contenteditable="true"
        type="text"
        name="comment"
        placeholder="Comment"
      />

      <div class="flex flex-row content-between">
        <div class="flex-auto">
          <client-only>
            <a
              href="#"
              class="
                block
                mt-4
                lg:inline-block
                lg:mt-0
                px-2
                py-2
                rounded
                hover:bg-searchbarBG
                mr-2
                inline-block
                align-top
              "
            >
              <eva-icon
                name="image"
                animation="pulse"
                fill="#388CFC"
              ></eva-icon>
            </a>
          </client-only>
        </div>
        <div class="self-right">
          <button
            class="
              mt-3
              bg-libertia
              text-white
              px-4
              py-2
              text-sm
              uppercase
              tracking-wide
              font-bold
              rounded-full
            "
            @click="modalShow = false"
          >
            Post
          </button>
        </div>
      </div>
    </Modal>

    <div class="h-screen">
      <a
        href="#"
        @click="modalShow = true"
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
        Add Post
      </a>

      <SidebarSection title="Top Communites">
        <nav class="mt-4">
          <a
            class="
              flex
              items-center
              mt-2
              py-2
              text-gray-600
              border-white
              hover:bg-gray-200
              hover:text-gray-700
              hover:border-gray-700
              px-6
            "
            href="#"
          >
            <client-only>
              <cryptoicon symbol="neo" size="24" color="#93cb30" />
            </client-only>
            <span class="mx-4 font-medium">NEO</span>
          </a>
          <a
            class="
              flex
              items-center
              mt-2
              py-2
              text-gray-600
              border-white
              hover:bg-gray-200
              hover:text-gray-700
              hover:border-gray-700
              px-6
            "
            href="#"
          >
            <client-only>
              <cryptoicon symbol="btc" size="24" color="#ff9900" />
            </client-only>
            <span class="mx-4 font-medium">BTC</span>
          </a>
          <a
            class="
              flex
              items-center
              mt-2
              py-2
              text-gray-600
              border-white
              hover:bg-gray-200
              hover:text-gray-700
              hover:border-gray-700
              px-6
            "
            href="#"
          >
            <client-only>
              <cryptoicon symbol="doge" size="24" color="#d9bd62" />
            </client-only>
            <span class="mx-4 font-medium">DOGE</span>
          </a>
        </nav>
      </SidebarSection>

      <SidebarSection title="Top Tags">
        <nav class="mt-4">
          <div class="mt-2 px-6">
            <span class="mx-2 text-tags">#Bitcoin</span><br />
            <span class="mx-2 font-medium">3000 Tags</span>
            <hr class="mt-3" width="200px" />
          </div>
          <div class="mt-2 px-6">
            <span class="mx-2 font-medium">#Bitcoin</span><br />
            <span class="mx-2 font-medium">3000 Tags</span>
            <hr class="mt-3" width="200px" />
          </div>
          <div class="mt-2 px-6">
            <span class="mx-2 font-medium">#Bitcoin</span><br />
            <span class="mx-2 font-medium">3000 Tags</span>
            <hr class="mt-3" width="200px" />
          </div>
          <div class="mt-2 px-6">
            <span class="mx-2 font-medium">#Bitcoin</span><br />
            <span class="mx-2 font-medium">3000 Tags</span>
            <hr class="mt-3" width="200px" />
          </div>
        </nav>
      </SidebarSection>
    </div>
  </div>
</template>

<script>
import SidebarSection from "./sidebar-section.vue";

export default {
  components: { SidebarSection },
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>

<style>
.rounded {
  border-radius: 1rem;
}

.rounded-full {
  border-radius: 9999px;
}
</style>