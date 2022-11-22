<template>
    <HeaderComponent/>
    <QuoteComponent/>
    <AllPacksComponent/>
    <ThemesComponent/>
</template>
  
<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import QuoteComponent from "../components/QuoteComponent.vue"
import AllPacksComponent from "../components/AllPacksComponent.vue"
import ThemesComponent from "../components/ThemesComponent.vue"

export default {
    name: 'HomePage',
    components: {
      HeaderComponent,
      QuoteComponent,
      AllPacksComponent,
      ThemesComponent,
    },
}
</script>
  
<style lang="scss" scoped>

</style>
  