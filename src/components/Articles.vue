<template>
  <div class="flex flex-col items-center mb-16 sm:mb-[115px] font-mulish">
    <h2 class="h2-title mb-10 sm:mb-16 text-center">Our Latest Articles</h2>
    <div class="articles">
      <Article
        v-for="{
          id,
          articleTitle,
          articleCategory,
          publicationDate,
          src,
        } of articlesData"
        :key="id"
        :articleTitle="articleTitle"
        :articleCategory="articleCategory"
        :publicationDate="publicationDate"
        :src="src"
      />
    </div>
  </div>
</template>

<script>
import Article from '@/components/Article';

export default {
  name: 'Articles',
  components: {
    Article,
  },
  data() {
    return {
      articlesData: [
        {
          id: 1,
          articleTitle: 'Beginner guide buying minimal sofa',
          articleCategory: 'Furniture',
          publicationDate: '23 September 2022',
          src: '/article-card-1.png',
        },
        {
          id: 2,
          articleTitle: 'Buying best minimal computer table',
          articleCategory: 'TABLE',
          publicationDate: '23 September 2022',
          src: '/article-card-2.png',
        },
        {
          id: 3,
          articleTitle: 'How to choose best modern bench',
          articleCategory: 'Bench',
          publicationDate: '23 march 2022',
          src: '/article-card-3.png',
        },
        {
          id: 4,
          articleTitle: 'Best Summer Outfit Style in this Country',
          articleCategory: 'Chair',
          publicationDate: '23 march 2022',
          src: '/article-card-4.png',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.articles {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 30px;

  @include media-lg {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 28px;
    row-gap: 22px;
  }
}
</style>
