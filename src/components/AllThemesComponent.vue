
<template>
    <div class="all">
        <p>Les Différents thèmes </p>
        <div class="themes">
            <button type="button" id="gr" @click.prevent="goTous">Tous les thèmes</button>
            <button type="button" id="anniversaire" @click.prevent="goAnniversaire">Anniversaire</button>
            <button type="button" id="bs" @click.prevent="goBS">Baby Shower</button>
            <button type="button" id="fat" @click.prevent="goFaT">Fêtes à thèmes</button>
            <button type="button" id="gr" @click.prevent="goGR">Gender Reveal</button>
            <button type="button" id="gr" @click.prevent="goMariage">Mariage</button>
            <button type="button" id="autre" @click.prevent="goAutre">Autre</button>   
        </div>
    </div>
</template>

<script>



export default {
    name: 'AllThemesComponent',
    components: {

    }, 
    methods: {
        goTous(){
            this.$router.push(`/ThemesTous`)
        }, 
        goAnniversaire(){
            this.$router.push(`/Anniversaire`)
        }, 
        goBS(){
            this.$router.push(`/BabyShower`)
        }, 
        goFaT(){
            this.$router.push(`/FaT`) 
        },
        goGR(){
            this.$router.push(`/GenderReveal`)
        },
        goMariage(){
            this.$router.push(`/Mariage`)
        },
        goAutre(){
            this.$router.push(`/Autre`)
        }
    }

}

</script>
<style lang="scss" scoped>
    p{
        color:#5b4e46;
        font-size:40px;
        font-weight: 500;
        margin-top:100px;
        text-align: center;
        text-decoration: underline;
    }

    div.themes{
        display: flex;
        margin-top: 50px;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;

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
            width: 33%;
            align-items: center;
        }

        button:hover{
            cursor: pointer;
            background-color:#c9bf93;
        }
        #autre{
            margin-bottom:100px;
        }
    }
</style>

