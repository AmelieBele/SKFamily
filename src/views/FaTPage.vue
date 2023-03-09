<template>
    <div class="tous">
        <div class="p">
            <p>Fêtes à thèmes</p>
        </div>
        
        <div class="texte">
            <p class="titre_theme">Exemple halloween en pack soft  </p>
        </div>
        <div class="image_theme">
            <img class="portrait" src="../../images/halloween1.jpg" alt="image décoration halloween"/>
            <img class="portrait" src="../../images/halloween_4.jpg" alt="image décoration halloween"/>
            <img class="paysage" src="../../images/halloween_2.jpg" alt="image décoration halloween"/>
            <img class="paysage" src="../../images/halloween_3.jpg" alt="image décoration halloween"/>
        </div>

        <div class="texte">
            <p class="titre_theme">Exemple noël en pack premium  </p>
        </div>
        <div class="image_theme">
            <img class="portrait_noel" src="../../images/noel.jpg" alt="image décoration noël"/>
            <img class="portrait_noel" src="../../images/noel1.jpg" alt="image décoration noël"/>
            <img class="portrait_noel" src="../../images/noel2.jpg" alt="image décoration noël"/>

        </div>
    </div>
</template>
  
<script>


export default {
    name: 'FaTPage',
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
  