<script lang="ts">
import PageBanner from '@/components/PageBanner.vue';
import { useGameStore } from '@/stores/game';
import { mapState } from 'pinia';

interface Game {
  id: number;
  name: string;
  image: string;
  price?: number;
  discountPrice?: number | string;
  mostPlayed?: boolean;
  isTrending?: boolean;
  category: {
    id: string | number;
    name: string;
  };
  tags?: string[] | string;
  description?: string
}

export default {
  components: {
    PageBanner
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      game: undefined as unknown as Game
    }
  },
  computed: {
    ...mapState(useGameStore, ['games'])
  },
  mounted() {
    this.game = this.games.find(game => game.id === +this.id)!
  },
  watch: {
    id() {
      this.game = this.games.find(game => game.id === +this.id)!
    }
  }
}
</script>

<template>
  <main>

    <div v-if="game">

      <PageBanner :name="game.name" />


      <div class="single-product section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="left-image">
                <img :src="game.image" alt="">
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <h4>{{ game.name }}</h4>
              <span class="price"><em>${{ game.price }}</em></span>
              <span v-if="game.discountPrice || game.discountPrice === 0">${{
                game.discountPrice
                }}</span>
              <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by
                TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any
                purpose. Thank you.</p>
              <form id="qty" action="#">
                <input type="qty" class="form-control" id="1" aria-describedby="quantity" placeholder="1">
                <button type="submit"><i class="fa fa-shopping-bag"></i> ADD TO CART</button>
              </form>
              <ul>
                <li><span>Game ID:</span> {{ game.id }}</li>
                <li><span>Genre:</span> {{ game.category.name }}</li>
                <li v-if="game.tags?.length"><span>Multi-tags:</span> {{ game.tags }}</li>
              </ul>
            </div>
            <div class="col-lg-12">
              <div class="sep"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="more-info">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="tabs-content">
                <div class="row">
                  <div class="nav-wrapper ">
                    <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="description-tab" data-bs-toggle="tab"
                          data-bs-target="#description" type="button" role="tab" aria-controls="description"
                          aria-selected="true">Description</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews"
                          type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews (3)</button>
                      </li>
                    </ul>
                  </div>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="description" role="tabpanel"
                      aria-labelledby="description-tab">
                      <p v-if="game.description" v-html="game.description"></p>
                      <br>
                    </div>
                    <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                      <p>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated
                        charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb
                        poutine next level humblebrag la croix adaptogen. <br><br>Hashtag poke literally locavore, beard
                        marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings
                        3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim
                        chillwave tousled try-hard succulents street art.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>
