<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light calearning-logo">Calaerning</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="font-weight-light calearning-logo">Detail</span>
    <v-spacer></v-spacer>
    <span class="font-weight-light calearning-logo">Manual</span>
    <v-spacer></v-spacer>
    <span class="font-weight-light calearning-logo">Learns</span>
    <v-spacer></v-spacer>
    <span class="font-weight-light calearning-logo">Ranking</span>
    <v-spacer></v-spacer>
    <Signin />
    <v-btn to="/signup" outlined color="#4ECC82" >Sign up</v-btn>
    <v-spacer></v-spacer>
    <v-icon color="#4ECC82">mdi-magnify</v-icon>
    <v-icon color="#4ECC82">mdi-bell</v-icon>
    <v-icon color="#4ECC82">mdi-account</v-icon>
  </v-app-bar>
</template>

<script>
  import Signin from "./Signin"
  export default {
    name: 'Header',

    components: {
      Signin,
    },

  }
</script>

<style>
  .calearning-logo {
    color: #4ECC82;
    font-family: "SignPainter";
    text-transform: capitalize;
  }

</style>
