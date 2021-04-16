<template>
  <v-app>
    <v-app-bar app flat dark :height="height" width="100%">
      <v-container>
        <v-row align="center" no-gutters>
          <v-col cols="4" sm="5" md="3" lg="3" class="text-center">
            <header class="pa-3">
              <nuxt-link
                class="white--text logo-title"
                to="/"
                tag="span"
                style="cursor: pointer"
              >
                무위 無爲
              </nuxt-link>
            </header>
          </v-col>
          <v-col class="logo-subtitle">
            <nuxt-link
              class="nav-subtitle"
              to="/about"
              tag="span"
              style="cursor: pointer"
            >
              전시소개
            </nuxt-link>
            <nuxt-link
              class="nav-subtitle"
              to="/exhibit/1"
              tag="span"
              style="cursor: pointer"
            >
              전시장
            </nuxt-link>
            <nuxt-link
              class="nav-subtitle"
              to="/visitor"
              tag="span"
              style="cursor: pointer"
            >
              방명록
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      btn: null,
    };
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 60;
        case "sm":
          return 60;
        case "md":
          return 60;
        case "lg":
          return 70;
        default:
          return 80;
      }
    },
  },
  methods: {},
  scrollToTop() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
@font-face {
  font-family: "YiSunShinRegular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinRegular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@import url("https://fonts.googleapis.com/css2?family=Merienda&display=swap");

a {
  text-decoration: none;
  outline: none;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.logo-title {
  font-family: "YiSunShinRegular";
  font-size: 25px;
}
.logo-subtitle {
  font-weight: bold;
  color: #f8f8f8;
  font: 18px/18px Bold;
  font-family: "YiSunShinRegular";
}
.nav-subtitle {
  padding: 20px;
}

.nuxt-link-exact-active {
  color: #19caea;
}

@media screen and (max-width: 768px) {
  #logo {
    transform: translateX(0);
  }
}
@media screen and (max-width: 600px) {
  .logo-title {
    font-size: 16px;
    margin-left: 0;
    margin-right: 0;
  }
  .logo-subtitle {
    font: 14px/14px Bold;
    font-family: "YiSunShinRegular";
    transform: translateX(-10%);
    margin-left: 12px;
  }
  .nav-subtitle {
    padding: 8px;
  }
}
@media screen and (max-width: 330px) {
  .logo-subtitle {
    font: 13px/13px Bold;
    font-family: "YiSunShinRegular";
    transform: translateX(-10%);
    margin-left: 20px;
  }
  .nav-subtitle {
    padding: 6px;
  }
}
</style>
