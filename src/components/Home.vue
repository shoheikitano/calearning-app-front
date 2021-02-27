<template>
  <v-container>
    <div
      v-ripple="{ center: true }"
      class="text-center logo"
    >
      Calearning
    </div>
    <v-row>
      <v-col>
        <br>
        <br>
        <v-img :src="require('../../public/calenderimage.jpg')" max-width="600"></v-img>
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
          <h2>カレンダーを使って、</h2>
          <h2>学んだ事を蓄積していこう！！！</h2>
          <v-btn to="/signup" outlined color="#4ECC82" >Sign up</v-btn>
        </div>
      </v-col>
    </v-row>
    <div
      v-ripple="{ center: true }"
      class="text-center logo"
    >
      Detail
    </div>
    <div
      v-ripple="{ center: true }"
      class="text-center logo"
    >
      Manual
    </div>
    <div
      v-ripple="{ center: true }"
      class="text-center logo"
    >
      Learns
    </div>   
    <div
      v-ripple="{ center: true }"
      class="text-center logo"
    >
      Ranking
    </div> 
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    components: {
    },
  }
</script>

<style scoped>
  .logo {
    color: #4ECC82;
    font-family: "SignPainter";
    text-transform: capitalize;
    font-size: xx-large;
  }
</style>
