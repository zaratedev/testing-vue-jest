<template>
    <div>
        <Header />
        <div class="input-group mb-3">
            <input type="text" v-model="newTask" class="form-control" placeholder="Add a new Task" aria-label="Add a new Task" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button @click="add(newTask)" class="btn btn-outline-primary" type="button">Add Task</button>
            </div>
        </div>
        <!-- <input type="text" class="form-control" v-model="newTask">
        <button  class="btn btn-primary">Add Task</button> -->
        <div>{{ activeTask.name }}</div>
        <div class="list-group mt-3">
            <Task 
                v-for="(task, index) in allTasks" 
                :key="index"
                :task="task"
                @delete="deleteTask(index)"
                @complete="completeTask(index)"
            >
                <span slot="close">x</span>
            </Task>
        </div>
    </div>
    
</template>

<script>
import Task from './Task'
import Header from './Header'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'ToDoList',
    
    data() {
        return {
            newTask: '',
        };
    },

    computed: {
        ...mapGetters(['allTasks']),

        ...mapState(['activeTask'])
    },

    components: {
        Header,
        Task,
    },

    methods: {
        ...mapActions(['deleteTask', 'addTask', 'completeTask']),

        add(task) {
            this.addTask(task);
            this.newTask = '';
        }
    }
}
</script>
