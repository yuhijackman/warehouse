<template>
  <div>
    <button
      class="add-btn"
      @click="onClick"
      :class="[
          'add-btn--' + size,
          'add-btn--' + colorName,
      ]"
    ><slot /></button>
  </div>
</template>


<script>
export default {
  name: "CircleBtn",
  props: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.add-btn {
    text-align: center;
    transition: opacity 0.5s ease-in;
    -webkit-transition: opacity 0.5s ease-in;
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
    &:hover {
      opacity: .8;
    }

    &--m {
      border-radius: 70px;
      -moz-border-radius: 70px;
      -webkit-border-radius: 70px;
      width: 80px;
	    height: 80px;
      font-size: 55px;
    }

    &--primary {
        color: #fff;
        background-color: $color-primary;
    }
}

</style>
