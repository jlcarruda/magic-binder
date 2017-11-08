<template>
  <v-layout row v-once>
    <v-layout column>
      <v-flex md6 xs12>
        <div id="carousel">
          <img v-for="card in cardlist" :key="card.id" :id="card.id" class="card" :src="card.src">
            <!-- <img :id="card.id" :src="card.src" :style="card.style"> -->
          <!-- </img> -->
        </div>
      </v-flex>
      <v-flex md6 xs12>
        <!-- TODO: Card Info -->
        
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>

let list = [
  {
    src: '/public/card.jpg'    
  },
  {
    src: '/public/card.jpg'    
  },
  {
    src: '/public/card.jpg'    
  },
  {
    src: '/public/card.jpg'    
  },
  {
    src: '/public/card.jpg'    
  }
]

export default {
  name: 'CardSlider',
  data() {
    return {
      cardlist: list
    }
  },
  mounted: () => {
    console.log($('#carousel'));
    let space = Math.round($('#carousel').width()/4.8);
    $(document).ready( () => {
      $('#carousel').waterwheelCarousel({ 
        flankingItems: 4,
        activeClassName:'carousel-center',
        separation: space,
        // movedToCenter: function() {
        //     changeCardInfo();
        // }
      })
    })  
  }
}
</script>

<style>
  #carousel {
  width: 80%;
  height: 500px;
  border: 0;
  margin: 0 auto
}

 #carousel img {
    display: hidden; /* hide images until carousel prepares them */
    cursor: pointer; /* not needed if you wrap carousel items in links */
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

.card {
  width: 274px;
  height:378px;
}

</style>
