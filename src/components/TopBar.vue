<template>
  <div
    class="hidden sm:flex bg-main-color w-full h-[50px] text-base text-white"
  >
    <div
      class="px-8 lg:px-16 xl:px-0 w-full max-w-[1170px] mx-auto flex justify-between items-center"
    >
      <p class="selection-default cursor-default">Welcome to our online shop</p>
      <div class="flex select-none">
        <Select
          :options="[{ value: 'English (USD)' }, { value: 'Russian (RUB)' }]"
          className="pr-4"
        />
        <span class="mr-4 ml-5">|</span>
        <a href="/" class="hover-opacity">Login <span class="hidden sm:inline">or Sign up</span></a>
      </div>
    </div>
  </div>
</template>

<script>
import Select from '@/components/Select';
export default {
  name: 'TopBar',
  components: {
    Select,
  },
};
</script>

<style scoped lang="scss"></style>
