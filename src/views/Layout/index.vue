<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
    <LayoutNav></LayoutNav>
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
</template>

<style>
body{
    background: url(@/assets/images/bg-texture.png);
    background-size: cover;
    background-attachment: fixed;
}
</style>