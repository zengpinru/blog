import Vue from 'vue'
import Vuex from 'vuex'
import { getArticleById } from '../api/article'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      article: {}
    },
    mutations: {
      setArticle ({ state }, data) {
        state.article = data
      }
    },
    actions: {
      getArticleById ({ commit }, id) {
        getArticleById(id).then(res => {
          if (res.code === 0) {
            commit('setArticle', res.data)
          }
        })
      }
    }
  })
}
