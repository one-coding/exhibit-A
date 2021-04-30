module.exports = {
  head: {
    title: "비대면 전시회",
  },
  modules: ["@nuxtjs/axios"],
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/fontawesome",
    "@nuxtjs/vuetify",
  ],
  vuetify: {
    breakpoint: {
      mobileBreakpoint: "xs",
    },
    theme: {
      themes: {
        light: {
          btn: "0c606f",
          primary: "#19caea",
        },
      },
    },
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  axios: {
    browserBaseURL: "http://localhost:3085",
    baseURL: "http://localhost:3085",
    https: false,
  },
  server: {
    port: 3080,
  },

  css: [],
};
