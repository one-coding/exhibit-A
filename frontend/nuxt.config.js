module.exports = {
  head: {
    title: "비대면 전시회",
  },
  modules: [],
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/fontawesome",
    "@nuxtjs/vuetify",
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  axios: {
    browserBaseURL: "http://localhost:3080",
    baseURL: "http://localhost:3080",
    https: false,
  },
  server: {
    port: 3000,
  },
  plugins: [],
  vuetify: {},
};
