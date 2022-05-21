<template>
  <div class="benefits mb-[70px] cursor-default">
    <Benefit
      v-for="{ id, benefitName, benefitDescr, svgComponent } of benefitsData"
      :key="id"
      :benefitName="benefitName"
      :benefitDescr="benefitDescr"
    >
      <component :is="svgComponent" />
    </Benefit>
  </div>
</template>

<script>
import Benefit from '@/components/Benefit';
import FreeDeliverySvg from '@/components/svg/FreeDeliverySvg';
import GiftSvg from '@/components/svg/GiftSvg';
import WalletSvg from '@/components/svg/WalletSvg';
import SupportSvg from '@/components/svg/SupportSvg';

export default {
  name: 'Benefits',
  components: {
    Benefit,
    FreeDeliverySvg,
    GiftSvg,
    WalletSvg,
    SupportSvg,
  },
  data() {
    return {
      benefitsData: [
        {
          id: 1,
          benefitName: 'Free Shipping',
          benefitDescr: 'Orders over $100',
          svgComponent: 'FreeDeliverySvg',
        },
        {
          id: 2,
          benefitName: 'Smart Gift Card',
          benefitDescr: 'Buy $1000 to get card',
          svgComponent: 'GiftSvg',
        },
        {
          id: 3,
          benefitName: 'Quick Payment',
          benefitDescr: '100% secure payment',
          svgComponent: 'WalletSvg',
        },
        {
          id: 4,
          benefitName: '24/7 Support',
          benefitDescr: 'Quick support',
          svgComponent: 'SupportSvg',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.benefits {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 45px;
  justify-items: center;

  @include media-sm {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }

  @include media-md {
    column-gap: 150px;
  }

  @include media-lg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0;
    row-gap: 0;
  }
}
</style>
