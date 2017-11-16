<template>
  <v-layout row >
    <v-layout column>
      <v-flex md6 xs12>
        <button @click="getCards">PEGAR CARTAS</button>
        <div id="carousel">
          <img v-for="card in cardlist" :key="card.id" :id="card.id" class="card" :src="card.image_uris.normal">
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
// import {API} from '../http-common'
import axios from 'axios';

let card = { object: 'card',
  id: '39d3c658-1927-4af3-9077-88c4a669c730',
  multiverse_id: 435308,
  multiverse_ids: [ 435308 ],
  mtgo_id: 65324,
  name: 'Rampaging Ferocidon',
  uri: 'https://api.scryfall.com/cards/xln/154',
  scryfall_uri: 'https://scryfall.com/card/xln/154?utm_source=api',
  layout: 'normal',
  highres_image: true,
  image_uris:
   { small: 'https://img.scryfall.com/cards/small/en/xln/154.jpg?1509308902',
     normal: 'https://img.scryfall.com/cards/normal/en/xln/154.jpg?1509308902',
     large: 'https://img.scryfall.com/cards/large/en/xln/154.jpg?1509308902',
     png: 'https://img.scryfall.com/cards/png/en/xln/154.png?1509308902',
     art_crop: 'https://img.scryfall.com/cards/art_crop/en/xln/154.jpg?1509308902',
     border_crop: 'https://img.scryfall.com/cards/border_crop/en/xln/154.jpg?1509308902' },
  cmc: 3,
  type_line: 'Creature — Dinosaur',
  oracle_text: 'Menace\nPlayers can\'t gain life.\nWhenever another creature enters the battlefield, Rampaging Ferocidon deals 1 damage to that creature\'s controller.',
  mana_cost: '{2}{R}',
  power: '3',
  toughness: '3',
  colors: [ 'R' ],
  color_identity: [ 'R' ],
  legalities:
   { standard: 'legal',
     frontier: 'legal',
     modern: 'legal',
     pauper: 'not_legal',
     legacy: 'legal',
     penny: 'not_legal',
     vintage: 'legal',
     duel: 'legal',
     commander: 'legal',
     '1v1': 'legal',
     future: 'legal' },
  reserved: false,
  reprint: false,
  set: 'xln',
  set_name: 'Ixalan',
  set_uri: 'https://api.scryfall.com/cards/search?q=%2B%2Be%3Axln',
  set_search_uri: 'https://api.scryfall.com/cards/search?q=%2B%2Be%3Axln',
  scryfall_set_uri: 'https://scryfall.com/sets/xln?utm_source=api',
  prints_search_uri: 'https://api.scryfall.com/cards/search?order=set&q=%2B%2B%21%22Rampaging+Ferocidon%22',
  collector_number: '154',
  digital: false,
  rarity: 'rare',
  flavor_text: 'All raptors are aggressive, but ferocidons seem to enjoy their prey\'s pain.',
  illustration_id: '0d6f1f3a-0bc6-4b90-a23a-3110ffd3f4ee',
  artist: 'Jonathan Kuo',
  frame: '2015',
  full_art: false,
  border_color: 'black',
  timeshifted: false,
  colorshifted: false,
  futureshifted: false,
  edhrec_rank: 387,
  usd: '4.11',
  tix: '1.45',
  eur: '2.72',
  related_uris:
   { gatherer: 'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=435308',
     tcgplayer_decks: 'http://decks.tcgplayer.com/magic/deck/search?contains=Rampaging+Ferocidon&page=1&partner=Scryfall',
     edhrec: 'http://edhrec.com/route/?cc=Rampaging+Ferocidon',
     mtgtop8: 'http://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Rampaging+Ferocidon' },
  purchase_uris:
   { amazon: 'https://www.amazon.com/gp/search?ie=UTF8&index=toys-and-games&keywords=Rampaging+Ferocidon&tag=scryfall-20',
     ebay: 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5337966903&icep_catId=19107&icep_ff3=10&icep_sortBy=12&icep_uq=Rampaging+Ferocidon&icep_vectorid=229466&ipn=psmain&kw=lg&kwid=902099&mtid=824&pub=5575230669&toolid=10001',
     tcgplayer: 'http://store.tcgplayer.com/magic/ixalan/rampaging-ferocidon?partner=Scryfall',
     magiccardmarket: 'https://www.cardmarket.com/Magic/Products/Singles/Ixalan/Rampaging+Ferocidon?referrer=scryfall',
     cardhoarder: 'https://www.cardhoarder.com/cards/65324?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall'
,
     card_kingdom: 'https://www.cardkingdom.com/catalog/item/214050?partner=scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall',
     mtgo_traders: 'http://www.mtgotraders.com/deck/ref.php?id=65324&referral=scryfall',
     coolstuffinc: 'http://www.coolstuffinc.com/p/Magic%3A+The+Gathering/Rampaging+Ferocidon?utm_source=scryfall' } }

let list = [
  
]

export default {
  name: 'CardSlider',
  // list: [],
  data() {
    return {
      cardlist: list
    }
  },
  methods: {
    getCards() {
      axios.get('http://localhost:3000/card?name=jace+the+mindsculptor', {
        header: {
          'Access-Control-Allow-Origin': 'localhost'
        },
        responseType: 'text'
      })
      .then( res => {
        list.push(res.data);
        console.log(list);
      }).catch( err => {
        console.log('ERROR', err);
      })
    }
  } ,
  mounted: () => {
    let self = this;
    // this.getCards();
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
  },
  updated: () => {
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
