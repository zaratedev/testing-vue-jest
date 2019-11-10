import Vue from 'vue'
import Router from 'vue-router'
import TaskView from './components/TaskView'
import ToDoList from './components/ToDoList'

const routes = [
  { path: '/', component: ToDoList },
  { path: '/task', component: TaskView },
];

const router = new Router({
  routes,
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
