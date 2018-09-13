<template>
    <div>
        My Header
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Header',

    data() {
        return {
            user: {}
        }
    },

    created() {
        axios.get('/api/user').then(data => {
            this.user = data;
        });
    }
}
</script>
