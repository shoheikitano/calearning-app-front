<template>
  <v-container>
    <v-row>
      <v-col>
        <br>
        <br>
        <v-img :src="require('../../public/calenderimage.jpg')" max-width="600"></v-img>
        <router-link to="/list">Go to list</router-link>
      </v-col>
      <v-col>
        <div class="home-comment">
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <h3>カレンダーを使って、</h3>
          <h3>学んだ事を蓄積していこう！！！</h3>
          <Signup/>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Signup from "./Signup"
  export default {
    name: 'Home',
    components: {
      Signup,
    },
  }
</script>
