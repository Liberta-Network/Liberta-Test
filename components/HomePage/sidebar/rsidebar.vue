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
            "
            href="#"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="mx-4 font-medium">Accounts</span>
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
            "
            href="#"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="mx-4 font-medium">Accounts</span>
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
            "
            href="#"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="mx-4 font-medium">Accounts</span>
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