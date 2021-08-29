<template>
  <v-app>
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
                        <v-list-item-title v-html="item.user_name"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.profile"></v-list-item-subtitle>
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
                      <v-list-item-subtitle>{{this.learns[0].learn_datetime_start}}</v-list-item-subtitle>
                      <v-list-item-title>{{this.learns[0].title}}</v-list-item-title>
                      <v-list-item-subtitle>{{this.learns[0].detail}}</v-list-item-subtitle>
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
                      <v-list-item-subtitle>{{this.learns[1].learn_datetime_start}}</v-list-item-subtitle>
                      <v-list-item-title>{{this.learns[2].title}}</v-list-item-title>
                      <v-list-item-subtitle>{{this.learns[3].detail}}</v-list-item-subtitle>
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
                      <v-list-item-subtitle>{{this.learns[3].learn_datetime_start}}</v-list-item-subtitle>
                      <v-list-item-title>{{this.learns[3].title}}</v-list-item-title>
                      <v-list-item-subtitle>{{this.learns[3].detail}}</v-list-item-subtitle>
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
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
                <v-sparkline
                  :labels="labels"
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
          </v-container>
        </v-app>
      </v-flex>
    </v-layout>
  </v-app>
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
  name: 'Profile',
  components: {
    Signin,
  },
  data: () => ({
    width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [],
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
      items: '',
      learns: '',
      labels: [],
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  mounted () {
      this.getProfile()
      this.getLearnsCount()
      this.getLikesCount()
      this.getFriendsCount()
      this.getFriends()
      this.getLearns()
      var today = new Date()
      this.labels.push(this.formatDate(today))
      this.getLearnsCountInDate(this.formatDate(today))

      today.setDate(today.getDate() + 1);
      this.labels.push(this.formatDate(today))
      this.getLearnsCountInDate(this.formatDate(today))

      today.setDate(today.getDate() + 1);
      this.labels.push(this.formatDate(today))
      this.getLearnsCountInDate(this.formatDate(today))

      today.setDate(today.getDate() + 1);
      this.labels.push(this.formatDate(today))
      this.getLearnsCountInDate(this.formatDate(today))

      today.setDate(today.getDate() + 1);
      this.labels.push(this.formatDate(today))
      this.getLearnsCountInDate(this.formatDate(today))

      today.setDate(today.getDate() + 1);
      this.labels.push(this.formatDate(today))
      this.getLearnsCountInDate(this.formatDate(today))

      today.setDate(today.getDate() + 1);
      this.labels.push(this.formatDate(today))
      this.getLearnsCountInDate(this.formatDate(today))
    },
    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },
      formatDate(dt) {
        var y = dt.getFullYear();
        var m = ('00' + (dt.getMonth()+1)).slice(-2);
        var d = ('00' + dt.getDate()).slice(-2);
        return (y + '-' + m + '-' + d);
      },
      async getProfile() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        let response = await this.axios.get('http://localhost:8888/api/getProfile',{
          params
        })
        this.profile = response.data
      },
      async getFriends() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        let response = await this.axios.get('http://localhost:8888/api/getFollow',{
          params
        })
        this.items = response.data
      },
      async getLearnsCount() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        let response = await this.axios.get('http://localhost:8888/api/getLearnsCount',{
          params
        })
        this.learns_count = response.data.learns_count
      },
      async getLearnsCountInDate(date) {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        params.date = date
        let response = await this.axios.get('http://localhost:8888/api/getLearnsCountInDate',{
          params
        })
        this.value.push(response.data.learns_count)
      },
      async getLikesCount() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        let response = await this.axios.get('http://localhost:8888/api/getLikesCount',{
          params
        })
        this.likes_count = response.data.likes_count
      },
      async getFriendsCount() {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        let response = await this.axios.get('http://localhost:8888/api/getFriendsCount',{
          params
        })
        this.friends_count = response.data.friends_count
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
};
</script>
<style scoped>
.rounded {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>
