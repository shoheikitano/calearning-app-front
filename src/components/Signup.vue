<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1 class="logo">Sign up</h1>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-row>
        <v-col>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="ユーザー名" v-model = "user_name" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="メールアドレス" v-model = "mail_address" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="パスワード" type="password" v-model = "password" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-select item-text="name" :items="jobs" item-value="id" v-model = "job_id" label="職業"></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-col>
        <v-col>
          <v-textarea label="自己紹介" v-model = "profile"></v-textarea>
          <v-text-field label="アイコン画像" type="file" required></v-text-field>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-container grid-list-md>
          <v-btn block color="success" dark @click="register">登録</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Signup',
  data: () => ({
    user_name: '',
    mail_address: '',
    password: '',
    job_id: '',
    profile: '',
    errmsg: '',
    dialog: false,
    jobs: [
      {
        id: 1,
        name: 'Webエンジニア'
      },
      {
        id: 2,
        name: 'システムエンジニア'
      }
    ]
  }),
  methods: {
    async register () {
      // authストアのresigterアクションを呼び出す
      await this.$store.dispatch('register', {
        user_name: this.user_name,
        mail_address: this.mail_address,
        password: this.password,
        profile: this.profile,
        job_id: this.job_id,
      })
      // トップページに移動する
      this.$router.push('/calender')
    },
  },
};
</script>

<style scoped>
  .logo {
    color: #4ECC82;
    font-family: "SignPainter";
    text-transform: capitalize;
    font-size: xx-large;
  }
</style>