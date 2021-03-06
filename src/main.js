import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue';
import TaskView from './components/TaskView'
import ToDoList from './components/ToDoList'
import store from './store';

const routes = [
  { path: '/', component: ToDoList },
  { path: '/task', component: TaskView },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
