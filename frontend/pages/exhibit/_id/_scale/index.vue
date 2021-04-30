<template>
  <v-card>
    <div id="art-img_box">
      <v-img class="art-img" :src="src.plusSrc" />
      <v-btn large dark class="btn-wrapper_span">
        <nuxt-link :to="`/exhibit/${pageIndex}`">
          돌아가기
        </nuxt-link>
      </v-btn>
      <!-- <v-btn fab dark class="btn-wrapper" style="right: 30%">
        <button
          class="
      icon-btn"
          @click="onScaleUp"
        >
          <font-awesome-icon icon="plus" />
        </button>
      </v-btn>
      <v-btn fab dark class="btn-wrapper" style="right: 25%">
        <button class="icon-btn" @click="onScaleUp">
          <font-awesome-icon icon="minus" />
        </button>
      </v-btn>
      <v-btn fab dark class="btn-wrapper" style="right: 20%">
        <button class="icon-btn" @click="onScaleUp">
          <font-awesome-icon icon="redo" />
        </button>
      </v-btn> -->
    </div> 
  </v-card>
</template>

<script>
export default {
  scrollToTop: true,
  layout: "scale",
  data() {
    return {
      artImg: true,
      isReadOnly: false,

      src: {
        plusSrc: this.$store.state.image.arts[0].plus_src,
      },
    };
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

    const artId = this.$route.params.id;
    switch (artId) {
      case "1":
        this.artIdChangeSrc(0);
        break;
      case "2":
        this.artIdChangeSrc(1);
        break;
      case "3":
        this.artIdChangeSrc(2);
        break;
      case "4":
        this.artIdChangeSrc(3);
        break;
      case "5":
        this.artIdChangeSrc(4);
        break;
      case "6":
        this.artIdChangeSrc(5);
        break;
      case "7":
        console.log("7");
        this.$router.push({
          path: "/vistor",
        });
        break;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toTop() {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    },
    onScaleUp() {
      const artImgRef = this.$refs.artImgRef;

      artImgRef.width = artImgRef.width * 2;
      console.log(artImgRef.width);
    },

    artIdChangeSrc(index) {
      this.src.plusSrc = this.$store.state.image.arts[index].plus_src;
    },
  },
  head: {
    title: "비대면 전시회 - 전시장",
  },
};
</script>

<style scoped>
#art-img_box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
/* 메인 이미지 */
.art-img {
  width: 100%;
}
/* 작품 설명 버튼 */

.btn-wrapper_span {
  display: inline-block;
  border-radius: 28px;
  width: 132px;
  font-size: 15px;
  height: 106px;
  background: #191919 0% 0% no-repeat padding-box;
  transition: all 300ms ease 0s;
  z-index: 2;
  position: absolute;
  display: flex;
  bottom: 13%;
  right: 8%;
  margin-right: 20px;
}

.btn-wrapper_span a {
  color: #19caea;
  background: 0% 0% no-repeat padding-box;
  font-size: 20px;
  padding: 10px 20px;
  display: flex;
  font-family: "NotoSans";
  align-content: center;
  justify-content: center;
}
/* 아이콘 버튼 공통 레이아웃  */
.btn-wrapper {
  background: #191919 0% 0% no-repeat padding-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 13%;
  right: 24%;
  width: 50px;
  height: 50px;
}
.icon-btn {
  outline: none;
  background: none;
  border: none;
  color: #19caea;
  font-size: 25px;
  cursor: pointer;
}
</style>
