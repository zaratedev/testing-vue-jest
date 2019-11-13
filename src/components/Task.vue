<template>
    <div>
        <div>
            <span id="delete" @click="$emit('delete')">
                <slot name="close"></slot>
            </span>
            <router-link :to="{ path: '/task', params: { task } }" name="Task view"></router-link>
            <input type="checkbox" @click="$emit('complete')">
            <span>Complete Task</span>
        </div>
        {{ task }}
        <slot></slot>
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
