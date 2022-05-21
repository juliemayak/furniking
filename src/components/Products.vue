<template>
  <div class="flex flex-col mb-16 sm:mb-[120px] cursor-default">
    <div class="mb-12">
      <ProductsMasonry
        :productsData="ourProducts"
        title="OUR PRODUCTS"
        :sections="[
          'All Products',
          'Best Sellers',
          'New Arrivals',
          'Todays Deals',
        ]"
      />
    </div>
    <div
      class="mx-auto sm:mr-0 space-y-5 sm:space-y-0 sm:flex font-mulish sm:ml-auto items-center"
    >
      <Button
        className="flex items-center w-full sm:w-fit py-2 pl-5 pr-8 text-white font-semibold text-lg space-x-2 sm:mr-36"
      >
        <span> Next page </span>
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.121 0.292787C7.93353 0.480314 7.82821 0.734622 7.82821 0.999786C7.82821 1.26495 7.93353 1.51926 8.121 1.70679L11.413 4.99979L1 5.00679C0.734784 5.00679 0.48043 5.11214 0.292893 5.29968C0.105357 5.48722 0 5.74157 0 6.00679C0 6.272 0.105357 6.52636 0.292893 6.71389C0.48043 6.90143 0.734784 7.00679 1 7.00679L11.414 6.99979L8.121 10.2928C8.02549 10.385 7.94931 10.4954 7.8969 10.6174C7.84449 10.7394 7.8169 10.8706 7.81575 11.0034C7.8146 11.1362 7.8399 11.2678 7.89018 11.3907C7.94046 11.5136 8.01471 11.6253 8.10861 11.7192C8.2025 11.8131 8.31415 11.8873 8.43705 11.9376C8.55994 11.9879 8.69162 12.0132 8.8244 12.012C8.95718 12.0109 9.0884 11.9833 9.2104 11.9309C9.33241 11.8785 9.44275 11.8023 9.535 11.7068L13.121 8.12179C13.3996 7.8432 13.6207 7.51246 13.7715 7.14845C13.9222 6.78444 13.9999 6.39429 13.9999 6.00029C13.9999 5.60628 13.9222 5.21613 13.7715 4.85212C13.6207 4.48811 13.3996 4.15737 13.121 3.87879L9.535 0.292787C9.34747 0.105316 9.09316 0 8.828 0C8.56284 0 8.30853 0.105316 8.121 0.292787Z"
          />
        </svg>
      </Button>
      <div class="flex items-center text-lg text-span-gray">
        <span class="mr-2">Page</span>
        <input
          v-model="pageNum"
          type="number"
          :placeholder="pageNum"
          class="page-num max-w-[60px] text-center px-2 mr-5 rounded-sm text-lg border border-price-gray outline-none"
          maxlength="3"
        />
        <span class="mr-6">of 100</span>
        <div class="text-white bg-main-color">
          <NavigateBtn
            className="py-2 pl-3 pr-3 w-fit rounded-l-sm rounded-r-none"
          />
          <NavigateBtn
            className="rotate-180 py-2 pl-3 pr-2 w-fit rounded-l-sm rounded-r-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsMasonry from '@/components/ProductsMasonry';
import Button from '@/components/Button';
import NavigateBtn from '@/components/NavigateBtn';

export default {
  name: 'Products',
  components: {
    ProductsMasonry,
    Button,
    NavigateBtn,
  },
  props: {},
  data() {
    return {
      ourProducts: [
        {
          id: 1,
          src: '/test-9.png',
          category: 'chair',
          goodName: 'Minimal LCD chair',
          currentPrice: '180',
          prevPrice: '250',
          currency: '$',
          rating: 5,
          label: 'Sale',
        },
        {
          id: 2,
          src: '/test-3.png',
          category: 'chair',
          goodName: 'Modern Sofa',
          currentPrice: '120',
          prevPrice: '150',
          currency: '$',
          rating: 4,
          label: 'New',
        },
        {
          id: 3,
          src: '/test-5.png',
          category: 'chair',
          goodName: 'Microfiber Sofa',
          currentPrice: '100',
          prevPrice: '120',
          currency: '$',
          rating: 5,
          label: '-30%',
        },
        {
          id: 4,
          src: '/test-7.png',
          category: 'chair',
          goodName: 'Wood Coffee Tables',
          currentPrice: '130',
          prevPrice: '150',
          currency: '$',
          rating: 4,
          label: 'Sale',
        },
        {
          id: 5,
          src: '/test-2.png',
          category: 'chair',
          goodName: 'Acacia Wood Club Chairs',
          currentPrice: '100',
          prevPrice: '120',
          currency: '$',
          label: '-30%',
        },
        {
          id: 6,
          src: '/test-4.png',
          category: 'chair',
          goodName: 'Amalia Cowhide Bench',
          currentPrice: '130',
          prevPrice: '150',
          currency: '$',
          rating: 4,
          label: 'Sale',
        },
        {
          id: 7,
          src: '/test-1.png',
          category: 'chair',
          goodName: 'Juno-Hinged Lid Storage',
          currentPrice: '180',
          prevPrice: '250',
          currency: '$',
          rating: 5,
          label: 'New',
        },
        {
          id: 8,
          src: '/test-8.png',
          category: 'chair',
          goodName: 'Delicia 3 Piece Living Room',
          currentPrice: '120',
          prevPrice: '150',
          currency: '$',
          rating: 4,
          label: 'New',
        },
      ],
      pageNum: '1',
    };
  },
};
</script>

<style scoped lang="scss">
.page-num {
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
