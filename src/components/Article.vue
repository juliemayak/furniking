<template>
  <div
    class="relative min-w-[300px] max-w-[570px] max-h-[455px] rounded-lg text-white cursor-default"
  >
    <Picture
      :src="src"
      alt=""
      className="w-full h-full object-cover select-none"
    />
    <div
      class="absolute bottom-4 left-2 sm:left-5 sm:bottom-7 xl:left-11 min-w-[280px] sm:min-w-[370px] max-w-[490px] z-10"
    >
      <div class="flex mb-5 space-x-3">
        <CategoryTag :categoryName="articleCategory" />
        <span class="text-sm"> {{ publicationDate }} </span>
      </div>
      <h3 class="font-bold text-lg sm:text-[39px] sm:leading-[47px] mb-4">
        {{ articleTitle }}
      </h3>
      <a
        href="/"
        class="block hover-move-right select-none will-change-transform"
      >
        Read more
      </a>
    </div>
    <div
      class="absolute w-full h-full bg-black top-0 left-0 opacity-40 rounded-lg"
    />
  </div>
</template>

<script>
import Picture from '@/components/Picture';
import CategoryTag from '@/components/CategoryTag';

export default {
  name: 'Article',
  components: {
    Picture,
    CategoryTag,
  },
  props: {
    articleTitle: {
      type: String,
      required: true,
    },
    articleCategory: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss"></style>
