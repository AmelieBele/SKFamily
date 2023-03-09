
<template>
  <div class="container">
    <div class="contact">
        <p class="me_contacter">Mes coordonnés</p>
        <div class="infos">
          <p><a href="mailto:skfamilyevents@gmail.com">skfamilyevents@gmail.com</a></p>
          <p><a href="tel:33633277522">06.33.27.75.22 </a></p>
          <a href="http://calendly.com/skfamilyevents">Pour plus d'informations ou effectuer un devis, cliquez ici !</a>
          <p class="reseaux">
            <a class="fb_insta" href="https://www.facebook.com/profile.php?id=100086930124117"><i class="fa-brands fa-facebook"></i></a>
            <a class="fb_insta" href="https://www.instagram.com/skfamilyevents/"><i class="fa-brands fa-instagram"></i></a>      
          </p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyContact',
  components: {
    },
    methods: {
        home (){
            this.$router.push(`/`)
        }
    }
}

</script>
<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items:center;
    div.logo{
        img{
            width: 200px;
            height: 200px;
            margin-bottom: 100px;
        } 
        
        img:hover{
          cursor: pointer;
        }
    }

    .contact{
      border: 1px solid #c9bf93;
      border-radius: 20px;
      width:50%;
    }
    .me_contacter{
      text-align: center;
      font-size: 50px;
      font-weight: 500;
      color:#5b4e46;
      margin-bottom:100px;
    }
    .infos{
      text-align: center;
      font-size: 35px;
      font-weight: 500;
      color:#5b4e46;
     
    }
    .fb_insta{
      margin-right: 20px;
      color:#5b4e46;
      font-size: 40px;
    }
    a{
      text-decoration: none;
      color:#5b4e46;
    }
    a:hover {
      color:#9c9490;
    }
  }
    
</style>
