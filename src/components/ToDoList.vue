<template>
    <div>
        <div>{{ activeTask.name }}</div>
        <Task 
            v-for="task in allTasks" 
            :key="task"
            :task="task"
            @delete="deleteTask(task)">
        </Task>
    </div>
    
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Task from './Task';

export default {
    computed: {
        ...mapGetters(['allTasks']),

        ...mapState(['activeTask'])
    },

    components: {
        Task
    },

    methods: {
        deleteTask(task) {
            console.log(task);
        }
    }
}
</script>
