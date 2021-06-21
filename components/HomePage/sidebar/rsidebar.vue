<template>
  <div class="mt-3 hidden md:block flex flex-col pt-2">
    <div class="h-screen">
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
};
</script>

<style>
.rounded {
  border-radius: 1rem;
}
</style>