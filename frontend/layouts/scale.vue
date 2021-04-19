<template>
  <div>
    <nuxt />
    <div id="playbar">
      <div id="playbar-wrapper">
        <div class="playbar-icon">
          <nuxt-link to="/">
            <font-awesome-icon icon="step-forward" />
          </nuxt-link>
          <nuxt-link :to="`/exhibit/${+pageIndex - 1}`">
            <font-awesome-icon icon="chevron-left" />
          </nuxt-link>
          <span> {{ pageIndex }} / 7</span>
          <nuxt-link :to="`/exhibit/${+pageIndex + 1}`">
            <font-awesome-icon icon="chevron-right" />
          </nuxt-link>
          <nuxt-link to="/exhibit">
            <font-awesome-icon icon="step-forward" />
          </nuxt-link>
        </div>
        <see-art-menu />
      </div>
    </div>
  </div>
</template>

<script>
import seeArtMenu from "../components/seeArtMenu.vue";
export default {
  components: { seeArtMenu },
  data() {
    return {};
  },
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
