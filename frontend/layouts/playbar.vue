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

    <v-container id="playbar">
      <v-card id="playbar-wrapper" :height="height">
        <div v-show="pageIndex !== '6'" class="playbar-icon">
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

        <div v-show="pageIndex === '6'" class="playbar-icon">
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
        <see-art-menu />
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import SeeArtMenu from "~/components/SeeArtMenu.vue";

export default {
  components: { SeeArtMenu },
  data() {
    return {};
  },
  computed: {
    pageIndex() {
      return this.$route.params.id;
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 60;
        case "sm":
          return 60;
        case "md":
          return 60;
        case "lg":
          return 70;
        default:
          return 80;
      }
    },
  },
  mounted() {},
  methods: {
    onClickMenu() {
      console.log("hello~");
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
.menu-icon {
  cursor: pointer;
  margin: 0px 0px;
  position: absolute;
  right: 5%;
  border-style: none;
  background-color: none;
}
.menu-icon_span {
  margin-left: 15px;
  font-size: 18px;
  transform: translateY(15%);
}
@media screen and (max-width: 750px) {
  .menu-icon {
    border: none;
    margin: 0px 0px;
    position: absolute;
    right: 5%;
    font-size: 14px;
  }
  .menu-icon_span {
    display: none;
  }
  .playbar-icon {
    font-size: 14px;
    text-decoration: none;
    padding: 0;
    margin: 0px 10px;
    color: #fff;
  }
}
</style>
