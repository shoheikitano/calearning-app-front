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
              @click:append-outer="getLearns"
              @click:prepend="changeIcon"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab @click="getLearns">MINE</v-tab>
      <v-tab @click="getFollowLearns">Friends</v-tab>
      <v-tab @click="getAllLearns">All</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in learns"
            :key="card.learn_id"
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
                  {{ card.title }}
                </v-icon>
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                {{ card.detail }}
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
                    <v-list-item-title>{{ card.user_name }}</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                    align="center"
                    justify="end"
                  >
                    <v-btn
                      icon
                      color="pink"
                      v-if="card.like_id != null"
                      @click="reLike(card.learn_id)"
                    >
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      color="blue-grey"
                      v-if="card.like_id == null"
                      @click="like(card.learn_id)"
                    >
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      color="indigo"
                      v-if="card.retweet_id != null"
                    >
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      color="blue-grey"
                      v-if="card.retweet_id == null"
                    >
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      color="primary"
                      v-if="card.comment_id != null"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      color="blue-grey"
                      v-if="card.comment_id == null"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
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
      learns: '',
      bbbb: '',
      cccc: '',
      dddd: '',
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
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
      async getLearns() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        params.message = this.message
        let response = await this.axios.get('http://localhost:8888/api/learns',{
          params
        })

        this.learns = response.data

        this.tab_f == 1
      },

      async getFollowLearns() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        params.message = this.message
        let response = await this.axios.get('http://localhost:8888/api/followlearns',{
          params
        })

        this.learns = response.data

        this.tab_f == 2
      },

      async getAllLearns() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        params.message = this.message
        let response = await this.axios.get('http://localhost:8888/api/alllearns',{
          params
        })

        this.learns = response.data

        this.tab_f == 3
      },
      async like(learn_id) {
        await this.axios.post('http://localhost:8888/api/like', {
          user_id: this.$store.state.user.user_id,
          learn_id: learn_id,
        })
        if (this.tab_f == 1) {
          this.getLearns()
        } else if (this.tab_f == 2) {
          this.getFollowLearns()
        } else if (this.tab_f == 3) {
          this.getAllLearns()
        }
        
        //this.dialog = false
        //this.reload()
      },
      async reLike(learn_id) {
        await this.axios.post('http://localhost:8888/api/relike', {
          user_id: this.$store.state.user.user_id,
          learn_id: learn_id,
        })
        if (this.tab_f == 1) {
          this.getLearns()
        } else if (this.tab_f == 2) {
          this.getFollowLearns()
        } else if (this.tab_f == 3) {
          this.getAllLearns()
        }
        //this.dialog = false
        //this.reload()
      },
    },
    mounted() {
      this.getLearns()
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
