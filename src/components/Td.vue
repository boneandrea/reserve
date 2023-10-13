<template>
    <td
        @pointerdown="startPress"
        @pointerup="endPress"
        @contextmenu.prevent
        :class="{closed: status==='red', reserved: status==='blue'}"
    >
        <span>{{name}}</span>
    </td>
</template>
<script setup>
 import { ref } from 'vue'
 const props = defineProps(['msg',"seat"])
 const name=ref("")
 const status=ref("white")
 let pressTimer=null
 const delay=500
 // status: white/red/blue
 function startPress(){
     console.log("STARTPRESS")
     name.value=pressTimer
     pressTimer = setTimeout(() => {
         onLongPress()
     }, delay)
 }
 function endPress(){
     console.log(`${props.msg} / ${props.seat}`)

     if(status.value==="white"){
         status.value="blue"
         return
     }
     if(status.value==="blue"){
         status.value="white"
         return
     }
 }
 function onLongPress(){
     if (!pressTimer) return
     clearTimeout(pressTimer)
     pressTimer = null

     if(status.value==="blue"){
         name.value=prompt("患者名:")
         return
     }

     if(status.value==="white"){
         status.value="red"
         return
     }
     if(status.value==="red"){
         status.value="white"
         return
     }
 }
</script>
<style scoped>
 span{ color:#fff}
 .reserved{ background: #45a }
 .closed{ background: #f00 }
</style>
