<template>
    <div>
        {{ task }}
        <span id="delete" @click="$emit('delete')">x</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        task: String
    }
}
</script>
