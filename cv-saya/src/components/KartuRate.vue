<script setup>
const props = defineProps({
    id: Number,
    name: String,
    price: Number,
})

const emit = defineEmits(['add-to-cart'])

function handleAddToCart() {
    emit('add-to-cart', props.id)
}

</script>

<template>
    <div class="rate-card">
        <h3>{{ name }}</h3>
        <p>Harga: Rp.{{ price.toLocaleString('id-ID') }}</p>
        <button @click="handleAddToCart">Add to Cart</button>
    </div>
</template>