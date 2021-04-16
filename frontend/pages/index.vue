<template>
  <v-card class="main-img">
    <div v-if="!$vuetify.breakpoint.xs" class="main-poster_info-box">
      <img class="main-poster_info" src="../assets/img/posterInfo.png" />
      <v-btn class="enter-btn btn pa-5" link to="/about">
        <span class="my-5">전시입장 </span>
      </v-btn>
    </div>
    <div v-if="$vuetify.breakpoint.xs" class="main-poster_info-box_mobile">
      <img
        class="main-poster_info_mobile"
        src="../assets/img/mobile-ver(info).png"
      />
      <v-btn class="enter-btn-mobile btn pa-5" to="/about">
        <span class="my-5">전시입장 </span>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      src: {
        mainSrc: require("../assets/img/main.jpg"),
      },
      scale: 0,
      mainInnerWidth: 0,
      mainInnerHeight: 0,
      resizeX: 0,
    };
  },
  mounted() {
    document.documentElement.style.overflow = "hidden";
    this.mainInnerWidth = window.innerWidth;
    this.mainInnerHeight = window.innerHeight;
    window.addEventListener("resize", this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      this.mainInnerWidth = window.innerWidth;
      this.mainInnerHeight = window.innerHeight;
    },
  },
};
</script>

<style scoped>
.main-img {
  background: url("../assets/img/main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.main-poster_info-box {
  position: absolute;
  display: inline-block;
  width: 1200px;
  text-align: right;
  margin: auto;
  top: 20%;
  right: 10%;
  background: rgba(0, 0, 0, 0);
  border: none;
  box-shadow: none;
}
.main-poster_info-box_mobile {
  background: url("../assets/img/mobile-ver(BG).jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  top: 20%;
  right: 10%;

  border: none;
  box-shadow: none;
}

.main-poster_info {
  width: 60%;
}
.main-poster_info_mobile {
  width: 140%;
  transform: translateY(-20%);
}

.enter-btn {
  bottom: 0;
  right: 0;
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  border-radius: 25px;
  color: #f8f8f8;
  letter-spacing: 3.5px;
  width: 660px;
  height: 200px;
  margin: 0px 35px 114px 0;
  outline: none;
  border: none;
}
.enter-btn-mobile {
  font-size: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 30%;
  margin: auto;
  width: 120px;
  position: fixed;
  color: #f8f8f8;
  letter-spacing: 2px;
  height: 200px;
  outline: none;
  border: none;
}

@media screen and (max-width: 850px) {
  .main-poster_info-box {
    position: absolute;
    display: inline-block;
    width: 900px;
    text-align: right;
    margin: auto;
    top: 20%;
    right: 10%;
    background: rgba(0, 0, 0, 0);
    border: none;
    box-shadow: none;
  }

  .enter-btn {
    bottom: 0;
    right: 0;
    position: absolute;
    border-radius: 25px;
    font-family: "YiSunShinRegular";
    color: #f8f8f8;
    letter-spacing: 3.5px;
    width: 500px;
    height: 200px;
    margin: 0px 35px 80px 0;
    outline: none;
    border: none;
  }
  .enter-btn-mobile {
    font-size: 15px;
    font-weight: bold;
    color: #f8f8f8;
    letter-spacing: 2px;
    height: 200px;
    outline: none;
    border: none;
  }
}
</style>
