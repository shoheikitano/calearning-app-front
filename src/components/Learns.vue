<template>
  <v-container>
    <h1 class="logo text-center">Learns</h1>
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
    <input type="text" v-model="bbbb" />
    <input type="text" v-model="cccc" />
    <input type="text" v-model="dddd" />
    <button @click="register">test</button>
    {{appNumber}}
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab>MINE</v-tab>
      <v-tab>Friends</v-tab>
      <v-tab>All</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in aaaa"
            :key="card.id"
            :cols="4"
          >
            <v-card
              class="mx-auto"
              color="#4ECC82"
              dark
              max-width="400"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                >
                  {{ card.name }}
                </v-icon>
                <span class="title font-weight-light">{{ card.name }}</span>
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                {{ card.name }}
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ card.name }}</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                    align="center"
                    justify="end"
                  >
                    <v-icon class="mr-1">
                      mdi-heart
                    </v-icon>
                    <span class="subheading mr-2">{{ card.name }}</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1">
                      mdi-share-variant
                    </v-icon>
                    <span class="subheading">{{ card.name }}</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
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
    name: 'Learns',
    data: () => ({

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
      aaaa: '',
      bbbb: '',
      cccc: '',
      dddd: '',
    }),
    computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
      appNumber() {
        return this.$store.state.user;
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
      async getHobbies() {
        let response = await this.axios.get('http://localhost:8888/api/categories')
        // let json = await response.json()
        // let hobs = json.hobbies
        // let hobbies = []
        // for (const i of hobs) {
        //   hobbies.push({"name": i.name, "id": i.id})
        // }
        this.aaaa = response.data
      },
      async addCategory() {
        let result = await this.axios.post('http://localhost:8888/api/categories/1', {
          name: this.bbbb,
          thumbnail: this.cccc,
          sort: this.dddd,
        })
        // let json = await response.json()
        // let hobs = json.hobbies
        // let hobbies = []
        // for (const i of hobs) {
        //   hobbies.push({"name": i.name, "id": i.id})
        // }
        console.log(result);
      },
      async register () {
        // authストアのresigterアクションを呼び出す
        await this.$store.dispatch('register', {
          name: this.bbbb,
          thumbnail: this.cccc,
          sort: this.dddd,
        })

        // トップページに移動する
        this.$router.push('/')
      },
      async login () {
        // authストアのloginアクションを呼び出す
        await this.$store.dispatch('login', this.loginForm)

        // トップページに移動する
        this.$router.push('/')
      },
      async logout () {
        await this.$store.dispatch('logout')

        this.$router.push('/')
      },
    },
    mounted() {
      this.getHobbies()
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
