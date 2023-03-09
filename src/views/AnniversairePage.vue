<template>
    <div class="tous">
        <div class="p">
            <p>Anniversaire</p>
        </div>
        
        <div class="texte">
            <p class="titre_theme">Exemple de pack soft  </p>
        </div>
        <div class="image_theme">
            <img class="portrait" src="../../images/pack_soft_noir.jpg" alt="image décoration anniversaire"/>
        </div>

        <div class="texte">
            <p class="titre_theme">Autre</p>
        </div>
        <div class="image_theme">
            <img class="portrait_noel" src="../../images/anniv-no.jpg" alt="image décoration anniversaire"/>
            <img class="portrait" src="../../images/happy_birthday1.jpg" alt="image décoration anniversaire"/>
            <img class="portrait" src="../../images/happy_birthday2.jpg" alt="image décoration anniversaire"/>
        </div>
    </div>
</template>
  
<script>


export default {
    name: 'AnniversairePage',
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
    .legende{
        font-size: 20px;
        text-align:start;
    }
    .portrait{
        margin-top:30px;
        border: 1px solid #c9bf93;
        border-radius: 20px;
        width:20%;
    }
    .portrait_noel{
        margin-top:30px;
        border: 1px solid #c9bf93;
        border-radius: 20px;
        width:15%;
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
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>
  