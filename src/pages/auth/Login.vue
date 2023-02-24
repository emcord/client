<script setup lang="ts">
import sha256 from 'crypto-js/sha256'

const email = ref('auth1')
const password = ref('auth1pw')

async function submit() {
  const hashedEmail = sha256(email.value).toString()
  const hashedPassword = sha256(password.value).toString()

  const { data } = useFetch('/api/login')
    .post(
      {
        email: hashedEmail,
        password: hashedPassword,
      },
    )
    .json()
  console.log(data.value)
}
</script>

<template>
  <div min-h-screen flex-center flex-col>
    <div>
      <input v-model="email">
    </div>
    <div>
      <input v-model="password">
    </div>
    <div btn @click="submit()">
      submit
    </div>
  </div>
</template>

<style scoped>

</style>
