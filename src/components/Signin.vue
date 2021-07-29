<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn outlined color="#4ECC82" v-on="on">Sign in</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h1 class="logo">Sign in</h1>
        <v-spacer></v-spacer>
        <v-btn icon @click="cancel">
          <v-icon>×</v-icon>
        </v-btn>
      </v-card-title>
      {{errmsg}}
      <v-form>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="ユーザーID" v-model = "user_id" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="パスワード" v-model = "password" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-container grid-list-md>
            <v-btn block color="success" dark @click="login">ログイン</v-btn>
          </v-container>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'Signin',
    data: () => ({
      user_id: '',
      password: '',
      errmsg: '',
      dialog: false,
    }),
    methods: {
      cancel () {
        this.user_id = ''
        this.password = ''
        this.errmsg = ''
        this.dialog = false
      },
      async register () {
        // authストアのresigterアクションを呼び出す
        await this.$store.dispatch('register', {
          name: this.bbbb,
          thumbnail: this.cccc,
          sort: this.dddd,
        })

        // トップページに移動する
        this.$router.push('/')
      },
      async login () {
        // authストアのloginアクションを呼び出す
        await this.$store.dispatch('login', {
          user_id: this.user_id,
          password: this.password,
        })

        if (this.$store.state.user.user_id == null) {
          this.errmsg = 'ユーザーID、またはパスワードが間違っています'
        } else {
          this.errmsg = ''
          this.cancel()
          this.$router.push('/calender')
        }
        // トップページに移動する
        
      },
      async logout () {
        await this.$store.dispatch('logout')

        this.$router.push('/')
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
