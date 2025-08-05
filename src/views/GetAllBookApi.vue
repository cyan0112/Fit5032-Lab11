<template>
    <div v-if="apiResponse" class="api-response">
      <pre>{{ JSON.stringify(apiResponse, null, 2) }}</pre>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const authors = ref([])
const loading = ref(false)
const error = ref(null)
const apiResponse = ref(null)
const books = ref([])
const getAllBooks = () => {
    books.value = authors.value.map(author => author.famousWorks).flat()
}
const getApiData = async () => {
    loading.value = true
  error.value = null
  
  try {
    const response = await fetch('@/assets/json/authors.json')
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    authors.value = data
    
    getAllBooks()
    
  } catch (err) {
    error.value = `Error loading authors data: ${err.message}`
    console.error('Error loading authors data:', err)
  } finally {
    loading.value = false
  };

  apiResponse.value = {
    success: true,
    book: books.value,
    timestamp: new Date().toISOString()
  }
}

onMounted(() => {
  getApiData();
})

defineExpose({
  getApiData
})
</script>