<template>
  <button
    :class="[
        'btn--' + size,
        'btn--' + colorName,
    ]"
    class="btn"
    type="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    // s, m, l
    size: {
        type: String,
        default: 's'
    },
    width: {
      type: String,
      default: ''
    },
    colorName: {
        type: String,
        default: 'primary'
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  }
}
</script>


<style lang="scss" scoped>
.btn {
    &,
    &:link,
    &:visited  {
        text-decoration: none;
        border: none;
        cursor: pointer;
        transition: all .2s;
    }
    &:active,
    &:focus {
        outline: none;
    }
    border-radius: 10rem;

    &--l {
        @apply py-3 px-24;
    }

    &--primary {
        color: #fff;
        background-color: $color-primary;
        &:hover {
            
        }
    }
}
</style>
