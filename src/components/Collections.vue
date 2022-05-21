<template>
  <div class="flex flex-col absolute inset-x-3 sm:right-auto lg:static">
    <div
      class="pt-6 pb-5 px-5 xl:pr-10 xl:pl-7 space-x-3 xl:space-x-5 bg-main-color text-white flex items-center z-20 transition-all duration-500 lg:pointer-events-none cursor-pointer"
      @click="toggleCollectionsVisibility"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 13H15"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 6H21"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 20H9"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span
        class="whitespace-nowrap uppercase text-sm xl:text-base xl:tracking-wide font-medium selection-default"
      >
        All Collections
      </span>
    </div>
    <ul
      :class="[
        'collections-list flex flex-col max-h-[455px] sm:max-h-[410px] lg:max-h-[455px] overflow-y-scroll overflow-x-hidden transition-transform duration-500 bg-bg-light-gray z-10',
        collectionsVisibility
          ? '-translate-y-full lg:translate-y-0'
          : 'translate-y-0',
      ]"
    >
      <li
        v-for="collection of collections"
        :key="collection.value"
        class="collections-list__li text-sm tracking-wide px-7 break-words py-[10px] text-dark-gray border-b-[0.8px] border-border-gray cursor-pointer hover-scale-up will-change-transform"
      >
        <a href="/">{{ collection.value }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Collections',
  props: {
    collections: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      collectionsVisibility: true,
    };
  },
  methods: {
    toggleCollectionsVisibility() {
      this.collectionsVisibility = !this.collectionsVisibility;
    },
  },
};
</script>

<style scoped lang="scss">
.collections-list {
  &__li:last-child {
    padding-bottom: 14px;
  }
}
</style>
