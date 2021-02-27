<template>
  <v-app>
    <Header />
    <Sidebar/>

    <v-content class="background">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

export default {
  name: 'App',

  components: {
    Header,
    Sidebar,
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
