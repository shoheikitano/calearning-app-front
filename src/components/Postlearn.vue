<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn outlined color="#4ECC82" v-on="on">Post learn</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h1 class="logo">Postlearn</h1>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon>×</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="タイトル" v-model="title" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="詳細" v-model="detail" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="カテゴリー" v-model="category_id" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="言語" v-model="language_id" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <datetime v-model="learn_datetime_start" type="datetime" format="yyyy-MM-dd HH:mm:ss" input-id="startDate">
                <label slot="before" for="startDate">開始時間</label>
              </datetime>
              <datetime v-model="learn_datetime_end" type="datetime" format="yyyy-MM-dd HH:mm:ss" input-id="endDate">
                <label slot="before" for="endDate">終了時間</label>
              </datetime>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container grid-list-md>
          <v-btn block color="success" dark @click="postLearn">記録</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Datetime } from 'vue-datetime';
export default {
  name: 'Postlearn',
  components: {
    datetime: Datetime
  },
  data: () => ({
    title: '',
    detail: '',
    category_id: '',
    language_id: '',
    learn_datetime_start: '',
    learn_datetime_end: '',
    dialog: false,
  }),
  methods: {
    async postLearn() {
      await this.axios.post('http://localhost:8888/api/learn', {
        title: this.title,
        detail: this.detail,
        user_id: this.$store.state.user.user_id,
        category_id: this.category_id,
        language_id: this.language_id,
        learn_datetime_start: this.learn_datetime_start,
        learn_datetime_end: this.learn_datetime_end,
      })
        
      this.dialog = false
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
