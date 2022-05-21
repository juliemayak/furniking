<template>
  <button
    :class="[
      'hover-scale-up bg-main-color select-none  rounded will-change-transform',
      className,
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    className: {
      type: String,
      default: '',
    },
  },
};
</script>
