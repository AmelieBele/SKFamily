<template>
    <div class="tous">
        <div class="p">
            <p>Mariage</p>
        </div>
        
        <div class="texte">
            <p class="titre_theme">Exemple en pack premium </p>
        </div>
        <div class="image_theme">
            <img class="portrait" src="../../images/IMG_8303.jpg" alt="image décoration mariage"/>
            <img class="portrait" src="../../images/IMG_8304.jpg" alt="image décoration mariage"/>
            <img class="paysage" src="../../images/IMG_8301.jpg" alt="image décoration mariage"/>
            <img class="paysage" src="../../images/IMG_8302.jpg" alt="image décoration mariage"/>
        </div>
    </div>
</template>
  
<script>


export default {
    name: 'MariagePage',
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
        border:#c9bf93 1px solid;
        width:20%;
        margin-bottom: 50px;
    }
    .portrait{
        margin-top:30px;
        border: 1px solid #c9bf93;
        border-radius: 20px;
        width:20%;

    }
    .paysage{
        margin-top:30px;
        border: 1px solid #c9bf93;
        border-radius: 20px;
        width:20%;
        height:20%;
    }
    .image_theme{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
  