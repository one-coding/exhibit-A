<template>
  <v-app>
    <v-app-bar app flat dark :height="height" width="100%">
      <v-container>
        <v-row align="center" no-gutters>
          <v-col cols="4" sm="5" md="3" lg="3" class="text-center">
            <header class="pa-3">
              <nuxt-link
                class="white--text logo-title"
                to="/"
                tag="span"
                style="cursor: pointer"
              >
                무위 無爲
              </nuxt-link>
            </header>
          </v-col>
          <v-col class="logo-subtitle">
            <nuxt-link
              class="nav-subtitle"
              to="/about"
              tag="span"
              style="cursor: pointer"
            >
              전시소개
            </nuxt-link>
            <nuxt-link
              class="nav-subtitle"
              to="/exhibit/1"
              tag="span"
              style="cursor: pointer"
            >
              전시장
            </nuxt-link>
            <nuxt-link
              class="nav-subtitle"
              to="/visitor"
              tag="span"
              style="cursor: pointer"
            >
              방명록
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>

    <div id="playbar">
      <div id="playbar-wrapper">
        <div class="playbar-icon">
          <nuxt-link to="/exhibit/1">
            <font-awesome-icon icon="step-backward" />
          </nuxt-link>
          <nuxt-link :to="`/exhibit/6`">
            <font-awesome-icon icon="chevron-left" />
          </nuxt-link>
          <span> 7 / 7</span>

          <nuxt-link ref="linkRight" :to="`/visitor`">
            <font-awesome-icon icon="chevron-right" />
          </nuxt-link>
          <nuxt-link to="/visitor">
            <font-awesome-icon icon="step-forward" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    pageIndex() {
      if (!this.$route.params.id || this.$route.params.id > 6) {
        this.$route.params.id = 7;
      }
      return this.$route.params.id;
    },
  },
  watch: {
    $route: "fetchData",
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const artId = this.$route.params.id;
    },
  },
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
