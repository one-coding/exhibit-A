<template>
  <div>
    <div id="nav">
      <div id="logo"><nuxt-link to="/">무위 無爲</nuxt-link></div>
      <div id="nav-menu">
        <nuxt-link to="/about">전시소개</nuxt-link> |
        <nuxt-link to="/exhibit/1">전시장</nuxt-link>
        |
        <nuxt-link to="/visitor">방명록</nuxt-link>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      btn: null,
    };
  },
  computed: {},
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
#logo {
  display: flex;
  align-items: center;
  width: 150px;
  text-align: start;
  margin-right: 150px;
  font: normal normal normal;
  font-size: 25px;
  letter-spacing: 0px;
  color: #f8f8f8;
  font-family: "YiSunShinRegular";
  transform: translateX(60%);
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background: #191919 0% 0% no-repeat padding-box;
  padding: 20px;
  z-index: 99;
}
#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.nuxt-link-exact-active {
  color: #19caea;
}
#nav-menu {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: start;
  height: 20px;
  margin: auto;
  color: #f8f8f8;
  background: #191919 0% 0% no-repeat padding-box;
}
#nav-menu a {
  text-align: left;
  font: normal normal normal 20px/20px Bold;
  font-family: "YiSunShinRegular";
  letter-spacing: 0px;
  color: #f8f8f8;
  padding: 20px;
  margin-right: 20px;
}
</style>
