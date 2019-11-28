<template>
    <div>
        <div>
            <span id="delete" @click="$emit('delete')">
                <slot name="close"></slot>
            </span>
            <router-link :to="{ path: '/task', params: { task } }" name="Task view"></router-link>
            <input v-model="isChecked" type="checkbox">
            <span>Complete Task</span>
        </div>
        {{ task }}
        <slot></slot>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Task',

    props: {
        task: Object
    },

    computed: {
        isChecked: {
            get() {
                if (! this.task) {
                    return false;
                }

                return this.task.done;
            },
            set(value) {
                if (value) {
                    this.completeTask(this.task);
                } else {
                    this.uncompleteTask(this.task);
                }
            }
        }
    },

    methods: {
        ...mapActions(['completeTask', 'uncompleteTask'])
    }
}
</script>
