<script>
 export default {
     name: 'App',
     components: {
     },
 }
</script>

<template>
    <p>
        <router-link to="/">
            <button type="button" class="btn btn-light">予約一覧</button>
        </router-link>
        <router-link to="/about">
            <button type="button" class="btn btn-light">使い方</button>
        </router-link>
    </p>
    <router-view></router-view>
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
