<template>
  <div class="sidebyside__box">
    <font-awesome-icon :icon="iconName" class="sidebyside__icon" :class="[iconSize, 'sidebyside__icon--' + iconColor]" />
    <span class="sidebyside__text" :class="[textColor, textSize]">{{ text }}</span>
  </div>
</template>


<script>
export default {
  name: 'TextIconSideBySide',
  props: {
    iconSize: {
      type: String,
      default: 'text-2xl'
    },
    iconName: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'primary'
    },
    text: {
      type: String,
      default: ''
    },
    textSize: {
      type: String,
      default: 'text-base'
    },
    textColor: {
      type: String,
      default: 'text-black'
    },
  }
}
</script>


<style lang="scss" scoped>
.sidebyside {
  &__box {
    @apply flex;
  }

  &__icon {
    @apply mr-1;

    &--primary {
      color: $color-primary;
    }
  }

  &__text {
    @apply hidden;
  }
}

@screen sm {
  .sidebyside {
    &__text {
      @apply block;
    }
  }
}
</style>
