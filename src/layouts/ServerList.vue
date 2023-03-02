<script setup lang="ts">
import ServerButton from '~/components/ServerButton.vue'
import Spliter from '~/components/Spliter.vue'

const { userInfo } = useUserInfo()
const route = useRoute()
const servers = computed(() => userInfo.value?.servers || [])
</script>

<template>
  <div flex flex-col items-center hp-100 pt-15px>
    <ServerButton
      name="HomePage"
      to="/channels/@me"
      avator="https://api.iconify.design/skill-icons:discord.svg?color=%23ffffff"
      :active="route.path === '/channels/@me'"
    />
    <Spliter h-2px w-32px mb-8px mt-8px />
    <div
      v-for="server in servers"
      :key="server._id"
      flex
    >
      <ServerButton
        :name="server.name"
        :to="`/channels/${server._id}/-1`"
        :avator="server.avator"
        :active="route.path.includes(server._id)"
      />
    </div>
  </div>
</template>
