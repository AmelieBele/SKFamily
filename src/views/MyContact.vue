
<template>
  <div class="container">
    <div class="logo">
            <img src="../../images/logo_sk.jpg" alt="logo du site" @click.prevent="home">        
    </div>
    <div class="contact">
        <p class="me_contacter">Me contacter</p>
        <div class="infos">
          <p>skfamilyevents@gmail.com</p>
          <p>06.33.27.75.22 </p>
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

  }
    
</style>
