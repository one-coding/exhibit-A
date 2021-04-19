<template>
  <div>
    <swiper
      v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
      ref="mySwiper"
      :options="swiperOption"
      div
      class="comment-container"
      @someSwiperEvent="callback"
    >
      <swiper-slide v-for="n in 3" :key="n">
        <v-main class="comment-group">
          <v-container :style="{}">
            <v-row justify="center" no-gutters dense>
              <v-col v-for="n in 12" :key="n" cols="3" class="ma-0">
                <v-card
                  height="200"
                  width="200"
                  :style="{ borderRadius: '20px', padding: '20px' }"
                >
                  <span class="comment-name">{{ changeName }}</span>
                  <span class="comment-date">2021. 03. 31 16:55</span>
                  <span class="comment-content">{{ changeContent }}</span>
                  <font-awesome-icon class="comment-icon" icon="edit" />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev  white--text" />
      <div slot="button-next" class="swiper-button-next   white--text" />
    </swiper>

    <!-- 모바일 버전 -->

    <swiper
      v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      ref="mySwiper"
      :options="swiperOption"
      div
      class="comment-container"
      @someSwiperEvent="callback"
    >
      <swiper-slide v-for="n in 3" :key="n">
        <v-main>
          <v-container class="px-14">
            <v-row>
              <v-col v-for="n in 3" :key="n" cols="12" class="py-5">
                <v-card
                  height="150"
                  width="100%"
                  :style="{ borderRadius: '20px', padding: '20px' }"
                >
                  <span class="comment-name">{{ changeName }}</span>
                  <span class="comment-date">2021. 03. 31 16:55</span>
                  <span class="comment-content">{{ changeContent }}</span>
                  <font-awesome-icon class="comment-icon" icon="edit" />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev  white--text" />
      <div slot="button-next" class="swiper-button-next   white--text" />
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
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
};
</script>

<style>
.comment-container {
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  background: #36575d 0% 0% no-repeat padding-box;
}
.comment-group {
  width: 100%;
}

.comment-name {
  display: block;
}
.comment-date {
  margin-top: 5px;
  display: block;
  font-size: 13px;
}
.comment-content {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: inline-block;
  text-align: center;
}
.comment-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  cursor: pointer;
}
</style>
