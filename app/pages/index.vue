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
              v-for="(project, key, index)  in projects"
              :key="index"
              :project="project"
            />
          </div>
        </div>
      </div>
    </main>
    <div
      v-if="!showAddProjectModal"
      class="btn-box">
      <CircleBtn
        colorName="primary"
        size="m"
        @click="openAddProjectModal"
      >+</CircleBtn>
    </div>
    <transition name="fade">
      <AddProjectModal
        v-if="showAddProjectModal"
        @submit="addProject"
        @close="closeAddProjectModal"
      />
    </transition>
    <li v-for="post in projectss" v-bind:key="post.id">
        {{post.title}}
    </li>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Organisms/Header/Navigation.vue';
import Tab from '~/components/Main/Tab.vue';
import Card from '~/components/Main/Card.vue';
import CircleBtn from '~/components/atoms/button/CircleBtn.vue';
import AddProjectModal from '~/components/molecules/AddProjectModal.vue';
import firebase from "~/plugins/firebase.js";
import { mapGetters } from 'vuex';
const db = firebase.firestore();

export default {
  components: {
    Logo,
    Navigation,
    Tab,
    Card,
    CircleBtn,
    AddProjectModal
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
      ],
      showAddProjectModal: false
    }
  },
  created: function () {
    this.$store.dispatch('setProjectsRef', db.collection('projects'))
  },
  computed: {
    ...mapGetters({ projectss: 'getProjects' })
  },
   methods: {
     activateTab(target) {
       this.activeTab = target
     },
     openAddProjectModal() {
       this.showAddProjectModal = true
     },
     addProject(data) {
       const project = {
         title: data.title,
         deadline: data.deadline,
         git_url: data.git_url,
         site_url: data.site_url,
       }
       const projectsRef = db.collection('projects')
       projectsRef.add(project)
       this.closeAddProjectModal
     },
     closeAddProjectModal() {
       this.showAddProjectModal = false
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
  margin: -0.5rem;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@screen sm {
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