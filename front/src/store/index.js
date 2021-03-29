import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    arts: [
      {
        id: 1,
        name: "무위자연",
        descirption: "무용수와 꽃의 가장 문제적 만남",
        main_src: require("../assets/img/HDK_9208.jpg"),
        plus_src: require("../assets/img/HDK_9212_2.jpg"),
      },
      {
        id: 2,
        name: "비빌언덕",
        descirption: "부처님 귀는 당나귀 귀~!",
        main_src: require("../assets/img/HDK_9125.jpg"),
        plus_src: require("../assets/img/HDK_9125_2.jpg"),
      },

      {
        id: 3,
        name: "경 이루어지다",
        descirption: "경이로운 소문",
        main_src: require("../assets/img/HDK_9312.jpg"),
        plus_src: require("../assets/img/HDK_9331.jpg"),
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
