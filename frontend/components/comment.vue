<template>
  <div v-if="comment">
    <v-container v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
      <v-main class="comment-group">
        <v-container>
          <v-card
            height="200"
            width="200"
            :style="{ borderRadius: '20px', padding: '20px' }"
          >
            <span class="comment-name">{{ comment.name }}</span>
            <span class="comment-date">{{ comment.createdAt }}</span>
            <span class="comment-content">{{ comment.content }}</span>
            <font-awesome-icon class="comment-icon" icon="edit" />
          </v-card>
        </v-container>
      </v-main>
    </v-container>

    <!-- 모바일 버전 -->
    <v-container v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
      <v-main class="comment-group">
        <v-container>
          <v-card
            height="150"
            width="100%"
            :style="{ borderRadius: '20px', padding: '20px' }"
          >
            <span class="comment-name">{{ comment.name }}</span>
            <span class="comment-date">{{ comment.createdAt }}</span>
            <span class="comment-content">{{ comment.content }}</span>
            <font-awesome-icon class="comment-icon" icon="edit" />
          </v-card>
        </v-container>
      </v-main>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      require: true,
    },
  },
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
