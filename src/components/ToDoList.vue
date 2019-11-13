<template>
    <div>
        <Header />
        <input type="text" v-model="newTask">
        <button @click="addTask(newTask)">Add Task</button>
        <div>{{ activeTask.name }}</div>
        <Task 
            v-for="(task, index) in allTasks" 
            :key="task"
            :task="task"
            @delete="deleteTask(index)"
            @complete="completeTask(index)"
        >
            <span slot="close">x</span>
            Random Text
        </Task>
    </div>
    
</template>

<script>
import Task from './Task'
import Header from './Header'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
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
        ...mapActions(['deleteTask', 'addTask', 'completeTask'])
    }
}
</script>
