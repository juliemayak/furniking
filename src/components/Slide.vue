<template>
  <transition v-if="transition" :name="transitionEffect">
    <div :class="className">
      <slot />
    </div>
  </transition>
  <div v-else :class="className"><slot /></div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    className: {
      type: String,
      default: '',
    },
    direction: {
      type: String,
      required: true,
    },
    transition: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    transitionEffect() {
      return this.direction === 'right' ? 'slide-out' : 'slide-in';
    },
  },
};
</script>

<style lang="scss">
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-in-enter-from,
.slide-out-leave-to {
  transform: translateX(-100%);
}
.slide-in-leave-to,
.slide-out-enter-from {
  transform: translateX(100%);
}
</style>
