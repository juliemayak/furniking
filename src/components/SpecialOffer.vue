<template>
  <div class="relative min-w-[290px] max-w-[500px] sm:max-w-none sm:w-[570px]">
    <Picture
      :src="offerImgSrc"
      :alt="offerTitle"
      className="w-full h-[249px] object-contain select-none"
    />
    <div class="static sm:absolute sm:top-7 sm:left-6 sm:max-w-[230px]">
      <h3 class="text-base sm:text-[22px] font-semibold text-dark-gray mb-3">
        {{ offerTitle }}
      </h3>
      <p class="text-xs mb-6">
        {{ offerDescr }}
      </p>
      <div class="flex mb-7 space-x-7">
        <PriceTag
          :currentPrice="currentPrice"
          :prevPrice="prevPrice"
          :currency="currency"
        />
        <Button className="px-3 py-1 text-xs w-fit">
          <span class="btn-text font-bold"> Shop now </span>
        </Button>
      </div>
      <Timer />
    </div>
    <ProductLabel
      :labelText="offerLabel"
      position="hidden sm:block sm:top-0 sm:right-0"
      borderRadius="sm:rounded-bl-lg"
      color="bg-label-blue"
    />
  </div>
</template>

<script>
import Picture from '@/components/Picture';
import PriceTag from '@/components/PriceTag';
import ProductLabel from '@/components/ProductLabel';
import Button from '@/components/Button';
import Timer from '@/components/Timer';

export default {
  name: 'SpecialOfferBanner',
  components: {
    Picture,
    PriceTag,
    ProductLabel,
    Button,
    Timer,
  },
  props: {
    offerTitle: {
      type: String,
      required: true,
    },
    offerDescr: {
      type: String,
      required: true,
    },
    offerLabel: {
      type: String,
      required: true,
    },
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
    offerImgSrc: {
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
