<template>
  <p
    :class="[
      'absolute text-xs leading-5 text-white font-semibold px-2 select-none',
      color
        ? color
        : labelStyling[labelText]?.color || labelStyling.default.color,
      position,
      borderRadius,
    ]"
  >
    {{ labelText }}
  </p>
</template>

<script>
export default {
  name: 'ProductLabel',
  props: {
    labelText: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'top-0 left-0',
    },
    borderRadius: {
      type: String,
      default: 'rounded-br-lg',
    },
  },
  data() {
    return {
      labelStyling: {
        New: { color: 'bg-label-blue' },
        Sale: { color: 'bg-main-color' },
        default: { color: 'bg-label-red' },
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
