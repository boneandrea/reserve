<template>
    <div class="container">
        <h1>{{today}}</h1>
        <div class="p-3 m-0 border-0 bd-example m-0 border-0">
            <button type="button" class="btn btn-info" @click="go(-1)">前日</button>
            <button type="button" class="btn btn-info" @click="go(1)">翌日</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Seat 1</th>
                    <th scope="col">Seat 2</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in times" :key="i">
                    <th scope="row" data-time="i">{{i}}</th>
                    <Td :msg="i" seat="1"/>
                    <Td :msg="i" seat="2"/>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
 import { ref } from 'vue'
 import Td from './Td.vue'
 const times=ref([
     "9:00",
     "9:30",
     "10:00",
     "10:30",
     "11:00",
     "11:30",
     "12:00",
     "12:30",
     "13:00",
     "13:30",
     "14:00",
     "14:30",
     "15:00",
     "15:30",
     "16:00",
     "16:30",
     "17:00",
     "17:30",
     "18:00",
     "18:30",
     "19:00",
     "19:30",
     "20:00",
     "20:30",
 ])
 const currentDate=new Date()
 let today=ref(`${currentDate.getFullYear()}/${currentDate.getMonth()+1}/${currentDate.getDate()} (${["日","月","火","水","木","金","土"][currentDate.getDay()]})`)
 defineProps(['times',"currentDate","today"])
 function go(d){
     currentDate.setDate(currentDate.getDate()+d)
     today.value=`${currentDate.getFullYear()}/${currentDate.getMonth()+1}/${currentDate.getDate()} (${["日","月","火","水","木","金","土"][currentDate.getDay()]})`
 }
</script>
<style scoped>
 tr{ line-height: 200%}
</style>
