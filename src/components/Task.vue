<template>
    <div 
        class="list-group-item d-flex justify-content-between align-items-center"
        :class="{ disabled: task.done }"
    >
        <div>
            {{ task.name }}<input class="ml-3" v-model="isChecked" type="checkbox">
            <router-link :to="{ path: '/task', params: { task } }"></router-link>
        </div>
        <button id="delete" type="button" class="btn btn-sm btn-danger" @click="$emit('delete')">
            Delete
        </button>
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
