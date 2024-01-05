<template>
  <div class="carousel-box">
    <div class="carousel-container">
      <h1 class="carousel-title">Choose Your Favorites.</h1>

      <Carousel
        :breakpoints="breakpoints"
        :itemsToShow="2"
        :wrapAround="true"
        transition="500"
        autoplay="3000"
        pauseAutoplayOnHover
        class="gem-carousel"
      >
        <Slide v-for="slide in images" :key="slide.name">
          <div class="slide-content">
            <img :src="slide.image" alt="Image" class="gem-image" />
            <h2 class="gem-title">{{ slide.name }} Gems Stone</h2>
            <div class="description-box">
              <p class="gem-description">{{ slide.description }}</p>
            </div>
            <div class="link-box">
              <a href="#" class="learn-more">— Learn more</a>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>
  
  <script>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import image1 from '@/assets/images/pngwing1.png'
import image2 from '@/assets/images/pngwing2.png'
import image3 from '@/assets/images/pngwing3.png'
import image4 from '@/assets/images/pngwing1.png'
import image5 from '@/assets/images/pngwing2.png'

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },

  data() {
    return {
      breakpoints: {
        700: {
          // For screens 700px and wider
          itemsToShow: 3,
          snapAlign: 'center'
        }
      },

      // images: [image1, image2, image3, image4, image5  ]

      images: [
        {
          name: 'Chrysoberyl',
          image: image1,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        },
        {
          name: 'Ruby',
          image: image2,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        },
        {
          name: 'Chrysoberyl',
          image: image3,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        },
        {
          name: 'Ruby',
          image: image1,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        },
        {
          name: 'Chrysoberyl',
          image: image2,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        },
        {
          name: 'Ruby',
          image: image3,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
/* .carousel__next {
    background-color: grey;
    border-radius: 50%;
} */

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
  padding-bottom: 5px;
  /* background-color: #FFF; */
}

.carousel-title {
  font-size: 2em;
  margin-bottom: 1em;
  font-family: Sorts Mill Goudy;
}

.gem-carousel .carousel__slide {
  padding: 20px;
  background-color: #fbfbfb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  opacity: 1;
  /* opacity: 0.9; */
  transform: rotateY(-20deg) scale(0.85);
}

.gem-carousel .carousel__slide--active {
  transform: scale(1.03);
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
}

.link-box {
  background: #dfac93;
  color: white;
  padding: 5px;
  /* margin-bottom: 5em; */
  margin: 0.5em 5em;
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
  /* .carousel__navigation {
  display: none;
} */
  .carousel__pagination {
    margin: 12px 0px;
    display: flex;
    /* width: 100%; */
  }

  .gem-title,
  .gem-description {
    word-wrap: break-word;
    box-sizing: border-box;
    margin: 15px 0;
  }

  .link-box {
    margin: 0.3em;
    font-size: 0.7em;
    padding: 5px;
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