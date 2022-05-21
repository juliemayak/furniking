<template>
  <div
    :class="[
      'flex flex-col sm:flex-row justify-between max-w-[582px] border-2 rounded-lg border-main-color',
      className,
    ]"
  >
    <div class="flex flex-1">
      <input
        v-model="searchValue"
        type="text"
        class="w-full py-3 px-3 sm:px-6 rounded-l-lg rounded-r-none border-r-[1.5px] border-border-gray text-sm focus:outline-none placeholder:select-none"
        placeholder="Search here"
      />
      <Select
        rootElClassName="text-dark-gray text-sm mr-4 ml-2"
        className="pr-4"
        :options="options"
        label="Categories"
      />
    </div>
    <button
      class="flex justify-center items-center space-x-3 sm:space-x-0 text-white bg-main-color py-2 px-5 rounded-b-sm sm:rounded-r-md"
    >
      <span class="block sm:hidden">Search</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current hover-scale-down will-change-transform"
      >
        <g clip-path="url(#clip0_3_88)">
          <path
            d="M12.7 11.3C13.6 10.1 14.1 8.7 14.1 7.1C14.1 3.2 11 0 7.1 0C3.2 0 0 3.2 0 7.1C0 11 3.2 14.2 7.1 14.2C8.7 14.2 10.2 13.7 11.3 12.8L14.3 15.8C14.5 16 14.8 16.1 15 16.1C15.2 16.1 15.5 16 15.7 15.8C16.1 15.4 16.1 14.8 15.7 14.4L12.7 11.3ZM7.1 12.1C4.3 12.1 2 9.9 2 7.1C2 4.3 4.3 2 7.1 2C9.9 2 12.2 4.3 12.2 7.1C12.2 9.9 9.9 12.1 7.1 12.1Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_88">
            <rect width="16" height="16" />
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
</template>

<script>
import Select from '@/components/Select';
export default {
  name: 'SearchBar',
  components: {
    Select,
  },
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchValue: '',
      options: [
        { value: 'All' },
        { value: 'New Arrivals' },
        { value: 'Hot Sale' },
        { value: 'Furniture' },
      ],
    };
  },
};
</script>

<style></style>
