<template>
  <v-layout row>
    <v-layout column>
      <v-flex md6 xs12>
        <!-- TODO: ImageSlider -->
        <div class="carousel">
          <img class="card1" src="https://img.scryfall.com/cards/large/en/rix/53.jpg?1509359980" alt="">
          <img class="card2" src="https://img.scryfall.com/cards/large/en/rix/53.jpg?1509359980" alt="">
          <img class="card3" src="https://img.scryfall.com/cards/large/en/rix/53.jpg?1509359980" alt="">
        </div>
      </v-flex>
      <v-flex md6 xs12>
        <!-- TODO: Card Info -->
        
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  name: 'CardSlider',
  data() {
    return {

    }
  }
}
</script>

<style>
  .carousel {
  width: 80%;
  height: 386px;
  border: 0;
  margin: 0 auto
}

.card1  {
  cursor: pointer;
  display: inline; left: 66.8px; top: 62.1px; visibility: visible; position: absolute; z-index: 4; opacity: 0.9; width: 183.4px; height: 261.8px;
}

.card2 {
  cursor: pointer;
  display: inline;
  left: 140.5px; 
  top: 6px; 
  visibility:visible; 
  position:absolute;
  z-index: 5;
  opacity: 1; 
  width: 262px; 
  height: 374px;
}

.card3 {
  cursor: pointer;
  display: inline;
  left: 292.8px; 
  top: 62.1px;
  visibility: visible;
  position: absolute; 
  z-index: 4; 
  opacity: 0.9; 
  width: 183.4px; 
  height: 261.8px;
}

.carouselBtn:before {
  width: 0;
  height: 0;
  border-style:solid;
  border-width:23px 0 23px 25px;
  border-color: transparent transparent transparent #c2c2c2;
  position: absolute;
  margin-top: -25px;
  top: 50%;
  right: 20px
}

img {
  
}
</style>
