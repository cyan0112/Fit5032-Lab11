<template>
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model = "email"/></p>
    <p><input type="password" placeholder="Password" v-model = "password"/></p>
    <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<script>
import { ref } from 'vue'
import { signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'vue-router'  
import { auth } from '@/main.js'    
const email = ref('')
const password = ref('')
const router = useRouter()
const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((data) => {
    // Signed in 
    console.log("Firebase Login Successful!")
    router.push('/')

    console.log(error.email)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    // ..
  });
}

</script>