<template>
  <div>
    <li
      class="dropdown-item"
    ><slot /></li>
  </div>
</template>


<script>
export default {
  name: 'Item',
}
</script>


<style lang="scss" scoped>
.dropdown-item {
  @apply p-2 border-b-2 w-full text-center cursor-pointer;
  &:hover {
    border-bottom: 2px solid $color-primary;
  }
}
</style>
