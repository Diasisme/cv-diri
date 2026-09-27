import { ref } from 'vue'

export function useSkill() {
    const daftarSkill = ref([
        { id: 1, nama: 'HTML & CSS', level: 'Mahir' },
        { id: 2, nama: 'JavaScript', level: 'Mahir' },
        { id: 3, nama: 'VueJS', level: 'Pelajar' },
        { id: 4, nama: 'NodeJS', level: 'Pemula' }
    ])

    return { daftarSkill }
}
