<template>
  <div class="carousel-box">
    <div class="carousel-container">
      <h1 class="carousel-title">{{ $t('gemsFavoriteSection.title') }}</h1>

      <Carousel
        :breakpoints="breakpoints"
        :itemsToShow="2"
        :wrapAround="true"
        :transition="500"
        :autoplay="3000"
        pauseAutoplayOnHover
        class="gem-carousel"
      >
        <Slide v-for="slide in data" :key="slide.name">
          <div class="slide-content">
            <img :src="slide.image" alt="`Image of ${slide.name}`" class="gem-image" />
            <h2 class="gem-title">{{ slide.name }}</h2>
            <div class="description-box">
              <p class="gem-description">{{ slide.description }}</p>
            </div>
            <div class="link-box">
              <a href="#" class="learn-more">— {{ $t('gemsFavoriteSection.learnMore') }}</a>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation>
            <template #next>

              <!-- <div class="nav-button-container">
                <img src="@/assets/icons/arrow-right.svg" alt="move right" class="w-7 h-7 nav_icon" />
              </div> -->
              <!-- <img src="@/assets/icons/ellipse.svg" alt="move right" class="w-7 h-7 nav_icon" /> -->
              <img src="@/assets/icons/arrow-right.svg" alt="move right" class="w-7 h-7 nav_icon" />
              <!-- <span class="nav_icon"> > </span> -->
            </template>
            <template #prev>
              <img src="@/assets/icons/arrow-left.svg" alt="move left" class="w-7 h-7" />
              <!-- <span class="nav_icon"> < </span> -->
           </template>
          </Navigation>
          <pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>
  
  <script>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,

  },
  props: {
    slidesData: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      breakpoints: {
        768: {
          itemsToShow: 3,
          snapAlign: 'center'
        }
      },
      data: this.slidesData
    }
  }
}
</script>

<style lang="css">

/* .carousel__prev,
.carousel__next {
  background-color: #FAFAFA;
  border-radius: 50%;
} */

/* .nav_icon{
  font-size: 60px;
  font-weight: 100;
  color: #ADADAD;
} */

/* .nav-icon {
  width: 24px;
  height: 24px;
} */

/* .nav-button-container {
  background-image: url('@/assets/icons/ellipse.svg');
  width: 10rem;  
  height: 10rem; 
  display: flex;
  justify-content: center;
  align-items: center;
} */

.carousel__prev {
  left: -45px;
}

.carousel__next {
  right: -45px;
}

.carousel-box {
  width: auto;
  background-color: #fff;
}

.learn-more {
  font-family: Song Myung;
}

.carousel__pagination {
  display: none;
}
.carousel-container {
  max-width: 1000px;
  margin: auto;
  text-align: center;
  padding-bottom: 50px;
}

.carousel-title {
  font-size: 51.749px;
  margin-bottom: 1em;
  font-weight: 400;
  font-family: Sorts Mill Goudy;
  padding-top: 1.5em;
}

.gem-carousel .carousel__slide {
  padding: 20px;
  background-color: #fbfbfb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  transform: rotateY(-20deg) scale(0.88);
}

.gem-carousel .carousel__slide--active {
  transform: scale(1);
  opacity: 1;
}

.gem-image {
  display: block;
  max-width: 100%;
  border-radius: 50%;
  margin-bottom: 2em;
  margin: 0 auto;
}

.gem-title {
  font-size: 1.3em;
  color: #333;
  margin-bottom: 0.5em;
  font-family: Sorts Mill Goudy;
}

.gem-description {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 3em;
  font-family: Sorts Mill Goudy;
  line-height: 1.5em;
}

.link-box {
  background: #dfac93;
  color: white;
  display: inline;
  padding: 8px 12px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}
.carousel__icon .carousel__next {
  background-color: blue;
}

@media (max-width: 768px) {
  .carousel__navigation,
  .carousel__next,
  .carousel__prev {
    display: none;
  }

  .carousel__pagination {
    margin: 12px 0px;
    display: flex;
  }

  .gem-title,
  .gem-description {
    word-wrap: break-word;
    box-sizing: border-box;
    margin: 15px 0;
  }

  .link-box {
    font-size: 0.8em;
  }

  .gem-image {
    max-width: 80%;
  }

  .carousel-title {
    font-size: 1.5em;
  }

  .gem-title {
    font-size: 0.7em;
  }

  .gem-description {
    font-size: 0.7em;
  }
}
</style>