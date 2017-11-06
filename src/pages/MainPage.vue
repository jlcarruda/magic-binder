<template>
<main>
  <v-content>
    <!-- Parallax -->
    <v-section fluid>
      <v-parallax class="parallax" height="550" src="/public/frontpage.jpg">
        <v-layout column align-center justify-center>
          <div class="image-mask"></div>
          <h1 class="white--text">Magic Binder</h1>
          <h4 class="white--text">Marketplace de Cartas usadas</h4>
            
        </v-layout>
      </v-parallax>
    </v-section>

      <!-- Mais Vendidas -->
    <v-section fluid>
      <v-layout column id="mais-vendidos">
        
        <v-layout row wrap align-center justify-center id="mais-vendidos-title">
          <h3 class="ma-5 text-xs-center">Mais vendidas</h3>
        </v-layout>

        <v-layout row wrap id="mais-vendidos-cardslider">
          <img src="https://img.scryfall.com/cards/large/en/rix/53.jpg?1509359980" alt="">
          <!-- TODO: Adicionar o Cardslider -->
        </v-layout>

      </v-layout>
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