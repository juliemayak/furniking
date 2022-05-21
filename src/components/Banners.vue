<template>
  <div
    class="flex flex-col items-center lg:items-stretch lg:flex-row justify-between mb-16 sm:mb-[120px] space-y-8 lg:space-y-0 lg:space-x-5 cursor-default"
  >
    <Banner
      v-for="{ id, bannerName, bannerDescr, bannerSrc } of largeBannerData"
      :key="id"
      className="max-w-[669px] max-h-[511px] flex-1"
      :bannerName="bannerName"
      :bannerDescr="bannerDescr"
      :bannerSrc="bannerSrc"
      position="top-11 left-7"
      isBold
    />
    <div class="flex flex-col justify-between space-y-4">
      <Banner
        v-for="{ id, bannerName, bannerDescr, bannerSrc } of smallBannerData"
        :key="id"
        className="h-[247px] max-w-[485px] min-w-[307px]"
        :bannerName="bannerName"
        :bannerDescr="bannerDescr"
        :bannerSrc="bannerSrc"
        position="top-12 left-5"
      />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner';

export default {
  name: 'Banners',
  components: {
    Banner,
  },
  props: {},
  data() {
    return {
      largeBannerData: [
        {
          id: 1,
          bannerName: 'Modern Furniture Collections',
          bannerDescr: 'Starting from $500',
          bannerSrc: '/banner-1.png',
        },
      ],
      smallBannerData: [
        {
          id: 1,
          bannerName: 'Geometric Bookcase',
          bannerDescr: 'Up to 20% discount',
          bannerSrc: '/banner-2.png',
        },
        {
          id: 2,
          bannerName: 'Minimal Sofa collections ',
          bannerDescr: 'Sale up to 40% discount',
          bannerSrc: '/banner-3.png',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
