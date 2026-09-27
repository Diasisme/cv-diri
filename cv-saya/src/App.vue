<script setup>
import { ref } from 'vue'
import SkillCard from './components/SkillCard.vue'
import KartuRate from './components/KartuRate.vue' 

import { useSkill } from '@/composables/useSkill'

const { daftarSkill } = useSkill()


const gambarProfil = ref('cat.png')
const linkAktif = ref(true)

const daftarRate = ref([
  { id: 1, nama: 'Profile Web Perusahaan', harga: 5500000 },
  { id: 2, nama: 'Sistem HRIS', harga: 75000000 },
  { id: 3, nama: 'Sistem E-Commerce', harga: 150000000 },
])

const stok = ref(1)

function addToCart(id) {
  const item = daftarRate.value.find(item => item.id === id)
  if (item) {
    alert(`${item.nama} dengan harga Rp.${item.harga.toLocaleString('id-ID')} telah ditambahkan ke keranjang.`)
  }
}

const comment = ref('')

</script>

<template>
<!--   <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->
  <!-- Contoh penggunaan v-bind -->
  <img :src="gambarProfil" alt='Foto Profil'/>
  <a :class="{aktif: linkAktif}" href="/">Beranda</a>

  <!-- Contoh penggunaan v-for -->
  <ul>
    <li v-for="item in daftarSkill" :key="item.id">{{ item.nama }} - {{ item.level }}</li>
  </ul>

  <!-- Contoh penggunaan v-if -->
  <p v-if="stok > 1">Stok BBM Tersedia</p>
  <p v-else-if="stok === 1">Stok BBM Tipis</p>
  <p v-else>Stok BBM Kosong</p>

  <!-- Contoh penggunaan komponen -->
   <div class="skill-list">
      <SkillCard 
          v-for="skill in daftarSkill" 
          :key="skill.id" 
          :nama="skill.nama" 
          :level="skill.level" 
      />
   </div>

  <!-- Contoh penggunaan defineEmit -->
  <div class="rate-list">
    <KartuRate 
        v-for="rate in daftarRate" 
        :id="rate.id" 
        :name="rate.nama" 
        :price="rate.harga" 
        @add-to-cart="addToCart"
    />
  </div>

  <p> </p>

  <!-- Contoh v-model-->
  <input v-model="comment" placeholder="Tulis komentar Anda di sini..." />
  <p> Preview Komentar: {{ comment }}</p>

</template>

<style scoped></style>
