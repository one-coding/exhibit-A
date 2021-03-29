<template>
  <div id="nav">
    <div id="logo"><router-link to="/">무위 無爲</router-link></div>
    <div id="nav-menu">
      <router-link to="/about">전시소개</router-link>|
      <router-link @click.native="scrollToTop" to="/exhibit">전시장</router-link
      >|
      <router-link to="/visitor">방명록</router-link>
    </div>
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
a {
  text-decoration: none;
  outline: none;
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
  justify-content: start;
  background: #191919 0% 0% no-repeat padding-box;
  padding: 20px;
  z-index: 99;
}
#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
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
