<template>
  <footer class="lg:ml-5 text-dark-gray">
    <div
      class="flex flex-col space-y-5 lg:flex-row justify-between lg:space-x-20 mb-12"
    >
      <div class="w-full lg:max-w-xs lg:w-auto">
        <Logo />
        <p class="text-sm leading-8 mt-4 mb-2 cursor-default">
          Furniking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
        </p>
        <div class="flex space-x-4">
          <a href="/" class="hover-opacity"><FacebookLogo /></a>
          <a href="/" class="hover-opacity"><TwitterLogo /></a>
          <a href="/" class="hover-opacity"><InstagramLogo /></a>
          <a href="/" class="hover-opacity"><PinterestLogo /></a>
        </div>
      </div>
      <div
        class="space-y-5 sm:space-y-0 sm:flex flex-1 sm:space-x-2 justify-between lg:space-x-0"
      >
        <div
          v-for="{ sectionName, links } of footerData"
          :key="sectionName"
          class="flex flex-col text-lg leading-10"
        >
          <h4 class="font-medium cursor-default">
            {{ sectionName }}
          </h4>
          <a v-for="link of links" :key="link" href="/" class="hover-opacity">
            {{ link }}
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div
      class="py-4 sm:py-8 space-y-3 sm:space-y-0 text-sm sm:flex justify-between mr-2"
    >
      <p>&copy; 2021 Furniking - All rights reserved.</p>
      <div class="space-x-14">
        <a href="/" class="hover-opacity">Privacy</a>
        <a href="/" class="hover-opacity">Security</a>
        <a href="/" class="hover-opacity">Terms</a>
      </div>
    </div>
  </footer>
</template>

<script>
import FacebookLogo from '@/components/svg/FacebookLogo';
import TwitterLogo from '@/components/svg/TwitterLogo';
import InstagramLogo from '@/components/svg/InstagramLogo';
import PinterestLogo from '@/components/svg/PinterestLogo';
import Logo from '@/components/Logo';

export default {
  name: 'Footer',
  components: {
    FacebookLogo,
    TwitterLogo,
    InstagramLogo,
    PinterestLogo,
    Logo,
  },
  props: {},
  data() {
    return {
      footerData: [
        {
          sectionName: 'Help',
          links: [
            'Privacy Policy',
            'Shipping & Delivery',
            'Refund Policy',
            'Track Your  Order',
          ],
        },
        {
          sectionName: 'Store',
          links: ['Furniture', 'Tabble', 'Sofa', 'Other'],
        },
        {
          sectionName: 'Supports',

          links: ['Feedback', 'Contact us', 'Download app', 'Terms conditions'],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
