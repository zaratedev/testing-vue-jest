<template>
    <div>
        {{ task }}
        <span id="delete" @click="$emit('delete')">x</span>
        <slot></slot>
        <router-link :to="{ path: '/task', params: { task } }" name="Task view"></router-link>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: String
    }
}
</script>
