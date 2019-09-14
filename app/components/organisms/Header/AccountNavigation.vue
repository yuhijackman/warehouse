<template>
  <section class="account-nav">
    <ul class="account-nav__links-list">
      <li class="account-nav__item">
        <TextIconSideBySide
          icon-name="user-circle"
          icon-size="text-2xl"
          icon-color="primary"
          text="Yuuhi Koizumi"
        />
        <DropdownForNav
          class="dropdown"
          :list="[
            'Account',
            'Projects',
            'Tasks',
            'Log out'
          ]"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import TextIconSideBySide from '~/components/Molecules/TextIconSideBySide'
import DropdownForNav from '~/components/Molecules/DropdownForNav'
export default {
  name: "AccountNavigation",
  components: {
    TextIconSideBySide,
    DropdownForNav
  },
  data() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.account-nav {
  justify-self: end;
  &__item {
    @apply relative;
    &:hover .dropdown {
      @apply block;
    }
  }
}

.dropdown {
  @apply absolute hidden bg-white w-full;
}
</style>
