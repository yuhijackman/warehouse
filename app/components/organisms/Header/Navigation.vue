<template>
<div class="nav-wrapper">
  <nav class="site-nav">
    <div class="site-nav__logo">
      <Logo />
    </div>
    <AccountNavigation />
  </nav>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import AccountNavigation from '~/components/Organisms/Header/AccountNavigation'

export default {
   name: "Navigation",
   components: {
    Logo,
    AccountNavigation
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  @apply z-40 bg-white fixed top-0 left-0 w-full;
  border-bottom: 1px solid rgb(229, 227, 221);
}
.site-nav {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 64px;
  gap: 1rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 1rem;
}
</style>
