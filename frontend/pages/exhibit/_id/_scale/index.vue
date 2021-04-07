<template>
  <div class="exhibit">
    <div id="art-img_box">
      <img class="art-img" :src="arts[0].plus_src" />
    </div>
    <div class="btn-wrapper_span">
      <nuxt-link :to="`/exhibit/${pageIndex}`">돌아가기</nuxt-link>
    </div>
    <div class="btn-wrapper">
      <!-- <button></button> 여기서부터시작하셈 플러스 마이너스 구현 -->
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: "scale",
  head: {
    title: "비대면 전시회 - 전시장",
  },
  computed: {
    arts() {
      return this.$store.state.image.arts;
    },
    pageIndex() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.toTop();
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      artImg: true,
    };
  },
  methods: {
    toTop() {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    },
  },
};
</script>

<style scoped>
#art-img_box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
/* 메인 이미지 */
.art-img {
  max-width: 1000px;
}
/* 작품 설명 버튼 */

.btn-wrapper_span {
  display: inline-block;
  border-radius: 20px;
  background: #191919 0% 0% no-repeat padding-box;
  transition: all 300ms ease 0s;
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  bottom: 10%;
  right: 10%;
  margin-right: 20px;
}
.btn-wrapper_span span {
}
.btn-wrapper_span a {
  color: #19caea;
  background: 0% 0% no-repeat padding-box;
  font-size: 18px;
  padding: 10px 20px;
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
