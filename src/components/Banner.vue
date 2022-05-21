<template>
  <div :class="['relative', className]">
    <Picture
      :src="bannerSrc"
      className="object-cover w-full h-full select-none"
      :alt="bannerName"
    />
    <div :class="['absolute font-mulish', position]">
      <h3
        :class="[
          'mb-2 text-dark-gray text-[22px] font-semibold',
          isBold && 'font-bold',
        ]"
      >
        {{ bannerName }}
      </h3>
      <p class="mb-3 font-semibold text-main-color text-xl">
        {{ bannerDescr }}
      </p>
      <More />
    </div>
  </div>
</template>

<script>
import Picture from '@/components/Picture';
import More from '@/components/More';

export default {
  name: 'Banner',
  components: {
    Picture,
    More,
  },
  props: {
    bannerName: {
      type: String,
      default: '',
    },
    bannerDescr: {
      type: String,
      default: '',
    },
    bannerSrc: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    isBold: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top-11 left-7',
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
