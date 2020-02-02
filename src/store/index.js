import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

export default new Vuex.Store({
  state: {
    facts: [
      { fact: 'I am cool', id: 1 },
      { fact: 'You are cool', id: 2 },
    ],
  },
  getters: {
    allFacts: state => state.facts,
    hairFacts: state => state.facts.filter(item => item.text.includes('hair')),
    dogFacts: state => state.facts.filter(item => item.text.includes('dog')),
  },
  mutations: {
    setFacts(state, facts) {
      state.facts = facts;
    },
  },
  actions: {
    fetchCatFact (context) {
      fetch(`${corsProxy}https://cat-fact.herokuapp.com/facts`)
        .then(res => res.json())
        .then(data => {
          context.commit('setFacts', data.all)
        });
    },
  },
  modules: {
  }
})
