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
                    <v-list-item-title>{{ card.user_id }}</v-list-item-title>
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
