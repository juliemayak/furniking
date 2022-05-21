<template>
  <nav
    class="nav-mobile md:hidden fixed h-screen bg-dark-gray w-screen top-0 left-0 z-30 text-white px-5 py-36 space-y-16 flex flex-col items-center translate-x-full"
  >
    <div class="space-y-5">
      <Select
        :options="[{ value: 'English (USD)' }, { value: 'Russian (RUB)' }]"
        className="pr-4 text-xl"
      />
      <a href="/" class="block hover-opacity text-xl">Login or Sign up</a>
    </div>
    <div class="flex w-full justify-evenly cursor-pointer">
      <ShoppingCart />
      <Notifications />
      <Account />
    </div>
    <ul class="flex flex-col items-center space-y-12">
      <li
        v-for="navSection of navSections"
        :key="navSection.value"
        class="text-xl uppercase cursor-pointer hover-jump"
      >
        <a href="/"> {{ navSection.value }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Select from '@/components/Select';
import ShoppingCart from '@/components/svg/ShoppingCart';
import Notifications from '@/components/svg/Notifications';
import Account from '@/components/svg/Account';

export default {
  name: 'NavMobile',
  components: {
    Select,
    ShoppingCart,
    Notifications,
    Account,
  },
  data() {
    return {
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

<style></style>
