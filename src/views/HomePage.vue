<template>
    <HeaderComponent/>
    <QuoteComponent/>
    <AllThemesComponent/>
    <AllPacksComponent/>
    <FooterComponent/>
</template>
  
<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import QuoteComponent from "../components/QuoteComponent.vue"
import AllPacksComponent from "../components/AllPacksComponent.vue"
import AllThemesComponent from "../components/AllThemesComponent.vue"
import FooterComponent from "../components/FooterComponent.vue"
export default {
    name: 'HomePage',
    components: {
      HeaderComponent,
      QuoteComponent,
      AllPacksComponent,
      AllThemesComponent,
      FooterComponent,
    },
}
</script>
  
<style lang="scss" scoped>

</style>
  