<template>
    <div class="packPremium">
        <p class="pack">
            Pack Prémium
        </p>
        <p class="prix">
            450€
        </p>
        <ul> 
            <li>3 structures</li>
            <li>2 présentoir à gâteau</li>
            <li>3 plinth (support rectangulaire pour présentoir à gâteau)</li>
            <li>2 arche de ballon (≈ 4m)</li>
            <li>3 éléments thématique <br/> + décoration à thème</li>
            
        </ul>
    </div>
</template>

<script>
export default {
  name: 'PackPremiumComponent',
}

</script>
<style lang="scss" scoped>
   div{
        margin-top:30px;
        border: 1px solid #c9bf93;
        border-radius: 20px;

        .pack{
            text-align: center;
            font-size: 40px;
            font-weight: 500;
            color:#5b4e46;
        }
        .prix{
            text-align: center;
            font-size: 30px;
            font-weight: 500;
            color:#5b4e46;
        }
        ul{
            
            font-size: 25px;
            font-weight: 500;
            color:#5b4e46;
        }

    }
    
</style>
