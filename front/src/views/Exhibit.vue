<template>
  <div class="exhibit">
    <div id="art-img_box">
      <img
        class="art-img"
        :src="src.mainSrc"
        :style="{
          width: mainInnerWidth + 'px',
          height: mainInnerHeight + 'px',
        }"
      />
    </div>
    <div class="bottom-area">
      <button @click="onClickScroll" class="bottom-btn">
        <p>작품 설명 보기</p>
        <font-awesome-icon icon="chevron-down" />
      </button>
    </div>
    <div class="art-img_info_div">
      <div class="to-artImg">
        <button @click="onClickScrollToArt" class="bottom-btn">
          <font-awesome-icon icon="chevron-up" />
          <p>순수 작품 보기</p>
        </button>
      </div>
      <div class="art-img_info">
        <h1>{{ name }}</h1>
        <span>유채</span>
        <span>396 X 162cm</span>
        <span>한국무용 - 살풀이 춤</span>
      </div>
      <div class="to-fusionArt">
        <button @click="onClickScrollFusionArt" class="bottom-btn">
          <p>융합 작품 보기</p>
          <font-awesome-icon icon="chevron-down" />
        </button>
      </div>
    </div>
    <img
      class="art-img"
      :src="src.plusSrc"
      :style="{
        width: mainInnerWidth + 'px',
        height: mainInnerHeight + 'px',
      }"
    />
    <play-bar></play-bar>
  </div>
</template>

<script>
import PlayBar from "../components/PlayBar.vue";
export default {
  name: "Exhibit",
  components: { PlayBar },
  computed: {},
  created() {
    this.fetchData();
  },
  beforeCreate() {
    this.fetchData();
  },
  mounted() {
    console.log("mounted!");
    this.scrollToTop();
    this.mainInnerWidth = window.innerWidth;
    this.mainInnerHeight = window.innerHeight;

    if (this.$route.params.id === "1") {
      this.src.mainSrc = this.$store.state.arts[0].main_src;
      this.src.plusSrc = this.$store.state.arts[0].plus_src;
      this.name = this.$store.state.arts[0].name;
    } else if (this.$route.params.id === "2") {
      this.src.mainSrc = this.$store.state.arts[1].main_src;
      this.src.plusSrc = this.$store.state.arts[1].plus_src;
      this.name = this.$store.state.arts[1].name;
    }

    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  data() {
    return {
      src: {
        mainSrc: this.$store.state.arts[0].main_src,
        plusSrc: this.$store.state.arts[0].plus_src,
      },
      artImg: true,
      mainInnerWidth: 0,
      mainInnerHeight: 0,
      name: "",
      descirption: "무용수와 꽃의 가장 문제적 만남",
    };
  },
  watch: {
    "$route.params.id": "fetchData",
  },
  methods: {
    onClickScroll() {
      window.scrollBy({
        top: 960,
        left: 0,
        behavior: "smooth",
      });
    },
    onClickScrollToArt() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    onClickScrollFusionArt() {
      window.scrollBy({
        top: 2000,
        left: 0,
        behavior: "smooth",
      });
    },

    scrollToTop() {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 400);
    },

    handleScroll() {
      if (window.pageYOffset === 0) {
        document.documentElement.style.overflow = "hidden";
      } else if (window.pageYOffset > 0) {
        document.documentElement.style.overflow = "auto";
      }
    },

    handleResize() {
      this.mainInnerWidth = window.innerWidth;
      this.mainInnerHeight = window.innerHeight;
    },
    fetchData() {
      console.log("hello");

      this.id = this.$route.params.id;

      if (this.id === 1) {
        console.log(1);
        this.src.mainSrc = this.$store.state.arts[0].main_src;
        this.src.plusSrc = this.$store.state.arts[0].plus_src;
        this.name = this.$store.state.arts[0].name;
      } else if (this.id === 2) {
        console.log(2);
        this.src.mainSrc = this.$store.state.arts[1].main_src;
        this.src.plusSrc = this.$store.state.arts[1].plus_src;
        this.name = this.$store.state.arts[1].name;
      } else if (this.id === 3) {
        this.src.mainSrc = this.$store.state.arts[2].main_src;
        this.src.plusSrc = this.$store.state.arts[2].plus_src;
        this.name = this.$store.state.arts[2].name;
      }
      console.log(this.src.mainSrc);
      console.log(this.src.plusSrc);
    },
  },
};
</script>

<style>
#art-img_box {
}
/* 메인 이미지 */
.art-img {
  object-fit: cover;
}

/* 이미지 설명 */
.art-img_info_div {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
.art-img_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.art-img_info h1 {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2.3rem;
  margin-bottom: 20px;
  color: #0c606f;
  font-weight: bold;
}
.art-img_info span {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #0c606f;
}
.to-artImg {
  top: 10%;
  position: absolute;
  z-index: 2;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  left: 50%;
  transform: translateX(-50%);
}
.to-artImg .bottom-btn {
  color: black;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 1.5em;
}
.to-artImg p {
  margin-top: 10px;
  font-size: 1.2rem;
  color: black;
}
.to-fusionArt {
  bottom: 10%;
  position: absolute;
  z-index: 2;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  left: 50%;
  transform: translateX(-50%);
}
.to-fusionArt p {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: black;
}
.to-fusionArt .bottom-btn {
  color: black;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 1.5em;
}
/* 작품 설명 버튼 */
.bottom-area {
  bottom: 10%;
  transition: all 300ms ease 0s;
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
}
.bottom-area p {
  margin-bottom: 10px;
  font-size: 1.2rem;
}
.bottom-btn {
  color: white;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 1.5em;
}
</style>
