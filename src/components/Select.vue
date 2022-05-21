<template>
  <div
    :class="[
      'flex items-center relative select-none hover-opacity',
      rootElClassName,
    ]"
  >
    <select
      v-model="selected"
      :class="[
        'bg-transparent appearance-none outline-none cursor-pointer',
        className,
      ]"
    >
      <option v-if="label" disabled :value="label">
        {{ label }}
      </option>
      <option v-for="option of options" :key="option.value">
        {{ option.value }}
      </option>
    </select>
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      xmlns="http://www.w3.org/2000/svg"
      class="fill-current absolute right-0 pointer-events-none"
    >
      <path
        d="M0.705384 0.704616C1.09466 0.315343 1.72569 0.314999 2.11538 0.703847L5.29366 3.8752C5.68401 4.2647 6.31599 4.2647 6.70634 3.8752L9.88462 0.703847C10.2743 0.314999 10.9053 0.315343 11.2946 0.704616C11.6842 1.09419 11.6842 1.72581 11.2946 2.11538L6.70711 6.70289C6.31658 7.09342 5.68342 7.09342 5.29289 6.70289L0.705384 2.11538C0.315811 1.72581 0.315811 1.09419 0.705384 0.704616Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    className: {
      default: '',
      type: String,
    },
    rootElClassName: {
      default: '',
      type: String,
    },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      selected: this.label ? this.label : this.options[0].value,
    };
  },
};
</script>

<style></style>
