<template>
  <div class="hidden sm:block hero mb-16 relative overflow-hidden">
    <div
      class="flex max-w-[1170px] mx-auto px-3 sm:px-8 lg:px-16 xl:px-0 transition-all duration-300"
    >
      <Collections :collections="collections" />
      <div class="flex flex-col w-full">
        <Nav :navSections="navSections" />
        <div class="pt-3 lg:pl-3 pb-1 h-full z-0">
          <Slider className="mx-auto lg:mx-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Collections from '@/components/Collections';
import Slider from '@/components/Slider';

export default {
  name: 'Hero',
  components: {
    Nav,
    Collections,
    Slider,
  },
  data() {
    return {
      collections: [
        { value: 'All' },
        { value: 'New Arrivals' },
        { value: 'Hot Sale' },
        { value: 'Furniture' },
        { value: 'Amrature' },
        { value: 'Tabble' },
        { value: 'Chair' },
        { value: 'Sofa' },
        { value: 'Mirrors' },
        { value: 'Stools' },
        { value: 'Benches' },
      ],
      navSections: [
        { value: 'Home' },
        { value: 'Shop' },
        { value: 'Blog' },
        { value: 'About' },
        { value: 'Contact Us' },
      ],
      sliderCentered: false,
    };
  },
};
</script>

<style scoped lang="scss">
.hero {
  background: linear-gradient(180deg, $bg-light-gray 67px, transparent 0px);
}
</style>
