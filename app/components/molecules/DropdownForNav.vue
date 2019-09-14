<template>
  <div>
    <ul class="dropdown__list">
      <Item
        v-for="item in list"
        :key="item"
      >{{ item }}</Item>
    </ul>
  </div>
</template>

<script>
import Item from '~/components/atoms/Dropdown/Item'

export default {
  name: 'DropdownForNav',
  props: {
    list: Array
  },
  components: {
      Item
  },
}
</script>


<style lang="scss" scoped>

</style>
