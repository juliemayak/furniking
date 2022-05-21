<template>
  <div class="mb-16 sm:mb-[101px] cursor-default">
    <div class="mb-14">
      <ProductsMasonry
        :productsData="trendingGoods"
        title="Trending"
        :sections="['Top Products', 'New Arrivals', 'Best Sellers']"
      />
    </div>
    <div class="flex justify-center space-x-3">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#CCC"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C9.62662 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.91345 7.4078C0.0051994 9.60051 -0.23244 12.0133 0.230582 14.3411C0.693604 16.6688 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9964 8.81851 22.7309 5.76838 20.4813 3.51873C18.2316 1.26908 15.1815 0.00362976 12 0ZM12 20.5714C10.3047 20.5714 8.64753 20.0687 7.23797 19.1269C5.82841 18.185 4.72979 16.8464 4.08104 15.2801C3.43229 13.7139 3.26254 11.9905 3.59327 10.3278C3.924 8.6651 4.74035 7.13782 5.93909 5.93908C7.13782 4.74035 8.6651 3.924 10.3278 3.59327C11.9905 3.26254 13.7139 3.43228 15.2801 4.08103C16.8464 4.72978 18.185 5.8284 19.1269 7.23797C20.0687 8.64753 20.5714 10.3047 20.5714 12C20.5687 14.2724 19.6648 16.451 18.0579 18.0579C16.451 19.6648 14.2724 20.5687 12 20.5714Z"
        />
        <circle cx="12" cy="12" r="4" />
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#CCC"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C9.62662 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.91345 7.4078C0.0051994 9.60051 -0.23244 12.0133 0.230582 14.3411C0.693604 16.6688 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9964 8.81851 22.7309 5.76838 20.4813 3.51873C18.2316 1.26908 15.1815 0.00362976 12 0ZM12 20.5714C10.3047 20.5714 8.64753 20.0687 7.23797 19.1269C5.82841 18.185 4.72979 16.8464 4.08104 15.2801C3.43229 13.7139 3.26254 11.9905 3.59327 10.3278C3.924 8.6651 4.74035 7.13782 5.93909 5.93908C7.13782 4.74035 8.6651 3.924 10.3278 3.59327C11.9905 3.26254 13.7139 3.43228 15.2801 4.08103C16.8464 4.72978 18.185 5.8284 19.1269 7.23797C20.0687 8.64753 20.5714 10.3047 20.5714 12C20.5687 14.2724 19.6648 16.451 18.0579 18.0579C16.451 19.6648 14.2724 20.5687 12 20.5714Z"
        />
        <circle cx="12" cy="12" r="4" />
      </svg>
    </div>
  </div>
</template>

<script>
import ProductsMasonry from '@/components/ProductsMasonry';

export default {
  name: 'Trending',
  components: {
    ProductsMasonry,
  },
  props: {},
  data() {
    return {
      trendingGoods: [
        {
          id: 1,
          src: '/test-1.png',
          category: 'chair',
          goodName: 'Minimal LCD chair',
          currentPrice: '180',
          prevPrice: '250',
          currency: '$',
          rating: 5,
          label: 'New',
        },
        {
          id: 2,
          src: '/test-2.png',
          category: 'chair',
          goodName: 'Minimal iconic chair',
          currentPrice: '120',
          prevPrice: '150',
          currency: '$',
          rating: 4,
          label: 'New',
        },
        {
          id: 3,
          src: '/test-3.png',
          category: 'chair',
          goodName: 'Dining chairs',
          currentPrice: '100',
          prevPrice: '120',
          currency: '$',
          rating: 5,
          label: 'Sale',
        },
        {
          id: 4,
          src: '/test-4.png',
          category: 'chair',
          goodName: 'Buskbo armchair',
          currentPrice: '130',
          prevPrice: '150',
          currency: '$',
          rating: 4,
          label: 'Sale',
        },
        {
          id: 5,
          src: '/test-5.png',
          category: 'chair',
          goodName: 'Modern chairs',
          currentPrice: '100',
          prevPrice: '120',
          currency: '$',
          label: 'Sale',
        },
        {
          id: 6,
          src: '/test-6.png',
          category: 'chair',
          goodName: 'Plastic dining chair',
          currentPrice: '130',
          prevPrice: '150',
          currency: '$',
          rating: 4,
          label: 'Sale',
        },
        {
          id: 7,
          src: '/test-7.png',
          category: 'chair',
          goodName: 'Minimal Wood chair',
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
          goodName: 'Elegant wood chair',
          currentPrice: '120',
          prevPrice: '150',
          currency: '$',
          rating: 4,
          label: 'New',
        },
        // {
        //   id: 9,
        //   src: '/test-7.png',
        //   category: 'chair',
        //   goodName: 'Minimal Wood chair',
        //   currentPrice: '180',
        //   prevPrice: '250',
        //   currency: '$',
        //   rating: 5,
        //   label: 'New',
        // },
        // {
        //   id: 10,
        //   src: '/test-8.png',
        //   category: 'chair',
        //   goodName: 'Elegent wood chair',
        //   currentPrice: '120',
        //   prevPrice: '150',
        //   currency: '$',
        //   rating: 4,
        //   label: 'New',
        // },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
