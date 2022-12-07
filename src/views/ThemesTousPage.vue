<template>
    <HeaderComponent/>
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
    </div>
    <FooterComponent/>
</template>
  
<script>

import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from "../components/FooterComponent.vue"

export default {
    name: 'ThemesTousPage',
    components: {
        HeaderComponent,
        FooterComponent,
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
  