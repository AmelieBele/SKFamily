<template>    
    <div class="footer">
       <p>Retrouvez moi sur mes différents reseaux sociaux !</p>
       <p class="reseaux">
            <a class="fb_insta" href="https://www.facebook.com/profile.php?id=100086930124117"><i class="fa-brands fa-facebook"></i></a>
            <a class="fb_insta" href="https://www.instagram.com/skfamilyevents/"><i class="fa-brands fa-instagram"></i></a>      
        </p>
    </div>
</template>

<script>

export default {
    name: 'FooterComponent',
    methods: {
        contact (){
            
        }
    }
}

</script>

<style lang="scss" scoped>
    .footer{
        margin-top:200px;
        text-align:center;
        font-family: "Cinzel Decorative", "Times", sans-serif;
        color:#5b4e46;
        font-weight: 600;
    }
    .fb_insta{
      margin-right: 20px;
      color:#5b4e46;
      font-size: 40px;

    }
</style>