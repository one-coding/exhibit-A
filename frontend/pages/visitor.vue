<template>
  <div>
    <div class="input-container">
      <input type="text" />
    </div>

    <div class="comment-container">
      <v-main>
        <v-container :style="{ width: '900px', marginTop: '100px' }">
          <v-row>
            <v-col v-for="n in 12" :key="n">
              <v-card
                height="200"
                width="200"
                class="mx-auto"
                :style="{ borderRadius: '20px' }"
              >
                <span>홍동교</span>
                <span>{{ n }}</span>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>
  </div>
</template>

<script>
export default {
  layout: "visitor",
};
</script>

<style>
.input-container {
  width: 100%;
  height: 40vh;
}
.comment-container {
  display: block;
  width: 100%;
  height: 110vh;
  background: #36575d 0% 0% no-repeat padding-box;
}
.comment-group {
  width: 1000px;
  height: 740px;
  background: red;
  display: inline-block;
}
.comment-box {
  width: 200px;
  height: 200px;
  background: #f9f9f9 0% 0% no-repeat padding-box;
  border-radius: 20px;
}
.col-md-6 {
}
</style>
