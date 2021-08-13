<template>
  <v-container>
    <h1 class="logo text-center">Friends</h1>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="message"
              :append-outer-icon="message ? 'mdi-magnify' : ''"
              :prepend-icon="icon"
              filled
              clear-icon="mdi-close-circle"
              clearable
              label="Search"
              type="text"
              @click:append="toggleMarker"
              @click:append-outer="sendMessage"
              @click:prepend="changeIcon"
              @click:clear="clearMessage"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab @click="getUsers">Users</v-tab>
      <v-tab @click="getFollow($store.state.user.user_id)">Follow</v-tab>
      <v-tab @click="getFollower($store.state.user.user_id)">Follower</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.user_id"
            :cols="4"
          >
            <v-card
              class="mx-auto"
              max-width="434"
              tile
            >
              <v-img
                height="100%"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              >
                <v-row
                  align="end"
                  class="fill-height"
                >
                  <v-col
                    align-self="start"
                    class="pa-0"
                    cols="12"
                  >
                    <v-avatar
                      class="profile"
                      color="grey"
                      size="164"
                      tile
                    >
                      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="py-0">
                    <v-list-item
                      color="rgba(0, 0, 0, .4)"
                      dark
                    >
                      <v-list-item-content>
                        <v-list-item-title class="title">
                          {{card.user_name}}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{card.user_name}}</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-btn v-if="card.user_id_follow != $store.state.user.user_id" small color="secondary" dark @click="follow(card.user_id)">follow</v-btn>
                      <v-btn v-if="card.user_id_follow == $store.state.user.user_id" small color="blue-grey" dark @click="refollow(card.user_id)">refollow</v-btn>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
  export default {
    name: 'Friends',
    data: () => ({
      cards: null,
      password: 'Password',
      show: false,
      message: '',
      marker: true,
      iconIndex: 0,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
      tab_f: 1
    }),
    computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
    },

    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
      async getFollow() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        params.message = this.message
        let response = await this.axios.get('http://localhost:8888/api/getFollow',{
          params
        })

        this.cards = response.data

        this.tab_f == 2
      },
      async getFollower() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        params.message = this.message
        let response = await this.axios.get('http://localhost:8888/api/getFollower',{
          params
        })

        this.cards = response.data

        this.tab_f == 3
      },
      async getUsers() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        params.message = this.message
        let response = await this.axios.get('http://localhost:8888/api/getUsers',{
          params
        })

        this.cards = response.data

        this.tab_f == 1
      },
      async follow(user_id) {
        await this.axios.post('http://localhost:8888/api/follow', {
          user_id_follow: this.$store.state.user.user_id,
          user_id: user_id,
        })
        if (this.tab_f == 1) {
          this.getUsers()
        } else if (this.tab_f == 2) {
          this.getFollow()
        } else if (this.tab_f == 3) {
          this.getFollower()
        }
        
        //this.dialog = false
        //this.reload()
      },
      async refollow(user_id) {
        await this.axios.post('http://localhost:8888/api/refollow', {
          user_id_follow: this.$store.state.user.user_id,
          user_id: user_id,
        })
        if (this.tab_f == 1) {
          this.getUsers()
        } else if (this.tab_f == 2) {
          this.getFollow()
        } else if (this.tab_f == 3) {
          this.getFollower()
        }
        //this.dialog = false
        //this.reload()
      },
      reload() {
        this.$router.go({path: this.$router.currentRoute.path, force: true});
      },
    },
    mounted() {
      this.getUsers()
    }
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
