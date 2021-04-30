<template>
  <div>
    <div v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
      <div class="input-container">
        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
          <v-container>
            <div class="input-box">
              <div class="input-box_name">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="이름"
                  type="text"
                  required
                  solo
                />
              </div>
              <div class="input-box_password">
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="비밀번호"
                  type="password"
                  required
                  solo
                />
              </div>
            </div>
            <div class="input-box_content">
              <v-textarea
                v-model="content"
                auto-grow
                clearable
                solo
                label="글을 입력하세요"
                :hide-details="hideDetails"
                :success-messages="successMessages"
                :success="success"
                :rules="[v => !!v.trim() || '내용을 입력하세요.']"
                @input="onChangeTextarea"
              />
              <v-btn class="visitor-btn" type="submit">
                작성완료
              </v-btn>
            </div>
          </v-container>
        </v-form>
      </div>
      <comment-slide :post="mainPosts" :cols="3" />
    </div>

    <!-- 모바일 버전 -->
    <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
      <v-container class="pa-15">
        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="이름"
            type="text"
            required
            solo
          />

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="비밀번호"
            type="password"
            required
            solo
          />

          <v-textarea
            v-model="content"
            auto-grow
            clearable
            solo
            label="글을 입력하세요"
            :hide-details="hideDetails"
            :success-messages="successMessages"
            :success="success"
            :rules="[v => !!v.trim() || '내용을 입력하세요.']"
            @input="onChangeTextarea"
          />
          <v-container class="mobile-btn mt-3">
            <v-btn class="white--text " type="submit">
              작성완료
            </v-btn>
          </v-container>
        </v-form>
      </v-container>
      <comment-slide :post="mainPosts" :cols="12" />
    </div>
  </div>
</template>
<script>
import CommentSlide from "../components/CommentSlide.vue";

export default {
  components: { CommentSlide },
  layout: "visitor",
  fetch({ store }) {
    return store.dispatch("visitor/loadPost");
  },

  data() {
    return {
      name: "",
      password: "",
      content: "",
      nameRules: [v => !!v || "이름은 필수입니다."],
      passwordRules: [v => !!v || "비밀번호는 필수입니다."],
      valid: false,
      hideDetails: true,
      successMessages: "",
      success: false,
    };
  },
  computed: {
    mainPosts() {
      return this.$store.state.visitor.mainPosts;
    },
  },
  mounted() {
    document.documentElement.style.overflow = "auto";
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        console.log(this.name, this.content);
        this.$store
          .dispatch("visitor/write", {
            name: this.name,
            password: this.password,
            content: this.content,
          })
          .then(() => {
            this.name = "";
            this.password = "";
            this.content = "";
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    onChangeTextarea(value) {
      if (value.length) {
        this.hideDetails = true;
        this.success = false;
        this.successMessages = "";
      }
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
}
.input-box {
  width: 800px;
  display: flex;
  align-items: center;
  margin: 10px;
}
.input-box_name {
  margin-right: 20px;
  margin-left: 0px;
}
.input-box_content {
  display: flex;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 130px;
  width: 130px;
  padding: 0 16px;
  background: #419cac 0% 0% no-repeat padding-box;

  border-radius: 15px;
}

.visitor-btn {
  margin-left: 20px;
  color: white;
  font-size: 20px;
}

.visitor-btn:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 960px) {
  .mobile-btn {
    position: relative;
    transform: translate(0%);
  }
  .v-btn:not(.v-btn--round).v-size--default {
    height: 30px;
    width: 100px;
    padding: 0 16px;
    background: #419cac 0% 0% no-repeat padding-box;
    position: absolute;
    top: 50%;
    bottom: 0;
    right: 0%;
    margin: auto;

    border-radius: 10px;
  }
}
</style>
