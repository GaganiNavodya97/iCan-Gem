<template>
  <div class="container mx-auto px-4 bg-[#F6F4F2] py-1">
    <h1 class="text-2xl text-center mt-4 text-[#DFAC93] font-Montserrat">{{ $t('addCart.newIn') }}</h1>
    <h1 class="text-[51.749px] font-normal text-center my-3 text-[#051F34] font-goudy">
      {{ $t('addCart.newCollection') }}
    </h1>
    <p class="text-center text-[27.165px] mb-12 text-[#051F34A8] font-goudy">
      {{ $t('addCart.description') }}
    </p>

    <div class="text-center mb-8 mx-0">
      <button
        v-for="category in categories"
        :key="category"
        class="hover:text-[#DFAC93] mx-3 font-Montserrat leading-10"
        :class="{
          'border-b-2': selectedCategory === category,
          'border-gray-500': selectedCategory === category
        }"
        @click="
          selectedCategory = category,
          categoryChange()
        "
      >
      {{ $t(`addCart.${category}`) }} 
      </button>
    </div>

    <hr class="-mt-8" />

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:px-8 mt-4">
      <!-- <ProductCard v-for="product in items" :key="product.id" :product="product" /> -->
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
    <div class="text-center my-8 font-Montserrat">
      <button class="text-[#DFAC93] font-bold py-2 px-4 hover:bg-[white] underline">
        {{ $t('addCart.viewAll') }}
      </button>
    </div>
  </div>
</template>
  
  <script>
import ProductCard from '@/components/productCard.vue'
import api from '@/plugins/axios'

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
      items: [],
      necklaces: [],
      rings: [],
      earings:[],
      categories: ['Earrings', 'Rings', 'Necklaces'],
      filteredProducts: [],
      // gems: [
      //   {
      //     id: 1,
      //     name: 'aquamarine',
      //     href: '#',
      //     price: '$48',
      //     imageSrc: aquamarine,
      //     imageAlt:
      //       'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
      //   },
      //   {
      //     id: 2,
      //     name: 'Chrysoberyl',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: Chrysoberyl,
      //     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
      //   },
      //   {
      //     id: 3,
      //     name: 'blueSapphire',
      //     href: '#',
      //     price: '$89',
      //     imageSrc: blueSapphire,
      //     imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
      //   },
      //   {
      //     id: 4,
      //     name: 'emerald',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: emerald,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   },
      //   {
      //     id: 5,
      //     name: 'tsavorite',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: tsavorite,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   },
      //   {
      //     id: 6,
      //     name: 'ruby',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: ruby,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   },
      //   {
      //     id: 7,
      //     name: 'blueSapphire',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: blueSapphire,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   },
      //   {
      //     id: 8,
      //     name: 'aquamarine',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: aquamarine,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   }
      // ],
      // rings: [
      //   {
      //     id: 1,
      //     name: 'rubyRings',
      //     href: '#',
      //     price: '$48',
      //     imageSrc: rubyRings,
      //     imageAlt:
      //       'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
      //   },
      //   {
      //     id: 2,
      //     name: 'sapphireRings',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: sapphireRings,
      //     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
      //   },
      //   {
      //     id: 3,
      //     name: 'tsavoriteRings',
      //     href: '#',
      //     price: '$89',
      //     imageSrc: tsavoriteRings,
      //     imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
      //   },
      //   {
      //     id: 4,
      //     name: 'rubyRings',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: rubyRings,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   },
      //   {
      //     id: 5,
      //     name: 'tsavorite',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: tsavorite,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   },
      //   {
      //     id: 6,
      //     name: 'tsavoriteRings',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: tsavoriteRings,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   },
      //   {
      //     id: 7,
      //     name: 'blueSapphire',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: blueSapphire,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   },
      //   {
      //     id: 8,
      //     name: 'aquamarine',
      //     href: '#',
      //     price: '$35',
      //     imageSrc: aquamarine,
      //     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //   }
      // ],

      // products: {
      //   Earrings: [
      //     {
      //       id: 1,
      //       name: 'aquamarine',
      //       href: '#',
      //       price: '$48',
      //       imageSrc: aquamarine,
      //       imageAlt:
      //         'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
      //     },
      //     {
      //       id: 2,
      //       name: 'Chrysoberyl',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: Chrysoberyl,
      //       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
      //     },
      //     {
      //       id: 3,
      //       name: 'blueSapphire',
      //       href: '#',
      //       price: '$89',
      //       imageSrc: blueSapphire,
      //       imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
      //     },
      //     {
      //       id: 4,
      //       name: 'emerald',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: emerald,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 5,
      //       name: 'tsavorite',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: tsavorite,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 6,
      //       name: 'ruby',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: ruby,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 7,
      //       name: 'blueSapphire',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: blueSapphire,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 8,
      //       name: 'aquamarine',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: aquamarine,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     }
      //   ],
      //   Rings: [
      //     {
      //       id: 1,
      //       name: 'rubyRings',
      //       href: '#',
      //       price: '$48',
      //       imageSrc: rubyRings,
      //       imageAlt:
      //         'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
      //     },
      //     {
      //       id: 2,
      //       name: 'sapphireRings',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: sapphireRings,
      //       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
      //     },
      //     {
      //       id: 3,
      //       name: 'tsavoriteRings',
      //       href: '#',
      //       price: '$89',
      //       imageSrc: tsavoriteRings,
      //       imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
      //     },
      //     {
      //       id: 4,
      //       name: 'rubyRings',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: rubyRings,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 5,
      //       name: 'tsavorite',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: tsavorite,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 6,
      //       name: 'tsavoriteRings',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: tsavoriteRings,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 7,
      //       name: 'blueSapphire',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: blueSapphire,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 8,
      //       name: 'aquamarine',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: aquamarine,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     }
      //   ],
      //   Necklaces: [
      //     {
      //       id: 1,
      //       name: 'rubyRings',
      //       href: '#',
      //       price: '$48',
      //       imageSrc: tsavoriteRings,
      //       imageAlt:
      //         'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
      //     },
      //     {
      //       id: 2,
      //       name: 'sapphireRings',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: tsavoriteRings,
      //       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.'
      //     },
      //     {
      //       id: 3,
      //       name: 'tsavoriteRings',
      //       href: '#',
      //       price: '$89',
      //       imageSrc: tsavoriteRings,
      //       imageAlt: 'Person using a pen to cross a task off a productivity paper card.'
      //     },
      //     {
      //       id: 4,
      //       name: 'rubyRings',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: rubyRings,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 5,
      //       name: 'tsavorite',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: tsavorite,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 6,
      //       name: 'tsavoriteRings',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: tsavoriteRings,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 7,
      //       name: 'blueSapphire',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: blueSapphire,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     },
      //     {
      //       id: 8,
      //       name: 'aquamarine',
      //       href: '#',
      //       price: '$35',
      //       imageSrc: aquamarine,
      //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.'
      //     }
      //   ]
      // }
    }
  },
  computed: {
    //categories() {
    //  return Object.keys(this.products)
    //},
    // filteredProducts() {
    // //   return this.products[this.selectedCategory]
    // }
  },

  methods: {
    async getData(categoryId) {
      try {
        const response = await api.get(
          `prod/pageProd?regionId=659006000343&categoryId=${categoryId}&current=1&size=8`
        )
        this.data = response.data.records
        console.log('response : ', response.data)
        console.log('this.data : ', this.data)
        // this.filteredProducts=this.data;
        await this.filterData()
        console.log('items ', this.items)
      } catch (error) {
        console.error('error fetching product data!', error)
      }
    },

    filterData() {
      this.data.forEach((element) => {
        this.items.push({
          id: element.prodId,
          name: element.prodName,
          price: element.price,
          imageSrc: element.pic
        })
      })
    },
    categoryChange() {
      console.log('categoryChange', this.selectedCategory)
      this.filteredProducts=[];
      this.items=[];
      console.log("this.selectedCategory this.filteredProducts",this.filteredProducts)
      switch (this.selectedCategory ) {
        case 'Earrings':
          console.log('earings');
          if(this.earings.length === 0){
            this.getData("911");
            this.earings=this.items;
            this.filteredProducts=this.earings;
            console.log("1")
          }else{
            this.filteredProducts=this.earings;
            console.log("2")
          }
          break;
        case 'Rings':
          console.log('Rings',this.rings.length);
          if(this.rings.length === 0){
            this.getData("912");
            this.rings=this.items;
            console.log("3 this.filteredProducts ",this.filteredProducts)
            this.filteredProducts=this.rings;
            console.log("333 this.filteredProducts",this.filteredProducts)
            console.log("3")
          }
          else{
            this.filteredProducts=this.rings;
            console.log("4")
          }
          break;
        case 'Necklaces':
          console.log('Necklaces',this.necklaces.length);
          if(this.necklaces.length === 0){
            this.getData("916");
            this.necklaces=this.items;
            this.filteredProducts=this.necklaces;
            console.log("5")
          }
          else{
            this.filteredProducts=this.necklaces;
            console.log("6")
          }
          break;
      };
      console.log("after switch ",this.filteredProducts)
      
    }
  },

 async mounted() {
    await this.getData("911");
    this.earings=this.items;
    this.filteredProducts=this.items;
    console.log("filteredProducts",this.filteredProducts)

  }
}
</script>
  