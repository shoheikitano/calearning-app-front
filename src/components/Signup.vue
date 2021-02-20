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
                  <v-text-field label="ユーザー名" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="メールアドレス" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="パスワード" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-select item-text="name" :items="jobs" item-value="id" label="職業"></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-col>
        <v-col>
          <v-textarea label="自己紹介"></v-textarea>
          <v-text-field label="アイコン画像" type="file" required></v-text-field>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-container grid-list-md>
          <v-btn block color="success" dark @click="dialog = false">登録</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
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
    };
  }
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