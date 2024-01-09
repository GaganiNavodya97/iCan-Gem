<template>
  <div class="container mx-auto px-4 bg-[#F6F4F2] py-1">
    <h1 class="text-2xl text-center mt-4 text-[#DFAC93] font-Montserrat">NEW IN</h1>
    <h1 class="text-5xl text-center my-3 text-[#051F34] font-goudy">New Collection.</h1>
    <p class="text-center text-lg mb-12 text-[#051F34A8] font-goudy">
      Shine bright in our new 2024 collection of fine jewellery!
    </p>

    <div class="text-center mb-8 mx-10">
      <button
        v-for="category in categories"
        :key="category"
        class="hover:text-[#DFAC93] mx-4 font-Montserrat"
        :class="{
          'border-b-2': selectedCategory === category,
          'border-gray-500': selectedCategory === category
        }"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <hr />

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:px-8 mt-4">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
    <div class="text-center my-8 font-Montserrat">
      <button class="text-[#DFAC93] font-bold py-2 px-4 hover:bg-[white] underline">
        VIEW ALL
      </button>
    </div>
  </div>
</template>
  
  <script>
import ProductCard from '@/components/productCard.vue'

import aquamarine from '@/assets/images/gems/aquamarine.webp'
import Chrysoberyl from '@/assets/images/gems/Chrysoberyl.webp'
import blueSapphire from '@/assets/images/gems/blueSapphire.webp'
import emerald from '@/assets/images/gems/emerald.webp'
import tsavorite from '@/assets/images/gems/tsavorite.webp'
import ruby from '@/assets/images/gems/ruby.png'

import rubyRings from '@/assets/images/rings/rubyRings.webp'
import sapphireRings from '@/assets/images/rings/sapphireRings.webp'
import tsavoriteRings from '@/assets/images/rings/tsavoriteRings.webp'


export default {
  name: 'ProductCollection',
  components: {
    ProductCard
  },
  data() {
    return {
      selectedCategory: 'Earrings',
    //   categories: ['Earrings', 'Rings', 'Necklaces'],
      gems: [
        {
          id: 1,
          name: 'aquamarine',
          href: '#',
          price: '$48',
          imageSrc: aquamarine,
          imageAlt:
            'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
        },
        {
          id: 2,
          name: 'Chrysoberyl',
          href: '#',
          price: '$35',
          imageSrc: Chrysoberyl,
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
        },
        {
          id: 3,
          name: 'blueSapphire',
          href: '#',
          price: '$89',
          imageSrc: blueSapphire,
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
        },
        {
          id: 4,
          name: 'emerald',
          href: '#',
          price: '$35',
          imageSrc: emerald,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 5,
          name: 'tsavorite',
          href: '#',
          price: '$35',
          imageSrc: tsavorite,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 6,
          name: 'ruby',
          href: '#',
          price: '$35',
          imageSrc: ruby,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 7,
          name: 'blueSapphire',
          href: '#',
          price: '$35',
          imageSrc: blueSapphire,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 8,
          name: 'aquamarine',
          href: '#',
          price: '$35',
          imageSrc: aquamarine,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        }
      ],
      rings: [
        {
          id: 1,
          name: 'rubyRings',
          href: '#',
          price: '$48',
          imageSrc: rubyRings,
          imageAlt:
            'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
        },
        {
          id: 2,
          name: 'sapphireRings',
          href: '#',
          price: '$35',
          imageSrc: sapphireRings,
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
        },
        {
          id: 3,
          name: 'tsavoriteRings',
          href: '#',
          price: '$89',
          imageSrc: tsavoriteRings,
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
        },
        {
          id: 4,
          name: 'rubyRings',
          href: '#',
          price: '$35',
          imageSrc: rubyRings,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 5,
          name: 'tsavorite',
          href: '#',
          price: '$35',
          imageSrc: tsavorite,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 6,
          name: 'tsavoriteRings',
          href: '#',
          price: '$35',
          imageSrc: tsavoriteRings,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 7,
          name: 'blueSapphire',
          href: '#',
          price: '$35',
          imageSrc: blueSapphire,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 8,
          name: 'aquamarine',
          href: '#',
          price: '$35',
          imageSrc: aquamarine,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        }
      ],

      products: {
        "Earrings": [
        {
          id: 1,
          name: 'aquamarine',
          href: '#',
          price: '$48',
          imageSrc: aquamarine,
          imageAlt:
            'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
        },
        {
          id: 2,
          name: 'Chrysoberyl',
          href: '#',
          price: '$35',
          imageSrc: Chrysoberyl,
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
        },
        {
          id: 3,
          name: 'blueSapphire',
          href: '#',
          price: '$89',
          imageSrc: blueSapphire,
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
        },
        {
          id: 4,
          name: 'emerald',
          href: '#',
          price: '$35',
          imageSrc: emerald,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 5,
          name: 'tsavorite',
          href: '#',
          price: '$35',
          imageSrc: tsavorite,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 6,
          name: 'ruby',
          href: '#',
          price: '$35',
          imageSrc: ruby,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 7,
          name: 'blueSapphire',
          href: '#',
          price: '$35',
          imageSrc: blueSapphire,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 8,
          name: 'aquamarine',
          href: '#',
          price: '$35',
          imageSrc: aquamarine,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        }
      ],
      "Rings": [
        {
          id: 1,
          name: 'rubyRings',
          href: '#',
          price: '$48',
          imageSrc: rubyRings,
          imageAlt:
            'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
        },
        {
          id: 2,
          name: 'sapphireRings',
          href: '#',
          price: '$35',
          imageSrc: sapphireRings,
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
        },
        {
          id: 3,
          name: 'tsavoriteRings',
          href: '#',
          price: '$89',
          imageSrc: tsavoriteRings,
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
        },
        {
          id: 4,
          name: 'rubyRings',
          href: '#',
          price: '$35',
          imageSrc: rubyRings,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 5,
          name: 'tsavorite',
          href: '#',
          price: '$35',
          imageSrc: tsavorite,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 6,
          name: 'tsavoriteRings',
          href: '#',
          price: '$35',
          imageSrc: tsavoriteRings,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 7,
          name: 'blueSapphire',
          href: '#',
          price: '$35',
          imageSrc: blueSapphire,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 8,
          name: 'aquamarine',
          href: '#',
          price: '$35',
          imageSrc: aquamarine,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        }
      ],
      "Necklaces": [
        {
          id: 1,
          name: 'rubyRings',
          href: '#',
          price: '$48',
          imageSrc: tsavoriteRings,
          imageAlt:
            'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
        },
        {
          id: 2,
          name: 'sapphireRings',
          href: '#',
          price: '$35',
          imageSrc: tsavoriteRings,
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
        },
        {
          id: 3,
          name: 'tsavoriteRings',
          href: '#',
          price: '$89',
          imageSrc: tsavoriteRings,
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
        },
        {
          id: 4,
          name: 'rubyRings',
          href: '#',
          price: '$35',
          imageSrc: rubyRings,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 5,
          name: 'tsavorite',
          href: '#',
          price: '$35',
          imageSrc: tsavorite,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 6,
          name: 'tsavoriteRings',
          href: '#',
          price: '$35',
          imageSrc: tsavoriteRings,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 7,
          name: 'blueSapphire',
          href: '#',
          price: '$35',
          imageSrc: blueSapphire,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        },
        {
          id: 8,
          name: 'aquamarine',
          href: '#',
          price: '$35',
          imageSrc: aquamarine,
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
        }
      ],
      }
    }
  },
  computed: {
    categories() {
      return Object.keys(this.products);
    },
    // products() {
    //   return this.selectedCategory;
    // }
    filteredProducts() {
      return this.products[this.selectedCategory];
    }
  }
}
</script>
  