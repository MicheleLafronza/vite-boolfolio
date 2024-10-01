<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
  
export default {
  name: 'App',

  components: {
    AppHeader,
  }
} 

</script>

<template>

  <div class="main-wrapper">
    <AppHeader />

    <RouterView />
    
  </div>

  

</template>

<style lang="scss" scoped>


.main-wrapper {
  width: 100%;
  // debug
  // min-height: 800px;
  border: 2px black solid;
}
</style>
