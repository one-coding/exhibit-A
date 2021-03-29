<template>
  <div id="playbar">
    <div id="playbar-wrapper">
      <div class="playbar-icon">
        <router-link to="/">
          <font-awesome-icon icon="step-forward" />
        </router-link>
        <router-link :to="{ name: 'showExhibit', params: { id: +id - 1 } }">
          <font-awesome-icon icon="chevron-left" />
        </router-link>
        <span> {{ id }} / 6</span>
        <router-link :to="{ name: 'showExhibit', params: { id: +id + 1 } }">
          <font-awesome-icon icon="chevron-right" />
        </router-link>
        <router-link to="exhibit">
          <font-awesome-icon icon="step-forward" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("beforeCreate!");
  },
  created() {
    this.fetchData();
    console.log("created!");
  },
  data() {
    return {
      id: "",
      arts: this.$store.state.arts,
    };
  },
  computed: {},
  methods: {
    fetchData() {
      this.id = this.$route.params.id;
    },
  },
  watch: {
    "$route.params.id": "fetchData",
  },
};
</script>

<style>
#playbar-wrapper {
  position: fixed;
  width: 100%;
  height: 80px;
  bottom: 0;
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
