
<template>
    <div class="packs"> 
        <div class="pack"><PackSoftComponent/></div>
        <div class="pack"><PackMediumComponent/></div>
        <div class="pack"><PackPremiumComponent/></div>
    </div>
</template>

<script>

import PackSoftComponent from './PackSoftComponent.vue';
import PackMediumComponent from './PackMediumComponent.vue';
import PackPremiumComponent from './PackPremiumComponent.vue';
export default {
  name: 'AllPacksComponent',
  components: {
      PackSoftComponent,
      PackMediumComponent,
      PackPremiumComponent,
    },
}

</script>
<style lang="scss" scoped>
    div.packs{
        display:flex;
        justify-content: space-around;     
    }
    div.pack{
        width: 30%;
    }
    
</style>
