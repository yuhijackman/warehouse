<template>
  <div class="modal-container" @click.self="closeModal()">
    <div class="modal-form">
      <Label
        font-size="text-2xl"
        font-weight="font-bold"
        color="primary"
      >A new project</Label>
      <div class="modal-form__inputs">
        <BasicInput
          v-model="formData.title"
          title="Title"
        />
        <BasicInput
          v-model="formData.deadline"
          title="Deadline"
        />
        <BasicInput
          v-model="formData.giturl"
          title="Git URL"
        />
      </div>
      <div class="btn-field">
        <AppButton
            colorName="primary"
            size="l"
            @click="addProject"
        >Start a project</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import Label from '~/components/atoms/Label.vue';
import BasicInput from '~/components/atoms/form/Basic.vue';
import AppButton from "@/components/UI/AppButton";

export default {
  name: 'AddProjectModal',
  components: {
    Label,
    BasicInput,
    AppButton
  },
  data() {
    return {
      formData: {
        title: '',
        deadline: '',
        giturl: ''
      }
    }
  },
  methods: {
    addProject() {
      this.$emit('submit', this.formData)
    },
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>


<style lang="scss" scoped>
.modal-container {
  @apply h-screen top-0 left-0 w-full fixed z-50 flex justify-center items-center;
  background: $color-grey-mask;
}
.modal-form {
  @apply bg-white flex flex-col justify-center items-center;
  width: 600px;
  padding: 77px 55px;
  &__inputs {
    @apply mt-10 w-full;
  }
}
.btn-field {
  @apply mt-10;
}
</style>
