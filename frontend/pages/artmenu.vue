<template>
  <div class="art-menu">
    <swiper ref="mySwiper" :options="swiperOption" class="swiper">
      <swiper-slide class="swiper-slide">
        <v-card class="swiper-slide-img">
          <nuxt-link to="exhibit/1">
            <v-img :src="arts[0].plus_src" />
          </nuxt-link>
        </v-card>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <v-card class="swiper-slide-img">
          <nuxt-link to="exhibit/2">
            <v-img :src="arts[1].plus_src" />
          </nuxt-link>
        </v-card>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <v-card class="swiper-slide-img">
          <nuxt-link to="exhibit/3">
            <v-img :src="arts[2].plus_src" />
          </nuxt-link>
        </v-card>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <v-card class="swiper-slide-img">
          <nuxt-link to="exhibit/4">
            <v-img :src="arts[3].plus_src" />
          </nuxt-link>
        </v-card>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <v-card class="swiper-slide-img">
          <nuxt-link to="exhibit/5">
            <v-img :src="arts[4].plus_src" />
          </nuxt-link>
        </v-card>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <v-card class="swiper-slide-img">
          <nuxt-link to="exhibit/6">
            <v-img :src="arts[5].plus_src" />
          </nuxt-link>
        </v-card>
      </swiper-slide>

      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev white--text" />
      <div slot="button-next" class="swiper-button-next white--text" />
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: {
        mainSrc: this.$store.state.image.arts[0].main_src,
        plusSrc: this.$store.state.image.arts[0].plus_src,
      },
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 40,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    arts() {
      return this.$store.state.image.arts;
    },
  },
};
</script>

<style scoped>
.art-menu {
  width: 100%;
  height: 95vh;
  background: #292929;
}
.swiper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.swiper-slide {
  display: flex;
  align-items: center;
  width: 600px;
  height: auto;
  border-radius: 7px;
}
.swiper-slide-img {
  width: 600px;
  height: auto;
  border-radius: 7px;
}
</style>
