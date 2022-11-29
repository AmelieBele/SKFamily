<template>
    <HeaderComponent/>
    <div class="tous">
        <div class="p">
            <p>Tous les thèmes</p>
        </div>
        
        <div class="halloween">
            
        </div>
    </div>
</template>
  
<script>

import HeaderComponent from '../components/HeaderComponent.vue'
export default {
    name: 'ThemesTousPage',
    components: {
        HeaderComponent,
    },
    
}
</script>
  
<style lang="scss" scoped>
    p{
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        color:#5b4e46;
    }
</style>
  