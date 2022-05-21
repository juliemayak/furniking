<template>
  <div class="selection-green">
    <TopBar />
    <Header :itemsNum="4" />
    <NavMobile />
    <Hero />
    <HeroMobile />
    <div class="px-3 sm:px-8 lg:px-16 xl:px-0 max-w-[1170px] mx-auto">
      <Benefits />
      <Banners />
      <Trending />
      <SpecialOffers />
      <Products />
      <Reviews />
      <Articles />
      <Footer />
    </div>
  </div>
</template>

<script>
import './index.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import NavMobile from '@/components/NavMobile';
import Hero from '@/components/Hero';
import HeroMobile from '@/components/HeroMobile';
import Benefits from '@/components/Benefits';
import Banners from '@/components/Banners';
import Trending from '@/components/Trending';
import SpecialOffers from '@/components/SpecialOffers';
import Products from '@/components/Products';
import Reviews from '@/components/Reviews';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    TopBar,
    Header,
    NavMobile,
    Hero,
    HeroMobile,
    Benefits,
    Banners,
    Trending,
    SpecialOffers,
    Products,
    Reviews,
    Articles,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
