<template>
  <div class="flex flex-col items-center mb-16 sm:mb-[115px]">
    <h2 class="h2-title mb-8 sm:mb-[53px] text-center">
      What Our Customer Says
    </h2>
    <Carousel
      v-slot="{ currentSlide }"
      :slidesData="reviewsData"
      :pagination="false"
      className="flex items-center justify-center w-full text-price-gray h-fit"
      :autoPlayEnabled="false"
      @set-direction="setDirection"
    >
      <div
        class="relative w-full h-[590px] xs:h-[530px] sm:h-[460px] lg:h-96 max-w-[816px] overflow-x-hidden"
      >
        <Slide
          v-for="({ id, review, name, occupation, src }, i) of reviewsData"
          v-show="currentSlide === i"
          :key="id"
          :direction="direction"
          :transition="true"
          className="absolute top-16 bottom-0 lg:top-9 flex flex-col justify-center items-center rounded-lg bg-bg-testimonals-gray py-10 px-5 mx-2 sm:pt-16 sm:px-8 sm:pb-8 md:pt-20 md:pb-12 md:px-[125px] sm:mx-5 xl:mx-0"
        >
          <Avatar
            :src="src"
            className="mx-auto absolute -top-16 sm:-top-9 right-0 left-0 w-[88px] h-[88px] select-none"
          />
          <p
            class="font-dmsans max-w-[566px] text-testimonials-text-gray mb-8 text-center"
          >
            {{ review }}
          </p>
          <p
            class="text-dark-gray mb-2 font-mulish text-2xl font-semibold text-center"
          >
            {{ name }}
          </p>
          <p class="text-testimonials-text-gray">{{ occupation }}</p>
        </Slide>
      </div>
    </Carousel>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Carousel from '@/components/Carousel';
import Slide from '@/components/Slide';

export default {
  name: 'Reviews',
  components: { Avatar, Carousel, Slide },
  data() {
    return {
      direction: '',
      reviewsData: [
        {
          id: 1,
          name: 'Angelina Joly',
          review:
            "I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach, also many time they unable to delivered. I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach, also many time they unable to delivered.",
          occupation: 'Co-founder',
          src: '/person-1.jpeg',
        },
        {
          id: 2,
          name: 'Richard Hendricks',
          review:
            'I am a person who usually sticks to large online stores. I am so glad that Furniking had the only stools that I was interested in. I was delighted with their efficiency and the quality, so I purchased a further product. I wish that I had known of this company before. Thank you.',
          occupation: 'Pied Piper Developer',
          src: '/person-2.jpeg',
        },
        {
          id: 3,
          name: 'Erlich Bachman',
          review:
            "Love love love Furniking for the chair I bought here! It is perfect for reading or just sitting and admiring the view. Furniking's furniture is exactly what I needed. It was next day delivery which was great because I couldnt wait. I will purchase all of my other furniture here! Next time, it will be Furniking all the way. Thank you.",
          occupation: 'Entrepreneur',
          src: '/person-3.jpeg',
        },
      ],
    };
  },
  methods: {
    setDirection(direction) {
      this.direction = direction;
    },
  },
};
</script>

<style scoped lang="scss"></style>
