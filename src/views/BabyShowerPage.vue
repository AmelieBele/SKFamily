<template>
    <div class="tous">
        <div class="p">
            <p>Baby Shower</p>
        </div>
        
        <div class="texte">
            <p class="titre_theme">Aucune décoration de Baby Shower n'à été réalisée pour le moment, soyez le premier, <a href="/contact">contactez moi</a>!</p>
        </div>
    </div>
</template>
  
<script>


export default {
    name: 'BabyShowerPage',
    components: {

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
    .texte{
        display:flex;
        justify-content: center;
    }
    .titre_theme{
        margin-top:100px;
        font-size:20px;
        margin-bottom: 50px;
    }
</style>
  