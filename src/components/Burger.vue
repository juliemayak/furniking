<template>
  <button class="menu-button sm:hidden cursor-pointer hover-opacity">
    <div class="menu-button__line line-1" />
    <div class="menu-button__line line-2" />
    <div class="menu-button__line line-3" />
  </button>
</template>

<script>
export default {
  name: 'Burger',
};
</script>

<style scoped lang="scss">
.menu-button {
  opacity: 1;
  user-select: none;

  &__line {
    width: 48px;
    height: 2px;
    margin: 8px;
    background-color: $main-color;
    pointer-events: none;
  }
}
</style>
