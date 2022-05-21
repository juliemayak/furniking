<template>
  <nav class="max-w-4xl">
    <ul
      class="flex ml-52 md:ml-60 lg:ml-20 bg-bg-light-gray justify-between max-w-[510px]"
    >
      <li
        v-for="navSection of navSections"
        :key="navSection.value"
        class="py-6 text-sm text-dark-gray uppercase cursor-pointer hover-jump"
      >
        <a href="/"> {{ navSection.value }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    navSections: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
