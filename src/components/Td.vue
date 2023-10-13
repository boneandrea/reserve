<template>
    <td
        @pointerdown="startPress"
        @pointerup="endPress"
        @pointermove="endPress"
        @pointercancel="endPress"
        @click="endPress"
        @contextmenu.prevent
        :class="{reserved: isReserved, closed: isClosed}"
    >
        <span>{{name}}</span>
    </td>
</template>
<script setup>
 import { ref } from 'vue'
 const props = defineProps(['msg',"seat"])
 const isReserved=ref(false)
 const isClosed=ref(false)
 const name=ref(null)
 let pressTimer=null
 const delay=500
 function startPress(){
     console.log("STARTPRESS")
     pressTimer = setTimeout(() => {
         onLongPress()
     }, delay)
 }
 function endPress(){
     if (!pressTimer) return
     console.log(`${props.msg} / ${props.seat}`)
     clearTimeout(pressTimer)
     pressTimer = null
     isReserved.value=!isReserved.value
     if(!isReserved.value)
         name.value=null
 }
 function onLongPress(){
     if(isReserved.value){
         name.value=prompt("患者名:")
         return
     }
     isClosed.value=!isClosed.value
     isReserved.value=false
 }
</script>
<style scoped>
 span{ color:#fff}
 .reserved{ background: #45a }
 .closed{ background: #f00 }
</style>
