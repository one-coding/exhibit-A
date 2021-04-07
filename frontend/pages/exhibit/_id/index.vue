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
    <div class="btn-wrapper">
      <nuxt-link :to="`/exhibit/${pageIndex}/scale`">
        <font-awesome-icon class="serch-icon" icon="search" />
      </nuxt-link>
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
      <div class="art-img_info" ref="upTarget">
        <h1>{{ info.name }}</h1>
        <span>{{ info.method }}</span>
        <span>{{ info.size }}</span>
        <span>{{ info.dance }}</span>
        <div
          style="width: 350px; text-align:center; display:inline-block;line-height:1.4;"
        >
          <span :style="{ fontSize: '18px' }" v-if="info.descirption">{{
            info.descirption
          }}</span>
        </div>
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
  </div>
</template>

<script>
export default {
  layout: "playbar",
  head: {
    title: "비대면 전시회 - 전시장",
  },
  computed: {
    pageIndex() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.toTop();
    document.documentElement.style.overflow = "hidden";

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
    }

    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.mainInnerWidth = window.innerWidth;
    this.mainInnerHeight = window.innerHeight;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      src: {
        mainSrc: this.$store.state.image.arts[0].main_src,
        plusSrc: this.$store.state.image.arts[0].plus_src,
      },
      info: {
        name: this.$store.state.image.arts[0].name,
        descirption: this.$store.state.image.arts[0].descirption,
        dance: this.$store.state.image.arts[0].dance,
        size: this.$store.state.image.arts[0].size,
        method: this.$store.state.image.arts[0].method,
      },
      artImg: true,

      mainInnerWidth: null,
      mainInnerHeight: null,
    };
  },
  methods: {
    toTop() {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    },
    onClickScroll() {
      const target = this.$refs.upTarget;
      console.log(target);
      target.scrollIntoView({ behavior: "smooth" });
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
    artIdChangeSrc(index) {
      this.src.mainSrc = this.$store.state.image.arts[index].main_src;
      this.src.plusSrc = this.$store.state.image.arts[index].plus_src;
      this.info.name = this.$store.state.image.arts[index].name;
      this.info.method = this.$store.state.image.arts[index].method;
      this.info.size = this.$store.state.image.arts[index].size;
      this.info.dance = this.$store.state.image.arts[index].dance;
      this.info.descirption = this.$store.state.image.arts[index].descirption;
    },
  },
};
</script>

<style>
#art-img_box {
  top: 0;
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
  position: relative;
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
.btn-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
  bottom: 12%;
  right: 5%;
  margin-right: 20px;
}
.btn-wrapper a {
  color: #19caea;
  background: 0% 0% no-repeat padding-box;
  font-size: 25px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.btn-wrapper .btn-wrapper {
  width: 30px;
  height: 30px;
}
</style>
