<template>
  <div>
    <span :class="[fontSize, fontWeight, 'label-color-' + color]"><slot /></span>
  </div>
</template>

<script>
export default {
  name: 'Label',
  props: {
    fontSize: {
      type: String,
      default: 'text-2xl'
    },
    fontWeight: {
      type: String,
      default: 'font-normal'
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>


<style lang="scss" scoped>
.label-color-primary {
  color: $color-primary;
}
</style>
