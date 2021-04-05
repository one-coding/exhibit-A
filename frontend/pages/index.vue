<template>
  <div>
    <div class="home">
      <div id="main-poster_div">
        <img
          class="main-poster"
          :src="src.mainSrc"
          :style="{
            width: mainInnerWidth + 'px',
            height: mainInnerHeight + 'px',
          }"
        />
        <div class="main-poster_info-box">
          <img class="main-poster_info" src="../assets/img/posterInfo.png" />
          <nuxt-link to="/about" class="enter-btn_span">
            <button class="enter-btn">전시입장</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
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
#main-poster_div {
  position: absolute;
  top: 0;
  left: 0;
}
.main-poster_info-box {
  position: absolute;
  display: inline-block;
  width: 1200px;
  text-align: right;
  margin: auto;
  top: 25%;
  right: 10%;
}
.main-poster {
  object-fit: cover;
}
.main-poster_info {
  width: 70%;
}

.enter-btn {
  bottom: 0;
  right: 0;
  position: absolute;
  background: #0c606f 0% 0% no-repeat padding-box;
  border-radius: 28px;
  font-family: "YiSunShinRegular";
  color: #f8f8f8;
  letter-spacing: 3.5px;
  width: 771px;
  height: 71px;
  font-size: 35px;
  margin: 0px 35px 114px 0;
  outline: none;
  border: none;
}
</style>
