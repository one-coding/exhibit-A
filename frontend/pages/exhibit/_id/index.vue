<template>
  <div>
    <v-card v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
      <v-img class="art-img" :src="src.mainSrc" />
      <div class="bottom-area">
        <v-btn
          align="center"
          justify="space-around"
          class="bottom-btn"
          depressed
          @click="onClickScroll"
        >
          <p align="center" justify="center" class="d-block">
            작품 설명 보기
          </p>
          <v-container>
            <font-awesome-icon icon="chevron-down" />
          </v-container>
        </v-btn>
      </div>
      <v-btn fab dark class="btn-wrapper">
        <nuxt-link :to="`/exhibit/${pageIndex}/scale`">
          <font-awesome-icon class="serch-icon" icon="search" />
        </nuxt-link>
      </v-btn>
    </v-card>

    <v-card v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
      <v-img class="art-img_mobile" :src="src.mainSrc" />
      <div class="bottom-area">
        <v-btn class="bottom-btn" @click="onClickScroll">
          <p>작품 설명 보기</p>
          <font-awesome-icon icon="chevron-down" />
        </v-btn>
      </div>
      <v-btn fab dark class="btn-wrapper">
        <nuxt-link :to="`/exhibit/${pageIndex}/scale`">
          <font-awesome-icon class="serch-icon" icon="search" />
        </nuxt-link>
      </v-btn>
    </v-card>
    <v-card>
      <div class="art-img_info_div">
        <div class="to-artImg">
          <button class="bottom-btn" @click="onClickScrollToArt">
            <font-awesome-icon icon="chevron-up" />
            <p>순수 작품 보기</p>
          </button>
        </div>

        <div ref="upTarget" class="art-img_info">
          <h1>{{ info.name }}</h1>
          <span>{{ info.method }}</span>
          <span>{{ info.size }}</span>
          <span>{{ info.dance }}</span>
          <div style="width: 350px; line-height:1.4;">
            <v-card flat>
              <span
                v-if="info.descirption"
                class="text-left"
                :style="{ fontSize: '18px' }"
                >{{ info.descirption }}</span
              >
            </v-card>
          </div>
        </div>
        <div class="to-fusionArt">
          <button class="bottom-btn" @click="onClickScrollFusionArt">
            <p>융합 작품 보기</p>
            <font-awesome-icon icon="chevron-down" />
          </button>
        </div>
      </div>
    </v-card>
    <v-card>
      <v-img class="art-img" :src="src.plusSrc" />
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "playbar",
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
  computed: {
    pageIndex() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.toTop();
    document.documentElement.style.overflow = "hidden";

    const artId = this.$route.params.id;
    if (artId <= 0) {
      this.$router.push({
        path: "/about",
      });
    }
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
    if (artId >= 7) {
    }

    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
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
  head: {
    title: "비대면 전시회 - 전시장",
  },
};
</script>

<style>
#art-img_box {
  top: 0;
}
/* 메인 이미지 */
.art-img {
  width: 100%;
  height: 100vh;
}
.art-img_mobile {
  width: 100%;
  height: 100vh;
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
  bottom: 20%;
  transition: all 300ms ease 0s;
  position: absolute;
  display: flex;
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
  background: #191919;
  border-radius: 50%;
  transition: all 300ms ease 0s;
  position: absolute;
  bottom: 20%;
  right: 5%;
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
