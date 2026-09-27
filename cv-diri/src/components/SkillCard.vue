<script setup>
defineProps({
    nama: String,
    level: String
})
</script>

<template>
   <div class="skill-card">
        <h3>{{ nama }} <span v-if=" level === 'Mahir' " class=" badge   badge--mahir ">Mahir</span>
        <span v-else class=" badge  badge--pelajar ">Pelajar</span></h3>   
    </div>
</template>

<style scoped>
.skill-card {
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 12px;
}
.badge {
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 0.85rem;
}
.badge--mahir {
    background: #d1fae5;
    color: #065f46;
}
.badge--pelajar {
    background: #d93232;
    color: #fafafa;
}
</style>