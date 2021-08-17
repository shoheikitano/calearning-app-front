<template>
  <v-container>
    <div
      v-ripple="{ center: true }"
      class="text-center logo"
    >
      Calearning
    </div>
    <h2>
      {{ title }}
    </h2>
    <Postlearn />
    <Showlearn :dialog = this.dialog :event = this.event />
    <v-card outlined shaped>
        <v-sheet
          height="54"
          class="d-flex"
          outlined
          shaped
        >
          <v-btn
            icon
            class="ma-2"
            @click="$refs.calendar.prev()"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-select
            v-model="type"
            :items="types"
            dense
            outlined
            hide-details
            class="ma-2"
            label="type"
          ></v-select>
          <v-select
            v-model="mode"
            :items="modes"
            dense
            outlined
            hide-details
            label="event-overlap-mode"
            class="ma-2"
          ></v-select>
          <v-select
            v-model="weekday"
            :items="weekdays"
            dense
            outlined
            hide-details
            label="weekdays"
            class="ma-2"
          ></v-select>
          <v-spacer></v-spacer>
          <v-btn
            icon
            class="ma-2"
            @click="$refs.calendar.next()"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-sheet>
        <v-sheet height="600" outlined shaped>
          <v-calendar
            ref="calendar"
            v-model="value"
            :weekdays="weekday"
            :type="type"
            :events="events"
            :event-overlap-mode="mode"
            :event-overlap-threshold="30"
            :event-color="getEventColor"
            locale="ja-jp"
            @change="getEvents"
            @click:event="showEvent"
          ></v-calendar>
        </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
  import Postlearn from "./Postlearn"
  import Showlearn from "./Showlearn"
  import moment from 'moment'
  export default {
    name: 'Calender',
    components: {
      Postlearn,
      Showlearn,
    },
    data: () => ({
      type: 'month',
      value: moment().format('yyyy-MM-DD'),  // 現在日時
      types: ['month', 'week', 'day', '4day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      dialog: false,
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      learn_id: '',
      events: [],
      event: '',
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    methods: {
      async getEvents () {
        let params = {}
        params.user_id = this.$store.state.user.user_id
        let events = await this.axios.get('http://localhost:8888/api/calearning',{ params })
        this.events = events.data
      },
      getEventColor (event) {
        return event.color
      },
      showEvent({ event }) {
        this.dialog = true
        this.learn_id = event.learn_id
        this.getLearn()
      },
      async getLearn () {
        let params = {}
        params.learn_id = this.learn_id
        let event = await this.axios.get('http://localhost:8888/api/getLearn',{ params })
        this.event = event.data
      },
    },
    computed: {
      title() {
        return moment(this.value).format('yyyy年 M月');  // 表示用文字列を返す
      }
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