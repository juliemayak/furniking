<template>
  <div :class="className" @mouseenter="stopTimer" @mouseout="startTimer">
    <div v-if="navigation">
      <div class="mr-1 sm:mr-4 lg:mr-14">
        <button
          class="hover:text-span-gray transition-all w-6 h-10"
          @click="prevSlide"
        >
          <svg
            viewBox="0 0 24 38"
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.092 34.2413C23.4822 33.8511 23.4826 33.2185 23.0928 32.8279L9.9998 19.7063C9.6103 19.316 9.6103 18.684 9.99979 18.2937L23.0928 5.17211C23.4826 4.78146 23.4822 4.14889 23.092 3.75866L20.0404 0.707106C19.6499 0.316582 19.0167 0.316582 18.6262 0.707107L1.04044 18.2929C0.649913 18.6834 0.649914 19.3166 1.04044 19.7071L18.6262 37.2929C19.0167 37.6834 19.6499 37.6834 20.0404 37.2929L23.092 34.2413Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <slot :currentSlide="currentSlide" />
    <div v-if="navigation">
      <div class="ml-1 sm:ml-4 lg:ml-14">
        <button
          class="hover:text-span-gray transition-all w-6 h-10"
          @click="nextSlide"
        >
          <svg
            viewBox="0 0 24 38"
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.907996 3.75866C0.517773 4.14889 0.517429 4.78146 0.907226 5.1721L14.0002 18.2937C14.3897 18.684 14.3897 19.316 14.0002 19.7063L0.907227 32.8279C0.51743 33.2185 0.517773 33.8511 0.907996 34.2413L3.95955 37.2929C4.35008 37.6834 4.98324 37.6834 5.37377 37.2929L22.9596 19.7071C23.3501 19.3166 23.3501 18.6834 22.9596 18.2929L5.37377 0.707104C4.98324 0.316582 4.35008 0.316582 3.95955 0.707108L0.907996 3.75866Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="pagination" :class="paginationClassName">
      <span
        v-for="(indicator, i) in slidesData.length"
        :key="indicator.id"
        :class="[indicatorClassName, { _active: currentSlide === i }]"
        @click="currentSlide = i"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    className: {
      type: String,
      default: '',
    },
    paginationClassName: {
      type: String,
      default: '',
    },
    indicatorClassName: {
      type: String,
      default: '',
    },
    navigation: {
      type: Boolean,
      default: true,
    },
    pagination: {
      type: Boolean,
      default: true,
    },
    slidesData: {
      type: Array,
      required: true,
    },
    autoPlayEnabled: {
      type: Boolean,
      default: true,
    },
    time: {
      type: Number,
      default: 3000,
    },
  },
  emits: ['set-direction'],
  data() {
    return {
      currentSlide: 0,
      direction: 'right',
    };
  },
  mounted() {
    if (this.autoPlayEnabled) {
      this.setTimer();
    }
  },
  unmounted() {
    this.stopTimer();
  },
  methods: {
    prevSlide() {
      this.startTimer();
      this.$emit('set-direction', 'left');
      if (this.currentSlide === 0) {
        this.currentSlide = this.slidesData.length - 1;
        return;
      }
      this.currentSlide -= 1;
    },
    nextSlide() {
      this.startTimer();
      this.$emit('set-direction', 'right');
      if (this.currentSlide === this.slidesData.length - 1) {
        this.currentSlide = 0;
        return;
      }
      this.currentSlide += 1;
    },
    setTimer() {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, this.time);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      if (this.autoPlayEnabled) {
        this.stopTimer();
        this.setTimer();
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
