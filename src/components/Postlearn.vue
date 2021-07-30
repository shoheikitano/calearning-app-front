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
              <v-text-field label="タイトル" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="パスワード" type="password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container grid-list-md>
          <v-btn block color="success" dark @click="dialog = false">記録</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Postlearn',
  data() {
    return {
      dialog: false
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
