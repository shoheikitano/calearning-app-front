import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Signup from '../components/Signup';
import Calender from '../components/Calender';
import Learns from '../components/Learns';
import Ranking from '../components/Ranking';
import Profile from '../components/Profile';
import Friends from '../components/Friends';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signup
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/calender',
      name: 'calender',
      component: Calender
    },
    {
      path: '/learns',
      name: 'learns',
      component: Learns
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    }
  ]
});