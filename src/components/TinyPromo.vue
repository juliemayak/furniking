<template>
  <div
    v-for="{ id, src, currency, price, itemName } of tinyPromoData"
    :key="id"
    class="px-2 bg-white rounded-lg flex flex-col justify-between items-center py-1"
  >
    <Picture
      :src="src"
      :alt="itemName"
      className="w-20 h-14 object-contain select-none"
    />
    <p class="text-main-color font-medium text-[11px]">
      <span class="text-[8px]">{{ currency }}</span>
      {{ price }}
    </p>
    <p
      class="text-dark-gray text-[7px] font-medium max-w-[70px] overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {{ itemName }}
    </p>
  </div>
</template>

<script>
import Picture from '@/components/Picture';

export default {
  name: 'TinyPromo',
  components: {
    Picture,
  },
  props: {
    tinyPromoData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
