<template>
  <v-dialog v-model="dialog" max-width="600px">
  <template v-slot:activator="{ on }">
    <v-btn plain v-on="on">{{friends_user_name}}</v-btn>
  </template>
  <v-app>
    <v-btn icon @click="dialog = false">
      <v-icon>×</v-icon>
    </v-btn>
    <v-layout row>
      <v-flex md3>
        <v-app>
          <v-container>
            <v-flex>
              <v-card class="ma-5 text-center mt-12" shaped elevation="10">
                <v-avatar class="mt-n7" size="60" elevation="10">
                  <img src="https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png" />
                </v-avatar>
                <v-card-title class="layout justify-center">{{profile.user_name}}</v-card-title>
                <v-card-subtitle class="layout justify-center">{{profile.birthday}}</v-card-subtitle>
                <Signin />
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1">Learns</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Likes</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>{{learns_count}}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{likes_count}}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex>
              <v-list color="transparent" class="text-center">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Friends</v-list-item-title>
                  <v-list-item-subtitle>{{friends_count}}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
              <v-card class="ma-5" shaped elevation="10">
                <v-list three-line>
                  <template v-for="(item) in items">

                    <v-list-item
                      :key="item.title"
                    >
                      <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-card>
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
      <v-flex md9>
        <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="rounded">
          <v-container>
            <v-flex>
              <v-list class="mt-5">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Least Learns</v-list-item-title>
                  <v-list-item-action>
                    <v-btn class="ma-2" tile outlined color="cyan darken-1">
                      <v-icon left>fas fa-eye</v-icon>See All
                    </v-btn>
                  </v-list-item-action>
                  
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
              <v-row no-gutters>
                  <v-col cols="12" md="4" >
                   <v-row>
                     <v-col cols="12" md="2">
                        <v-card height="80px" width="10px" color="green"></v-card>
                     </v-col>
                     <v-col cols="12" md="10">
                       <v-list two-line subheader class="ml-n8">
                  <v-list-item>
                    <v-list-item-content>
                       <v-list-item-subtitle>21 Jul, 2019</v-list-item-subtitle>
                      <v-list-item-title>Hypertensive crisis</v-list-item-title>
                      <v-list-item-subtitle>Ongoing tratment</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
                  <v-col cols="12" md="4">
                     <v-row>
                     <v-col cols="12" md="2">
                        <v-card height="80px" width="10px" color="red"></v-card>
                     </v-col>
                     <v-col cols="12" md="10">
                       <v-list two-line subheader class="ml-n8">
                  <v-list-item>
                    <v-list-item-content>
                       <v-list-item-subtitle>18 Jul, 2019</v-list-item-subtitle>
                      <v-list-item-title>Osteoporosis</v-list-item-title>
                      <v-list-item-subtitle>Incurable</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-row>
                     <v-col cols="12" md="2">
                        <v-card height="80px" width="10px" color="grey"></v-card>
                     </v-col>
                     <v-col cols="12" md="10">
                       <v-list two-line subheader class="ml-n8">
                  <v-list-item>
                    <v-list-item-content>
                       <v-list-item-subtitle>21 Jul, 2019</v-list-item-subtitle>
                      <v-list-item-title>Hypertensive crisis</v-list-item-title>
                      <v-list-item-subtitle>Examiniations</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
              </v-row>
            </v-flex>
             <v-flex>
              <v-list class="mt-5">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Learns Post graph</v-list-item-title>
                  <v-item-content>
                        <v-btn class="mr-1" outlined color="cyan darken-1">D</v-btn>
                  </v-item-content>
                   <v-item-content>
                        <v-btn class="mr-1" outlined color="cyan darken-1">W</v-btn>
                  </v-item-content>
                   <v-item-content>
                        <v-btn class="mr-1" outlined color="cyan darken-1">M</v-btn>
                  </v-item-content>
                   <v-item-content>
                        <v-btn outlined color="cyan darken-1">Y</v-btn>
                  </v-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
          
                <v-sparkline
                  :value="value"
                  :gradient="gradient"
                  :smooth="radius || false"
                  :padding="padding"
                  :line-width="width"
                  :stroke-linecap="lineCap"
                  :gradient-direction="gradientDirection"
                  :fill="fill"
                  :type="type"
                  :auto-line-width="autoLineWidth"
                  auto-draw
                ></v-sparkline>

            </v-flex>
            <v-flex class="mt-5">
              <v-list class="ml-5">
                <v-list-item>
                  <v-list-item-avatar color="cyan darken-1" size="20px"></v-list-item-avatar>
                  <v-list-item-title>Average</v-list-item-title>
                  <v-list-item-avatar color="cyan darken-1" size="20px"></v-list-item-avatar>
                  <v-list-item-title class="ml-5">My Data</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
                
              <v-list class="ml-5">
                <v-list-item>
                  <v-list-item-title class="cyan--text text--darken-1">Nearest Treatment</v-list-item-title>
                   <v-list-item-title class="cyan--text text--darken-1">Advice</v-list-item-title>
                  
                </v-list-item>
              </v-list>
            
            </v-flex>
            <v-flex class="ml-8">
              
                  <v-row >
                    <div>
                      <v-date-picker
                        v-model="date2"
                        :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                        :events="functionEvents"
                      ></v-date-picker>
                    </div>
                    <div class="ml-10">
                      <v-list>
                        <v-list-item>
                          <v-list-item-title>The Clinical service is consulted and available 
                            on a 24-Houre</v-list-item-title>

                        </v-list-item>
                      </v-list>
                    </div>
                  </v-row>

            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
    </v-layout>
  </v-app>
  </v-dialog>
</template>
<script>
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
import Signin from "./Signin"
export default {
  name: 'FollowProfile',
  components: {
    Signin,
  },
  props: ['friends_user_id', 'friends_user_name'],
  data: () => ({
    width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      arrayEvents: null,
      date2: new Date().toISOString().substr(0, 10),
      profile: null,
      learns_count: null,
      likes_count: null,
      friends_count: null,
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
      dialog: false,
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      }),
      this.getProfile()
      this.getLearnsCount()
      this.getLikesCount()
      this.getFriendsCount()
    },
    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },
      async getProfile() {
        let params = {}
        params.user_id = this.friends_user_id
        let response = await this.axios.get('http://localhost:8888/api/getProfile',{
          params
        })
        this.profile = response.data
      },
      async getLearnsCount() {
        let params = {}
        params.user_id = this.friends_user_id
        let response = await this.axios.get('http://localhost:8888/api/getLearnsCount',{
          params
        })
        this.learns_count = response.data.learns_count
      },
      async getLikesCount() {
        let params = {}
        params.user_id = this.friends_user_id
        let response = await this.axios.get('http://localhost:8888/api/getLikesCount',{
          params
        })
        this.likes_count = response.data.likes_count
      },
      async getFriendsCount() {
        let params = {}
        params.user_id = this.friends_user_id
        let response = await this.axios.get('http://localhost:8888/api/getFriendsCount',{
          params
        })
        this.friends_count = response.data.friends_count
      },
    },
};
</script>
<style scoped>
.rounded {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>
