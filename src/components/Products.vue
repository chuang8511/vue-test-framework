<script setup>
const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})

const showAlert = (str) => {
    window.alert(str);
}

</script>

<template>
    <ul>
        <li v-for="item in products">{{ item.title }}</li>
    </ul>
    <button class="btn btn-alert" @click="showAlert('Please do not do that')">
        click me!
    </button>
</template>

<style lang="scss" scoped>
</style>