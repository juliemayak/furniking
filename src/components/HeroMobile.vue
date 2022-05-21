<template>
  <div class="px-3 flex flex-col sm:hidden mb-16 relative overflow-hidden">
    <Collections :collections="collections" />
    <Slider className="mx-auto z-0 mt-24" />
  </div>
</template>

<script>
import Collections from '@/components/Collections';
import Slider from '@/components/Slider';

export default {
  name: 'Hero',
  components: {
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
    };
  },
};
</script>

<style scoped lang="scss">
.hero {
  background: linear-gradient(180deg, $bg-light-gray 67px, transparent 0px);
}
</style>
