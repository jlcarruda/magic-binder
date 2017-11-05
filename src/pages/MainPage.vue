<template>
<main>
  <v-content>
    <v-section  fluid>
      <v-parallax class="parallax" height="550" src="/public/frontpage.jpg">
        <v-layout column align-center justify-center>
            <div class="image-mask"></div>
            <h1 class="white--text">Magic Binder</h1>
            <h4 class="white--text">Marketplace de Cartas usadas</h4>
            
        </v-layout>
      </v-parallax>
      <!-- <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
          <blockquote>
            &#8220;First, solve the problem. Then, write the code.&#8221;
            <footer>
              <small>
                <em>&mdash;John Johnson</em>
              </small>
            </footer>
          </blockquote>
        </v-layout>
      </v-slide-y-transition> -->
    </v-section>
  </v-content>
</main>
</template>

<script>
export default {

}
</script>

<style>
  .parallax{
    height:550px;
    filter: blur(0.5px) grayscale(0.8);
  }

  .parallax h1, h4{
    z-index: 2;
  }

  .parallax-search{

  }

  .image-mask {  
    padding:10px;
    position:absolute;
    width: 100%;
    height: 550px;
    background-color:black;
    opacity:0.5;    /* -> transparency 50% */
    z-index:1;      /* -> put overlay over image */
  }
  
</style>