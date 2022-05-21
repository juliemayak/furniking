<template>
  <div class="flex flex-col font-mulish items-center">
    <h2 class="h2-title mb-10 sm:mb-12 text-center">
      {{ title }}
    </h2>
    <div
      class="flex text-li-gray mb-10 sm:mb-[73px] space-x-8 lg:space-x-[70px]"
    >
      <button
        v-for="section of sections"
        :key="section"
        :class="[
          'text-sm sm:text-2xl hover-scale-up will-change-transform',
          activeSection === section && 'text-main-color',
        ]"
        @click="activeSection = section"
      >
        {{ section }}
      </button>
    </div>
    <div class="products">
      <Product
        v-for="{
          id,
          src,
          category,
          goodName,
          currentPrice,
          prevPrice,
          currency,
          rating,
          label,
        } of productsData"
        :key="id"
        :src="src"
        :category="category"
        :goodName="goodName"
        :currentPrice="currentPrice"
        :prevPrice="prevPrice"
        :currency="currency"
        :rating="rating"
        :label="label"
      />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product';
export default {
  name: 'ProductsMasonry',
  components: {
    Product,
  },
  props: {
    productsData: {
      type: Array,
      required: true,
    },
    title: { type: String, required: true },
    sections: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isSectionActive: {
        type: Boolean,
        default: false,
      },
      activeSection: this.sections[0],
    };
  },
};
</script>

<style scoped lang="scss">
.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  row-gap: 15px;

  @include media-sm {
    column-gap: 31px;
    row-gap: 45px;
  }

  @include media-lg {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 31px;
    row-gap: 45px;
  }

  @include media-xl {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
