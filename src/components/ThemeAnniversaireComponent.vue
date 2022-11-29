<template>    
    <div class="themes">
        <button type="button" id="anniversaire" @click.prevent="AfficherMasquer">Anniversaire</button>
        <div id="divacacher" style="display:none;">Anniversaire</div>
    </div>
</template>

<script>

export default {
    name: 'ThemeAutreComponent',
    methods: {
        AfficherMasquer(){
            const divInfo = document.getElementById('divacacher');
            if (divInfo.style.display == 'none')
            divInfo.style.display = 'block';
            else
            divInfo.style.display = 'none';
        },
    }
}

</script>

<style lang="scss" scoped>
   div.themes{
        display: flex;
        margin-top: 50px;
        justify-content: space-around;

        button{
            color:#5b4e46;
            font-size:20px;
            font-weight: 500;
            font-family: "Raleway",arial,sans-serif;
            border: 0.5px solid;
            border-radius: 10px;
            border-color: #c9bf93;
            background-color: white;
            color:#5b4e46 ;
            padding: 10px;
            margin: 5px;
        }

        button:hover{
            cursor: pointer;
        }
        
    }

</style>