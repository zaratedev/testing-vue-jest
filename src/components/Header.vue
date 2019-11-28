<template>
    <div class="alert alert-primary mt-3">
        ToDo's List
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Header',

    data() {
        return {
            user: {},
            error: false,
        }
    },

    created() {
        axios.get('/api/user')
             .then((data) => this.user = data)
             .catch(() => this.error = true);

    }
}
</script>
