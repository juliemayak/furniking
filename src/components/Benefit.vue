<template>
  <div
    class="flex text-dark-gray space-x-2 xl:space-x-4 items-center min-w-[212px] xl:min-w-fit"
  >
    <slot />
    <div>
      <h3 class="font-medium text-lg xl:text-xl text-dark-gray">
        {{ benefitName }}
      </h3>
      <span class="text-sm text-h2-gray">
        {{ benefitDescr }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benefit',
  props: {
    benefitName: {
      type: String,
      required: true,
    },
    benefitDescr: {
      type: String,
      required: true,
    },
  },
};
</script>
