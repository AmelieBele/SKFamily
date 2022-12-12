<template>
    <QuoteComponent/>
    <AllThemesComponent/>
    <AllPacksComponent/>
</template>
  
<script>
import QuoteComponent from "../components/QuoteComponent.vue"
import AllPacksComponent from "../components/AllPacksComponent.vue"
import AllThemesComponent from "../components/AllThemesComponent.vue"
export default {
    name: 'HomePage',
    components: {
      QuoteComponent,
      AllPacksComponent,
      AllThemesComponent,
    },
}
</script>
  
<style lang="scss" scoped>

</style>
  