
<template>
    <div class="packSoft">
        <p class="pack">
            Pack Soft
        </p>
        <p class="prix">
            À partir de 170€
        </p>
        <ul> 
            <li>1 structure</li>
            <li>1 présentoir à gâteau</li>
            <li>1 plinth (support rectangulaire pour présentoir à gâteau)</li>
            <li>1 arche de ballon (≈ 2m ou 2 arches de 1m)</li>           
        </ul>
        <img src="../../images/pack_soft.jpg" alt="photo illustrant le pack soft"/>
    </div>
</template>

<script>
export default {
  name: 'PackSoftComponent',
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
            margin-bottom: -4px;    
            margin-top: 30px;     
        }
    }
    
</style>
