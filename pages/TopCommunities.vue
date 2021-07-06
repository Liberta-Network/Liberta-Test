<template>
  <div class="bg-main">
    <HomePageTopbar></HomePageTopbar>
    <div class="max-w-screen-xl mx-auto">
      <div class="mt-4">
        <Community CommunityName="Bitcoiners" Users="25" Posts="128" Rank="1" />
        <Community
          CommunityName="Technic Analysis"
          Users="15"
          Posts="228"
          Rank="2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Community from "../components/TopCommunities/Community.vue";

export default {
  components: { Community },
};
</script>