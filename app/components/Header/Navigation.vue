<template>
<div class="nav-wrapper">
  <nav class="site-nav">
    <div class="site-nav__logo">
      <Logo />
    </div>
    <div class="site-nav__links">
      <ul class="site-nav__links-list">
        <li class="site-nav__item dropdown">
          <div class="site-nav__item-box dropdown__btn">
            <font-awesome-icon icon="user-circle" class="site-nav__icon" />
            <span class="site-nav__name">Yuuhi Koizumi</span>
          </div>
          <div class="dropdown__list">
            <div class="dropdown__content">
              <ul class="dropdown__item-list">
                <li class="dropdown__item">Account</li>
                <li class="dropdown__item">Projects</li>
                <li class="dropdown__item">Tasks</li>
                <li class="dropdown__item">Log out</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
   name: "Navigation",
   components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  z-index: 1000;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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

  &__links {
    justify-self: end;
  }

  &__item-box {
    @apply flex;
  }

  &__icon {
    @apply mr-1 text-2xl;
  }

  &__name {
    @apply hidden;
  }

}

.dropdown {
  @apply relative;

  &__list {
    @apply hidden absolute bg-white w-full;
  }

  &__content {
    // @apply py-4;
  }
  &__item {
    @apply p-2 border-b-2 w-full text-center cursor-pointer;

  }
  &__item:hover {
    border-bottom: 2px solid #55c57a;
  }
  &:hover &__list{
    @apply block;
  }
}

@media (min-width: 640px) {
  .site-nav  {
    &__name {
      @apply block;
    }
  }
}
</style>
