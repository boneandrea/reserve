<template>
    <div class="container">
        <div class="btn-group">
            <button type="button" class="btn btn-outline-primary" @click="go(-1)">前日</button>
            <button type="button" class="btn btn-outline-primary" @click="go(1)">翌日</button>
            <div class="w-md-2 my-datepicker">
                <VueDatePicker
                    v-model="currentDate"
                    :format="format"
                    :enable-time-picker="false"
                    :max-date="maxDate"
                    week-start="0"
                    ref="datepicker"
                    locale="ja"
                    placeholder="Jump..."
                    select-text="Select"
                    cancel-text="Cancel"
                    now-button-label="現在を選択"
                    :show-now-button="false"
                    @update:model-value="select"
                >
                </VueDatePicker>
            </div>
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
<script>
 export default {
     name: 'TimeTable',
     components: {
         VueDatePicker
     }
 }
</script>
<script setup>
 import { ref } from 'vue';
 import Td from './Td.vue';

 import VueDatePicker from '@vuepic/vue-datepicker';
 import '@vuepic/vue-datepicker/dist/main.css'
 const MAX_DATE=10
 const today=new Date()
 const maxDate=new Date(today.setDate(today.getDate()+MAX_DATE))
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
 const format="yyyy-MM-dd"
 const currentDate=ref(new Date())
 defineProps(['times'])
 function go(d){
     if(!currentDate.value) return
     const newDate=new Date(currentDate.value)
     newDate.setDate(currentDate.value.getDate()+d)
     currentDate.value=newDate
     fetchAndUpdateTable()
 }
 function select(e){
     currentDate.value=e
     fetchAndUpdateTable()
 }
 function fetchAndUpdateTable(){
     console.log(currentDate)
     // kick API
 }
</script>
<style scoped>
 tr{ line-height: 200%}
 .my-datepicker {
     max-width: 250px;
     margin: auto;
 }
 .dp__action_select {
     width: 200px important!
 }
</style>
