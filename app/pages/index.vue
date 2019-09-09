<template>
  <div class="page-container">
    <Navigation />
    <main class="main-wrapper">
      <div class="centeral-content">
        <div class="centeral-content__upper">
          <div class="tab-box">
            <Tab
              :active-tab="activeTab"
              :tabs="tabs"
              @click="activateTab"
            />
          </div>
          <div class="search">
            <input class="search__input" type="search" name="search" placeholder="Search">
          </div>
        </div>
        <div class="centeral-content__middle">
          <div class="cards__box">
            <Card
              v-for="project in projects"
              :key="project.title"
              :project="project"
            />
          </div>
        </div>
      </div>
      <div class="btn-box">
        <CircleBtn
          colorName="primary"
          size="m"
          @click="openAddProjectModal"
        >+</CircleBtn>
      </div>
    </main>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Header/Navigation.vue';
import Tab from '~/components/Main/Tab.vue';
import Card from '~/components/Main/Card.vue';
import CircleBtn from '~/components/UI/CircleBtn.vue';

export default {
  components: {
    Logo,
    Navigation,
    Tab,
    Card,
    CircleBtn
  },
  data() {
    return {
      activeTab: 'all',
      tabs: [
        {
          label: 'All',
          name: 'all'
        },
        {
          label: 'Ongoing',
          name: 'active'
        },
        {
          label: 'Done',
          name: 'done'
        },
      ],
      projects: [
        {
          title: 'Project Olaf',
          deadline: 'Mar 02',
          status: 'Active'
        },
        {
          title: 'Project Olaf',
          deadline: 'Mar 02',
          status: 'Active'
        },
        {
          title: 'Project Olaf',
          deadline: 'Mar 02',
          status: 'Active'
        },
        {
          title: 'Project Olaf',
          deadline: 'Mar 02',
          status: 'Active'
        },
        {
          title: 'Project Olaf',
          deadline: 'Mar 02',
          status: 'Active'
        }
      ]
    }
  },
   methods: {
     activateTab(target) {
       this.activeTab = target
     },
     openAddProjectModal() {
       console.log('add')
     }
   }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  @apply mt-16 py-6 px-4 flex justify-center items-center relative;
}

.centeral-content {
  @apply flex flex-col overflow-scroll whitespace-no-wrap;
  &__upper {
    @apply flex justify-center items-center;
    border-bottom: 1px solid rgb(229, 227, 221);
  }

  &__middle {
    @apply my-6;
  }
}

.search {
  &__input {
    @apply border-2 border-gray-300 bg-white w-full h-10 px-5 rounded-lg text-sm hidden;
    &:focus {
      outline: none;
    }
  }
}

.cards__box {
  display: flex;
  flex-wrap: wrap;
}

.tab-box {
  @apply overflow-scroll whitespace-no-wrap;
}

.btn-box {
  position: fixed;
  bottom: 20px;
  right: 50%;
  transform: translate(50%, 0%);
}

@media (min-width: 640px) {
  .main-wrapper {
    @apply px-12 py-20;
  }
}

@media (min-width: 850px) {
  .centeral-content {
    @apply w-3/4;
    &__upper {
      @apply justify-between;
    }
  }

  .tab-box {
    @apply mr-6;
  }

  .search  {
    flex-basis: 30%;
    &__input {
      @apply block;
    }
  }
}
</style>