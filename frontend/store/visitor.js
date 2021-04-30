export const state = () => ({
  mainPosts: [],
  postLength: [],
});
export const mutations = {
  setPost(state, payload) {
    state.mainPosts = payload;
  },
  write(state, payload) {
    state.mainPosts.unshift(payload);
  },
};

export const actions = {
  async loadPost({ commit }, payload) {
    try {
      const res = await this.$axios.get(`/visitor`);
      commit("setPost", res.data);
    } catch (err) {
      console.error(err);
    }
  },

  async write({ commit }, payload) {
    try {
      const res = await this.$axios.post(`/visitor/post`, {
        name: payload.name,
        password: payload.password,
        content: payload.content,
      });
      console.log("여기인가?");
      commit("write", res.data);
    } catch (err) {
      console.error(err);
    }
  },
};
