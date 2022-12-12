<template>
  <HeaderComponent/>
    <div>

      <div class="container">
        <router-view/>   
      </div>
    </div>  
  <FooterComponent/>
</template>


<script>

import HeaderComponent from '../src/components/HeaderComponent.vue'
import FooterComponent from "../src/components/FooterComponent.vue"

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent, 
  }
}
</script>

<style lang="scss">
#app {
  background-color: white;
  font-family: "Raleway",arial,sans-serif;
}
</style>
