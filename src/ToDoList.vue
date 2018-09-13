<template>
    <div>
        <Task v-for="task in tasks" :key="task" />
    </div>
    
</template>

<script>
import Task from './Task';

export default {
    data () {
        return {
            tasks: []
        }
    },
    components: {
        Task
    }
}
</script>
