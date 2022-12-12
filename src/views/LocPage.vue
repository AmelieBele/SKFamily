<template>
    <div class="p">
        <p>Nos objets en location</p>
    </div>
    <div class="tous">
        <div class="image_theme image_legende">
            <img class="portrait img_legende_portrait" src="../../images/img_anneau.jpg" alt="image décoration anneau"/>
            <p class="legende">
                Arche sans pied<br/>
                180cm de diamètre<br/>
                <span class="prix_legende"> à partir de 15€</span>
            </p>
        </div>
        <div class="image_theme image_legende">
            <img class="portrait img_legende_portrait" src="../../images/img_anneau2.jpg" alt="image décoration support"/>
                <p class="legende">
                    lot de deux pieds support de ballon<br/>
                    1.15m de haut chacun<br/>
                    <span class="prix_legende"> à partir de 10€</span>
                </p>
        </div>
        <div class="image_theme image_legende">
            <img class="portrait img_legende_portrait" src="../../images/fond_noel.jpg" alt="image décoration noël"/>
                <p class="legende">
                    Toile de fond thême Noël<br/>
                    3/2.5m<br/>
                    <span class="prix_legende"> à partir de 15€</span>
                </p>
        </div> 
    </div>
</template>
  
<script>



export default {
    name: 'LocPage',
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
    .portrait{
        margin-top:30px;
        border-radius: 20px;
        width:20%;

    }
    .paysage{
        margin-top:30px;
        border-radius: 20px;
        width:20%;
        height:20%;
    }
    .tous{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .legende{
        font-size: 20px;
        text-align:start;
    }
    .prix_legende{
        font-weight: 700;
        text-align:center;
    }
    .image_legende{
        display: flex;
        flex-direction: column;
        width:33%;

    }
    .img_legende_portrait{
        width: 60%;
        margin-top:30px;
        border-radius: 20px;
    }
</style>
  