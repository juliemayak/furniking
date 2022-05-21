<template>
  <div
    :class="[
      'relative slider lg:max-w-[900px] h-full w-full flex p-5 sm:pl-12 sm:pr-10 justify-between items-center cursor-default',
      className,
    ]"
  >
    <div class="absolute sm:static flex flex-col max-w-xs xl:mb-10 mr-2 z-10">
      <span
        class="text-main-color text-xs xl:text-xl tracking-widest uppercase mb-1"
      >
        TOP COLLECTIONS 2022
      </span>
      <h1
        class="relative text-light-black text-3xl xl:text-[40px] xl:leading-[47px] font-medium mb-7"
      >
        We Serve Your <br />
        <span class="whitespace-nowrap"> Dream Furniture </span>
        <img
          class="absolute bottom-0 right-0 grab"
          src="/green-line.png"
          alt=""
          aria-hidden="true"
        />
      </h1>
      <h2
        class="font-mulish font-semibold text-h2-gray text-xl xl:leading-7 xl:text-[27px] mb-8"
      >
        Get 50% off all products
      </h2>
      <Button btnText="Shop Now" className="px-2 py-1 xl:px-4 xl:py-2 w-fit">
        <span class="btn-text font-bold text-xs xl:text-base"> Shop now </span>
      </Button>
    </div>
    <Carousel
      v-slot="{ currentSlide }"
      :navigation="false"
      :slidesData="promoData"
      className="flex justify-center items-center ml-auto sm:ml-0 mt-3 select-none w-full"
      paginationClassName="indicator space-x-4"
      indicatorClassName="indicator__item"
    >
      <div
        class="relative max-w-[374px] min-w-[274px] w-full h-[374px] overflow-hidden"
      >
        <Slide
          v-for="({ id, src }, i) of promoData"
          v-show="currentSlide === i"
          :key="id"
          :transition="true"
          className="absolute w-full h-full"
          direction="right"
        >
          <Picture
            :src="src"
            className="object-contain h-full w-full opacity-30 sm:opacity-100"
            alt=""
          />
        </Slide>
      </div>
    </Carousel>
    <div class="hidden md:block space-y-3 xl:space-y-6">
      <TinyPromo :tinyPromoData="tinyPromoData" />
    </div>
  </div>
</template>

<script>
import Picture from '@/components/Picture';
import TinyPromo from '@/components/TinyPromo';
import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Slide from '@/components/Slide';

export default {
  name: 'Slider',
  components: {
    Picture,
    TinyPromo,
    Button,
    Carousel,
    Slide,
  },
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      promoData: [
        {
          id: 1,
          src: 'mockup-chair-1.png',
        },
        {
          id: 2,
          src: 'test-2.png',
        },
        {
          id: 3,
          src: 'test-5.png',
        },
        {
          id: 4,
          src: 'test-3.png',
        },
      ],
      tinyPromoData: [
        {
          id: '1',
          src: '/mockup-chair-2.png',
          currency: '$',
          price: '120',
          itemName: 'Office Desk Chair',
        },

        {
          id: '2',
          src: '/mockup-chair-3.png',
          currency: '$',
          price: '180',
          itemName: 'Home Alisa Sofa',
        },
        {
          id: '3',
          src: '/mockup-chair-4.png',
          currency: '$',
          price: '250',
          itemName: 'Modern Chair',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.slider {
  background: linear-gradient(
    103.4deg,
    rgba(241, 250, 255, 0.88) 0.89%,
    #f1faff 101.61%
  );
  backdrop-filter: blur(155px);
}

.indicator {
  position: absolute;
  bottom: 1.25rem;
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  display: flex;

  &__item {
    display: block;
    height: 12px;
    width: 12px;
    background-color: $main-color;
    opacity: 29%;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.5s linear;

    &._active {
      width: 24px;
      opacity: 1;
    }
  }
}
</style>
