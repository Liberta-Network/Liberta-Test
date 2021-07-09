<template>
  <div class="rounded border bg-white px-8 py-5 mb-3">
    <nav>
      <div class="flex">
        <h1 class="text-xl font-bold">Report Page</h1>
      </div>
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
        href="/ReportedProfiles/allreports"
      >
        <client-only>
          <eva-icon name="alert-circle"></eva-icon>
        </client-only>
        <span class="mx-4 font-medium">Report User</span>
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
        href="/ReportedPosts/allreports"
      >
        <client-only>
          <eva-icon name="archive"></eva-icon>
        </client-only>
        <span class="mx-4 font-medium">Report Post</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.rounded {
  border-radius: 1rem;
}

.rounded-full {
  border-radius: 9999px;
}
</style>