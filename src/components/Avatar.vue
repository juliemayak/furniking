<template>
  <div :class="className">
    <Picture
      :src="src"
      alt=""
      className="h-full w-full rounded-full object-cover"
    />
  </div>
</template>

<script>
import Picture from '@/components/Picture';

export default {
  name: 'Avatar',
  components: {
    Picture,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
