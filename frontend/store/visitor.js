export const state = () => ({
  name: null,
  password: null,
  content: null,
});
export const mutations = {
  write(state, payload) {
    state.name = payload.name;
    state.password = payload.password;
    state.content = payload.content;
  },
};

export const actions = {
  write({ commit }, payload) {
    commit("write", {
      name: payload.name,
      password: payload.password,
      content: payload.content,
    });
  },
};
