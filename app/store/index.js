import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

const createStore = () => {
  return new Vuex.Store({
    state: {
      projects: [],
    },
    mutations: {
      ...vuexfireMutations
    },
    actions: {
      setProjectsRef: firestoreAction((context, ref) => {
        context.bindFirestoreRef('projects', ref)
      })
    },
    getters: {
      getProjects: (state) => {
        return state.projects
      },
    },
  })
}
export default createStore