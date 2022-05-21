<template>
  <div class="timer flex space-x-5">
    <div class="timer__tag">
      <span class="tag__num">10</span>
      <span class="tag__text">days</span>
    </div>
    <div class="timer__tag">
      <span class="tag__num">15</span>
      <span class="tag__text">hrs</span>
    </div>
    <div class="timer__tag">
      <span class="tag__num">30</span>
      <span class="tag__text">mins</span>
    </div>
    <div class="timer__tag">
      <span class="tag__num">22</span>
      <span class="tag__text">secs</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  components: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.timer {
  &__tag {
    @include font-family-rubik;
    background-color: $main-color;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
}

.tag {
  &__num,
  &__text {
    display: block;
  }

  &__num {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
  }

  &__text {
    font-size: 6px;
    font-weight: 400;
    text-transform: uppercase;
  }
}
</style>
