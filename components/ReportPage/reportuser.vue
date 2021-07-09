<template>
  <div>

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

    <reportusercard class="mb-2 mt-2"  @click="modalShow = true" />
    <reportusercard class="mb-2 mt-2"  @click="modalShow = true" />
    <reportusercard class="mb-2 mt-2"  @click="modalShow = true" />
  </div>
</template>

<script>
import Reportusercard from './reportusercard.vue';
export default {
  components: {Reportusercard },
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>

<style></style>
