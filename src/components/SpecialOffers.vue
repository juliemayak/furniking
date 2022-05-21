<template>
  <div
    class="mb-20 sm:mb-[124px] font-mulish flex flex-col items-center cursor-default"
  >
    <h2 class="h2-title mb-2 sm:mb-16">Special Offer</h2>
    <div
      class="flex flex-col items-center sm:space-y-10 overflow-hidden xl:space-y-0 xl:flex-row justify-between w-full"
    >
      <SpecialOffer
        v-for="{
          id,
          offerTitle,
          offerDescr,
          offerLabel,
          currentPrice,
          prevPrice,
          currency,
          offerImgSrc,
        } of specialOffersData"
        :key="id"
        :offerTitle="offerTitle"
        :offerDescr="offerDescr"
        :offerLabel="offerLabel"
        :currentPrice="currentPrice"
        :prevPrice="prevPrice"
        :currency="currency"
        :offerImgSrc="offerImgSrc"
      />
    </div>
  </div>
</template>

<script>
import SpecialOffer from '@/components/SpecialOffer';
export default {
  name: 'SpecialOffers',
  components: {
    SpecialOffer,
  },
  data() {
    return {
      specialOffersData: [
        {
          id: '1',
          offerTitle: 'Living Room Furniture',
          offerDescr:
            "You don't have a chair. Are you ready for growth? Shop with us 40% discount!",
          currentPrice: '150',
          prevPrice: '250',
          currency: '$',
          offerLabel: '40% off',
          offerImgSrc: '/offer-1.png',
        },
        {
          id: '2',
          offerTitle: 'Modern chair',
          offerDescr:
            'Hot chairs of the modern era are now available in our stock.',
          currentPrice: '75',
          prevPrice: '150',
          currency: '$',
          offerLabel: '50% off',
          offerImgSrc: '/offer-2.png',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
