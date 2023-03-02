<script setup lang="ts">
import type { Server } from '~/types/models'

const props = defineProps<{
  serverId: string | string[]
}>()

const { data: server } = useFetch<Server>(() => `/api/server/${props.serverId}`).json()
const { data: channel } = useFetch(() => `/api/channel/${server.value?.channels?.at(0)}`, {
  refetch: true,
}).json()
</script>

<template>
  <header h-30px p-3 flex items-center justify-around class="the-header">
    <div flex items-center>
      <div i-ic-sharp-record-voice-over mr-8px s-20px />
      <strong>
        {{ server?.name }}
      </strong>
    </div>
    <div cursor-pointer i-ic-baseline-keyboard-arrow-down s-25px />
  </header>
  <div scroll-y>
    <div h-30px flex items-center justify-around class="channel">
      <div i-carbon-hashtag s-20px font-bold />
      <div p-5>
        <router-link :to="`/channels/${serverId}/${channel?._id}`" c-text-3>
          {{ channel?.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.the-header {
  border-bottom-color: rgba(26, 23, 23, 0.638);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.channel {
  padding: 10px 20px;
}
</style>
