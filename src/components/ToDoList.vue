<template>
    <div>
        <Task 
            v-for="task in tasks" 
            :key="task"
            :task="task"
            @delete="deleteTask(task)">
        </Task>
    </div>
    
</template>

<script>
import Task from './Task';

export default {
    data () {
        return {
            tasks: [],
            params: this.$route.params
        }
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
