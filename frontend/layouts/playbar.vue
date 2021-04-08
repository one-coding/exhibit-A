<template>
  <div>
    <div id="nav">
      <div id="logo"><nuxt-link to="/">무위 無爲</nuxt-link></div>
      <div id="nav-menu">
        <nuxt-link to="/about">전시소개</nuxt-link> |
        <nuxt-link :to="`/exhibit/${+pageIndex}`">전시장</nuxt-link>
        |
        <nuxt-link to="/visitor">방명록</nuxt-link>
      </div>
    </div>
    <nuxt />

    <div id="playbar">
      <div id="playbar-wrapper">
        <!-- 전시장까지 보여질 플레이바 -->
        <div class="playbar-icon" v-show="pageIndex !== '6'">
          <nuxt-link to="/exhibit/1">
            <font-awesome-icon icon="step-backward" />
          </nuxt-link>
          <nuxt-link :to="`/exhibit/${+pageIndex - 1}`">
            <font-awesome-icon icon="chevron-left" />
          </nuxt-link>
          <span v-if="+pageIndex === 0 ? false : true">
            {{ pageIndex }} / 7</span
          >
          <nuxt-link :to="`/exhibit/${+pageIndex + 1}`">
            <font-awesome-icon icon="chevron-right" />
          </nuxt-link>
          <nuxt-link to="/exhibit/6">
            <font-awesome-icon icon="step-forward" />
          </nuxt-link>
        </div>
        <!-- 방명록으로 가는 플레이 바-->
        <div class="playbar-icon" v-show="pageIndex === '6'">
          <nuxt-link to="/exhibit/1">
            <font-awesome-icon icon="step-backward" />
          </nuxt-link>
          <nuxt-link :to="`/exhibit/${+pageIndex - 1}`">
            <font-awesome-icon icon="chevron-left" />
          </nuxt-link>
          <span> {{ pageIndex }} / 7</span>
          <nuxt-link :to="`/visitor`">
            <font-awesome-icon icon="chevron-right" />
          </nuxt-link>
          <nuxt-link to="/exhibit/6">
            <font-awesome-icon icon="step-forward" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    pageIndex() {
      return this.$route.params.id;
    },
  },
  methods: {},
};
</script>

<style>
#playbar-wrapper {
  position: fixed;
  width: 100%;
  height: 80px;
  bottom: 0;
  left: 0;
  background: #191919 0% 0% no-repeat padding-box;
  z-index: 2;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.playbar-icon a {
  text-decoration: none;
  margin: 0px 20px;
  color: #fff;
}
.playbar-icon span {
  margin: 0px 20px;
  letter-spacing: 3px;
}
</style>
