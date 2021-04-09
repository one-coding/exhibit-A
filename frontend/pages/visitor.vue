<template>
  <div>
    <div class="input-container">
      <v-form v-model="valid" ref="form" @submit.prevent="onSubmitForm">
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
              ></v-text-field>
            </div>
            <div class="input-box_password">
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="비밀번호"
                type="password"
                required
                solo
              ></v-text-field>
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
            <v-btn class="visitor-btn" type="submit">작성완료</v-btn>
          </div>
        </v-container>
      </v-form>
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
    </div>
  </div>
</template>

<script>
export default {
  layout: "visitor",
  computed: {
    changeName() {
      return this.$store.state.visitor.name;
    },
    changeContent() {
      return this.$store.state.visitor.content;
    },
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
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        console.log("submit!");
        this.$store.dispatch("visitor/write", {
          name: this.name,
          password: this.password,
          content: this.content,
        });
        this.name = "";
        this.password = "";
        this.content = "";
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
  mounted() {
    document.documentElement.style.overflow = "auto";
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

.comment-container {
  display: block;
  width: 100%;
  height: 110vh;
  background: #36575d 0% 0% no-repeat padding-box;
}
.comment-group {
  width: 1000px;
  height: 740px;
  display: inline-block;
  padding: 20px;
}
.comment-box {
  width: 180px;
  height: 180px;
  padding: 20px;
  background: #f9f9f9 0% 0% no-repeat padding-box;
  border-radius: 20px;
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
