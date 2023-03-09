<template>    
    <div class="header">
        <div class="logo">
            <img src="../../images/logo_sk.jpg" alt="logo du site" @click.prevent="home">        
        </div>
        <div class="reseaux">
            <a class="fb_insta" href="https://www.facebook.com/profile.php?id=100086930124117"><i class="fa-brands fa-facebook"></i></a>
            <a class="fb_insta" href="https://www.instagram.com/skfamilyevents/"><i class="fa-brands fa-instagram"></i></a>      
            <div class="contact">
                <button type="button" class="button-contact" @click.prevent="contact">Me contacter</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HeaderComponent',
    methods: {
        contact (){
            this.$router.push(`contact/`)
        }, 
        home(){
            this.$router.push('/')
        }
    }
}

</script>

<style lang="scss" scoped>
    div.header{
        display:flex;
        justify-content: space-between;
        div.logo{
            img{
                width: 200px;
                height: 200px;
                cursor:pointer;
            } 
        }
        div.reseaux{
            font-size: 30px;
            display: flex;
            justify-content:flex-end;
            align-items:baseline;
            .fb_insta{
                margin-right: 20px;
                color:#5b4e46;
            }
            
        }
        div.contact{
            margin-top: 10px;
            margin-right: 40px;

            .button-contact{
                font-size: 30px;
                font-family: "Raleway",arial,sans-serif;
                border: 0.5px solid;
                border-radius: 10px;
                border-color: #c9bf93;
                background-color: white;
                color:#5b4e46 ;
                padding: 10px;
                margin: 5px;
            }
                
            .button-contact:hover{
                color:#9c9490;
                cursor: pointer;

            }

            .reseaux:hover{
                cursor: pointer;
            }
        }
        
    }
</style>