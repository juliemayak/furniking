<template>
  <div
    class="header space-y-4 lg:space-y-0 py-5 px-3 sm:px-8 lg:px-16 xl:px-0 max-w-[1170px] mx-auto min-h-[92px]"
  >
    <div class="flex items-center justify-between mb-6 sm:mb-0 z-40 relative">
      <Logo />
      <SearchBar className="hidden lg:flex lg:flex-1 mx-16 xl:ml-[121px]" />
      <div
        class="hidden sm:flex space-x-6 ml-auto cursor-pointer text-dark-gray"
      >
        <div class="relative">
          <ShoppingCart />
          <div
            class="absolute top-0 -right-2 bg-main-color rounded-full h-3 w-3 text-[7px] text-white flex items-center justify-center select-none"
          >
            {{ itemsNum }}
          </div>
        </div>

        <Notifications />
        <Account />
      </div>
      <Burger @click="toggleNavMobile()" />
    </div>

    <SearchBar className="block lg:hidden mx-auto" />
  </div>
</template>
<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Logo from '@/components/Logo';
import ShoppingCart from '@/components/svg/ShoppingCart';
import Notifications from '@/components/svg/Notifications';
import Account from '@/components/svg/Account';
import Burger from '@/components/Burger';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'Header',
  components: {
    Logo,
    ShoppingCart,
    Notifications,
    Account,
    SearchBar,
    Burger,
  },
  props: {
    itemsNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      navMobileVisibility: false,
    };
  },
  methods: {
    toggleNavMobile() {
      if (!this.navMobileVisibility) {
        this.navMobileVisibility = true;
        gsap.to('.line-1', {
          duration: 0.5,
          rotate: '45',
          y: 5,
        });
        gsap.to('.line-2', {
          duration: 0.5,
          rotate: '-45',
          y: -5,
        });
        gsap.to('.line-3', {
          duration: 0,
          background: '#555',
        });
        gsap.to('.nav-mobile', {
          duration: 0.5,
          translateX: '0%',
        });
        gsap.to('#logo', {
          color: '#fff',
        });
        document.body.classList.add('_lock-position');
      } else {
        this.navMobileVisibility = false;
        gsap.to('.line-1', {
          duration: 0.5,
          rotate: '0',
          y: 0,
        });
        gsap.to('.line-2', {
          duration: 0.5,
          rotate: '0',
          y: 0,
        });
        gsap.to('.line-3', {
          duration: 0.5,
          background: '#7ac751',
        });
        gsap.to('.nav-mobile', {
          duration: 0.5,
          translateX: '100%',
        });
        gsap.to('#logo', {
          color: '#555',
        });
        document.body.classList.remove('_lock-position');
      }
    },
  },
};
</script>
