<template>
      <v-navigation-drawer
        app
        permanent
        expand-on-hover
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Shohei Kitano
              </v-list-item-title>
              <v-list-item-subtitle>sample@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="logo">mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/calender" class="logo">Calearning</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="logo">mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/learns" class="logo">Learns</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="logo">mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/ranking" class="logo">Ranking</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="logo">mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/profile" class="logo">Profile</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="logo">mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="logo">Remainder</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="logo">mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="logo">Friends</v-list-item-title>
          </v-list-item>
        </v-list>
        <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
        </template>
      </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Sidebar',

    components: {
    
    },

  }
</script>

<style scoped>
  .logo {
    color: #4ECC82;
    font-family: "SignPainter";
    text-transform: capitalize;
  }
</style>
