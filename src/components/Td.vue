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
 const name=ref(null)

 // status: white/red/blue
 const status=ref("white")

 // timer
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
     clearTimeout(pressTimer)
     pressTimer = null

     if(status.value==="white"){
         console.log(`${props.msg} / ${props.seat} is reserved`)
         status.value="blue"
         return
     }
     if(status.value==="blue"){
         status.value="white"
         name.value=null
         return
     }
 }
 function onLongPress(){
     if(status.value==="blue"){
         name.value=prompt("患者名:")
         return
     }
     if(status.value==="white"){
         status.value="red"
         pressTimer = null
         return
     }
     if(status.value==="red"){
         status.value="white"
         pressTimer = null
         return
     }
 }
</script>
<style scoped>
 span{ color:#fff}
 .reserved{ background: #45a }
 .closed{ background: #f00 }
</style>
