<template>
  <v-dialog v-model="dialog1" max-width="600px">
    <v-card>
      <v-card-title>
        <h1 class="logo">Learn</h1>
        <v-spacer></v-spacer>
        <v-btn icon @click="cancel()">
          <v-icon>×</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field v-if="this.$store.state.user.user_id == this.event.user_id" label="タイトル" v-model="title" required></v-text-field>
              <v-text-field v-if="this.$store.state.user.user_id != this.event.user_id" label="タイトル" v-model="title" disabled></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-if="this.$store.state.user.user_id == this.event.user_id" label="詳細" v-model="detail" required></v-text-field>
              <v-text-field v-if="this.$store.state.user.user_id != this.event.user_id" label="詳細" v-model="detail" disabled></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-if="this.$store.state.user.user_id == this.event.user_id" label="カテゴリー" v-model="category_id" required></v-text-field>
              <v-text-field v-if="this.$store.state.user.user_id != this.event.user_id" label="カテゴリー" v-model="category_id" disabled></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-if="this.$store.state.user.user_id == this.event.user_id" label="言語" v-model="language_id" required></v-text-field>
              <v-text-field v-if="this.$store.state.user.user_id != this.event.user_id" label="言語" v-model="language_id" disabled></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-if="this.$store.state.user.user_id == this.event.user_id" label="色" v-model="color" required></v-text-field>
              <v-text-field v-if="this.$store.state.user.user_id != this.event.user_id" label="色" v-model="color" disabled></v-text-field>
            </v-flex>
            <v-flex xs12>
              <label slot="before" for="startDate">開始時間(変更前) {{this.event.learn_datetime_start}}</label>
              <datetime v-if="this.$store.state.user.user_id == this.event.user_id" v-model="learn_datetime_start" type="datetime" format="yyyy-MM-dd HH:mm:ss" input-id="startDate">
                <label slot="before" for="startDate">開始時間(変更後)</label>
              </datetime>
              <br/>
              <label slot="before" for="startDate">終了時間(変更前) {{this.event.learn_datetime_end}}</label>
              <datetime v-if="this.$store.state.user.user_id == this.event.user_id" v-model="learn_datetime_end" type="datetime" format="yyyy-MM-dd HH:mm:ss" input-id="endDate">
                <label slot="before" for="endDate">終了時間(変更後)</label>
              </datetime>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container grid-list-md>
          <v-btn v-if="this.$store.state.user.user_id == this.event.user_id" color="success" @click="updLearn" dark>編集</v-btn>
          <v-btn v-if="this.$store.state.user.user_id == this.event.user_id" color="error" @click="delLearn" dark>削除</v-btn>
          <v-btn v-if="this.$store.state.user.user_id != this.event.user_id" depressed disabled>編集</v-btn>
          <v-btn v-if="this.$store.state.user.user_id != this.event.user_id" depressed disabled>削除</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Datetime } from 'vue-datetime';
export default {
  name: 'Showlearn',
  components: {
    datetime: Datetime
  },
  props: ['event', 'dialog1', 'title', 'detail', 'category_id', 'language_id', 'color'],
  data: () => ({
    learn_datetime_start: '',
    learn_datetime_end: '',
  }),
  methods: {
    async updLearn() {
      await this.axios.post('http://localhost:8888/api/updLearn', {
        learn_id: this.event.learn_id,
        title: this.title,
        detail: this.detail,
        user_id: this.$store.state.user.user_id,
        category_id: this.category_id,
        language_id: this.language_id,
        learn_datetime_start: this.learn_datetime_start,
        learn_datetime_end: this.learn_datetime_end,
        color: this.color,
      })
        
      this.dialog1 = false
      this.reload()
    },

    async delLearn() {
      await this.axios.post('http://localhost:8888/api/delLearn', {
        learn_id: this.event.learn_id,
      })
        
      this.dialog1 = false
      this.reload()
    },
    reload() {
        this.$router.go({path: this.$router.currentRoute.path, force: true});
    },
    cancel() {
      this.$emit("my-click", false);
    }
  },
  mounted() {
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
