<script>
import HelloWorld from './components/HelloWorld.vue'
import BootstrapTest from './components/BootstrapTest.vue'
import TimeTable from './components/TimeTable.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        BootstrapTest,
        TimeTable,
    },
}
</script>

<template>
<HelloWorld msg="歯医者予約"/>
<TimeTable times="times"/>
<BootstrapTest />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
