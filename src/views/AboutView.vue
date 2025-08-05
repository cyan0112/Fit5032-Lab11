<template>
  <div class="about">
    <h1>About Our Library</h1>
    <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
    <div>
        <button @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';

// No script needed for now
const logout = () => {
    localStorage.removeItem('isLogged');
    router.push('/')
}
</script>

<style>
.about {
  text-align: center;
  padding: 20px;
}
</style>