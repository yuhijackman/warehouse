<template>
  <div class="input-wrapper">
    <input
      class="form__input"
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      :placeholder="title"
      @input="$emit('input', $event.target.value)">
    <textarea
      v-if="controlType === 'textarea'"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppControlInput',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
    width: 100%;
    margin-bottom: 1.5rem;
}

.form__input {
    font-size: 15px;
    color: #555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    background: 0 0;
    padding: 0 .5rem;
    border-bottom: 2px solid #adadad;
    &:focus {
      outline: none;
      border-bottom: 3px solid $color-primary;
    }
    &:focus:invalid {
        border-bottom: 3px solid $color-secondary-dark;
    }
    &::-webkit-input-placeholder {
        color: $color-grey-dark-2;
    }
}

input {
    outline: none;
    border: none;
}
</style>
