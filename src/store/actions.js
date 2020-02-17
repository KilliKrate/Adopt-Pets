export default {
  // {{commit}} is pulling the context.commit method. This is done for optimization, since we don't need the whole object
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
