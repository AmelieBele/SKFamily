<template>
    <div>
        <div class="p">
            <p>Tous les thèmes déja réalisés</p>
        </div>
        <div class="texte">
            <p class="titre_theme">Exemple de pack soft </p>
        </div>
        <div class="image_theme">
            <img class="portrait" src="../../images/halloween1.jpg" alt="image décoration halloween"/>
            <img class="portrait" src="../../images/halloween_4.jpg" alt="image décoration halloween"/>
            <img class="paysage" src="../../images/halloween_2.jpg" alt="image décoration halloween"/>
            <img class="paysage" src="../../images/halloween_3.jpg" alt="image décoration halloween"/>
            <img class="portrait" src="../../images/pack_soft_noir.jpg"/>
        </div>
        <div class="texte">
            <p class="titre_theme">Exemple de pack premium </p>
        </div>
        <div class="image_theme">
            <img class="portrait" src="../../images/IMG_8303.jpg" alt="image décoration mariage"/>
            <img class="portrait" src="../../images/IMG_8304.jpg" alt="image décoration mariage"/>
            <img class="paysage" src="../../images/IMG_8301.jpg" alt="image décoration mariage"/>
            <img class="paysage" src="../../images/IMG_8302.jpg" alt="image décoration mariage"/>
        </div>
        <div class="texte">
            <p class="titre_theme">Autre</p>
        </div>
        <div class="image_legende">           
            <div class="image_theme image_theme_legende">
                <img class="img_legende_portrait" src="../../images/anniv-no.jpg" alt="image décoration mariage"/>
            </div>
            <p class="legende">Création d'une arche de ballons organique.<br/>(Tous les ballons et la toile de fond ont été fournis par la cliente)</p>
        </div>

    </div>
</template>
  
<script>


export default {
    name: 'ThemesTousPage',
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
    .legende{
        font-size: 13px;
        text-align:start;
    }
    .image_legende{
        display: flex;
        flex-direction: column;
        width:33%;

    }
    .img_legende_portrait{
        width: 60%;
        margin-top:30px;
        border: 1px solid #c9bf93;
        border-radius: 20px;

    }
</style>
  