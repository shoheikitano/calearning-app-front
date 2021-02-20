<template>
  <v-app>
    <Header/>
    <v-main class="background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header"
export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .background {
    background-color: #E6F2F0;
  }
</style>
