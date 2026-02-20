<script setup>
const { $supabase } = useNuxtApp()
const Tags = ref([])

async function getTags() {
  const { data, error } = await $supabase
    .from('Tags')
    .select('id, title')

  if (error) {
    console.error('Error fetching Tags:', error)
  } else {
    Tags.value = data
  }
}

onMounted(() => getTags())
</script>

<template>
  <ul>
    <li v-for="Tag in Tags" :key="Tag.id">{{ Tag.title }}</li>
  </ul>
</template>