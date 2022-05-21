<template>
  <div class="flex">
    <span class="text-main-color font-bold mr-2">
      {{ currency }} {{ currentPrice }}
    </span>
    <span class="text-price-gray font-semibold line-through">
      {{ currency }} {{ prevPrice }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'PriceTag',
  components: {},
  props: {
    currentPrice: {
      type: String,
      required: true,
    },
    prevPrice: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
