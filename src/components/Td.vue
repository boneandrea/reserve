<template>
  <td @click="clicked" :class="{reserved: isReserved}">
  </td>
</template>
<script setup>
  import { ref } from 'vue'
  const props = defineProps(['msg',"seat"])
  const isReserved=ref(false)
  function clicked(){
  console.log(`${props.msg} / ${props.seat}`)
  isReserved.value=!isReserved.value
  }
</script>
<style scoped>
.reserved{ background: #45a }
.closed{ background: #f00 }
</style>
