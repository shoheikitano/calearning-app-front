<template>
  <v-container>
    <h1 class="logo text-center">Ranking</h1>
    <Showlearn @my-click='dialog1 = $event' :dialog1 = this.dialog1 :event = this.event :title = this.title :detail = this.detail :category_id = this.category_id :language_id = this.language_id :color = this.color />
    <Comment @my-click='dialog2 = $event' :dialog2 = this.dialog2 :event = this.event :comment_id = this.comment_id :learn_id = this.learn_id :comment_content = this.comment_content />
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
              @click:append-outer="getLearnsForRanking"
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
      <v-tab @click="getLearnsForRanking">MINE</v-tab>
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
                  @click="showEvent(card)"
                >
                  {{ card.likes_count }}{{ card.title }}
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
  import Showlearn from "./Showlearn"
  import Comment from "./Comment"
  export default {
    name: 'Ranking',
    components: {
      Showlearn,
      Comment,
    },
    data: () => ({
      password: 'Password',
      show: false,
      message: '',
      event: '',
      marker: true,
      iconIndex: 0,
      dialog1: false,
      dialog2: false,
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
      title: '',
      detail: '',
      category_id: '',
      language_id: '',
      color: '',
      comment_content: '',
      comment_id: '',
      tab_f: 1,
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
      showEvent(card) {
        this.dialog1 = true
        this.learn_id = card.learn_id
        this.getLearn()
      },
      showComment(card) {
        this.dialog2 = true
        this.learn_id = card.learn_id
        this.comment_id = card.comment_id
        this.comment_content = card.comment_content
      },
      async getLearn () {
        let params = {}
        params.learn_id = this.learn_id
        let event = await this.axios.get('http://localhost:8888/api/getLearn',{ params })
        this.event = event.data
        this.title = event.data.title
        this.detail = event.data.detail
        this.category_id = event.data.category_id
        this.language_id = event.data.language_id
        this.color = event.data.color
      },
      async getLearnsForRanking() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        params.message = this.message
        let response = await this.axios.get('http://localhost:8888/api/learnsForRanking',{
          params
        })

        this.learns = response.data

        this.tab_f == 1

        this.dialog1 = false
        this.dialog2 = false
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

        this.dialog1 = false
        this.dialog2 = false
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

        this.dialog1 = false
        this.dialog2 = false
      },
    },
    mounted() {
      this.getLearnsForRanking()
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
