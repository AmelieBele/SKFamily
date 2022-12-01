<template>
    <div class="packMedium">
        <p class="pack">
            Pack Médium
        </p>
        <p class="prix">
            300€
        </p>
        <ul> 
            <li>2 structures</li>
            <li>1 présentoir à gâteau</li>
            <li>2 plinth (support rectangulaire pour présentoir à gâteau)</li>
            <li>1 arche de ballon (≈ 3m)</li>
            <li>2 éléments thématique</li>           
        </ul>
        <img src="../../images/pack_medium.jpg" alt="photo illustrant le pack médium"/>
    </div>
</template>

<script>
export default {
  name: 'PackMediumComponent',
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
        img{
            width: 100%;
            border-radius: 20px;    
            margin-bottom: 25px;       
        }

    }
    
</style>
