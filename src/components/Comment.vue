<template>
  <v-dialog v-model="dialog2" max-width="600px">
    <v-card>
      <v-card-title>
        <h1 class="logo">Comment</h1>
        <v-spacer></v-spacer>
        <v-btn icon @click="cancel()">
          <v-icon>×</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-textarea label="コメント" v-model="comment_content"></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container grid-list-md>
          <v-btn v-if="this.comment_id == null" color="success" @click="insComment" dark>登録</v-btn>
          <v-btn v-if="this.comment_id != null" color="error" @click="delComment" dark>削除</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Comment',
  props: ['event', 'dialog2', 'comment_content', 'learn_id', 'comment_id'],
  data: () => ({
  }),
  methods: {
    async insComment() {
      await this.axios.post('http://localhost:8888/api/insComment', {
        learn_id: this.learn_id,
        user_id: this.$store.state.user.user_id,
        comment_content: this.comment_content,
      })
        
      this.dialog2 = false
      this.reload()
    },

    async delComment() {
      await this.axios.post('http://localhost:8888/api/delComment', {
        comment_id: this.comment_id,
      })
        
      this.dialog2 = false
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
