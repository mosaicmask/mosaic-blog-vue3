<template>
  <div class="navbar">
    <div class="logo">
      <svg class="icon icon-nav">
        <use :xlink:href="'#icon-github-fff'"></use>
      </svg>
      <a class="nav-item" href="https://github.com/mosaicmask" target="_blank">Mosaic-Git</a>
    </div>
    <div class="content">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/photos" class="nav-item">Photo</router-link>
      <router-link to="/notes" class="nav-item">Notes</router-link>
      <router-link to="/demo" class="nav-item">Demo</router-link>
    </div>
    <div class="resume">
      <router-link to="/resume" class="nav-item">Resume</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import { ref } from 'vue'
</script>

<style lang="scss" scoped>
  :root {
    --text-color: #fff;
  }
  @mixin router-highlight {
    // 高亮属性
    .router-link-active {
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 4px;
        left: 0;
        width: 100%;
        height: 20px;
        background: var(--text-color);
        transition: all 0.32s ease-out;
        border-bottom: #fff 2px solid;
      }
      // &:hover:after {
      //   right: 0;
      //   width: 0;
      // }
    }
  }
  @mixin router-item {
    color: #fff;
    font-size: 1rem;
    @media screen and (max-width: 1450px) {
      font-size: 1.2rem;
    }
    font-weight: bold;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    padding: 15px 0px 10px 0px;
    margin: 0 15px;
    letter-spacing: 1px;
    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 4px;
      right: 0;
      width: 0;
      height: 20px;
      background: var(--text-color);
      transition: all 0.32s ease-out;
      border-bottom: #fff 2px solid;
    }
    &:hover {
      color: #fff;
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
  }
  .navbar {
    width: 100%;
    height: 70px;
    background-color: $navbar-color;
    position: fixed;
    z-index: 9;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // box-shadow: 0 0 10px 10px rgb(228, 228, 228);
    .logo {
      width: 150px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .icon-nav {
        width: 2rem;
        height: 2rem;
      }
      .nav-item {
        color: #fff;
        font-size: 1rem;
        @media screen and (max-width: 1450px) {
          font-size: 1.2rem;
        }
        font-weight: bold;
        text-decoration: none;
        letter-spacing: 2px;
      }
    }
    .content {
      min-width: 30%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nav-item {
        @include router-item();
      }
      @include router-highlight();
    }
    .resume {
      .nav-item {
        @include router-item();
      }
      @include router-highlight();
    }
  }
</style>
