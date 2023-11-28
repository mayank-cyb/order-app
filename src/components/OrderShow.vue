<template>
    <h2>This is order id: {{ parseInt(route.params.orderId) }}</h2>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();


</script>