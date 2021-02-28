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
      <v-tab>Follow</v-tab>
      <v-tab>Follower</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
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
                          Marcus Obrien
                        </v-list-item-title>
                        <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                      </v-list-item-content>
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
      cards: [
        { title: 'Pre-fab homes', icon: 'mdi-twitter', content: 'アイウエオかきくけこ', username: 'kitanoshohei',like: '200',share: '40'},
        { title: 'Pre-fab homes', icon: 'mdi-twitter', content: 'アイウエオかきくけこ', username: 'kitanoshohei',like: '200',share: '40'},
        { title: 'Pre-fab homes', icon: 'mdi-twitter', content: 'アイウエオかきくけこ', username: 'kitanoshohei',like: '200',share: '40'},
        { title: 'Pre-fab homes', icon: 'mdi-twitter', content: 'アイウエオかきくけこ', username: 'kitanoshohei',like: '200',share: '40'},
        { title: 'Pre-fab homes', icon: 'mdi-twitter', content: 'アイウエオかきくけこ', username: 'kitanoshohei',like: '200',share: '40'},
        { title: 'Pre-fab homes', icon: 'mdi-twitter', content: 'アイウエオかきくけこ', username: 'kitanoshohei',like: '200',share: '40'},
        { title: 'Pre-fab homes', icon: 'mdi-twitter', content: 'アイウエオかきくけこ', username: 'kitanoshohei',like: '200',share: '40'},
      ],
      password: 'Password',
      show: false,
      message: 'Hey!',
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
