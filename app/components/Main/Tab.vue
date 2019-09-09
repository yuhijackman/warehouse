<template>
<div class="tab">
  <ul class="tab__list">
    <li v-for="tab in tabs"
      class="tab__item"
      @click="activateTab(tab.name)" 
      :class="[ activeTab === tab.name ? 'active' : '' ]"
    >
      {{ tab.label }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    activeTab: {
      type: String,
      default: ''
    }
  },
  methods: {
     activateTab(target) {
       this.$emit('click', target)
     }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  &__item {
    @apply inline-block py-6 cursor-pointer;
    &:not(:last-child) {
      @apply mr-8;
    }
  }

}
.active {
  border-bottom: 2px solid #55c57a;
}
</style>
