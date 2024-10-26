<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const licenseId = route.params.licenseId;
const projectId = route.params.projectId;
</script>

<template>
    <div>
        <p>License ID: {{ licenseId }}</p>
        <p>Project ID: {{ projectId }}</p>
    </div>
</template>
