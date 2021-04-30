<template>
  <v-carousel>
    <v-carousel-item v-for="(p, i) in post" :key="i">
      <v-sheet color="primary" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="comment-container">
            <v-row justify="center" no-gutters dense>
              <v-col v-for="p in post" :key="p.id" :cols="cols" class="ma-0">
                <comment :comment="p" />
              </v-col>
            </v-row>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  components: { Comment },
  props: {
    post: {
      type: Array,
      require: true,
    },
    cols: {
      type: Number,
      require: true,
    },
  },
  computed: {
    postLength() {
      return this.$store.state.visitor.postLength;
    },
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
</style>
