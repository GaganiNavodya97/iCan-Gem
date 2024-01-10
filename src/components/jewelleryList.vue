<template>
  <div class="container mx-auto px-4 bg-[#F6F4F2] py-1">
    <h1 class="text-xl sm:text-2xl  text-center mt-4 text-[#DFAC93] font-Montserrat">{{ $t('addCart.newIn') }}</h1>
    <h1 class="text-[37.125px] sm:text-[51.749px]  font-normal text-center my-3 text-[#051F34] font-goudy">
      {{ $t('addCart.newCollection') }}
    </h1>
    <p class="text-center text-[19.488px] sm:text-[27.165px] mb-12 text-[#051F34A8] font-goudy sm:text-red-500">
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
    }
  },
  computed: {
  },

  methods: {
    async getData(categoryId) {
      try {
        const response = await api.get(
          `prod/pageProd?regionId=659006000343&categoryId=${categoryId}&current=1&size=8`
        )
        this.data = response.data.records
        await this.filterData()
      } catch (error) {
        console.error('error fetching product data!', error)
      }
    },

    filterData() {
      this.data.forEach((element) => {
        this.items.push({
          id: element.prodId,
          name: element.prodName,
          price: element.priceSymbol+". " + element.price,
          imageSrc: element.pic
        })
      })
    },
    categoryChange() {
      this.filteredProducts=[];
      this.items=[];
      switch (this.selectedCategory ) {
        case 'Earrings':
          if(this.earings.length === 0){
            this.getData("814");
            this.earings=this.items;
            this.filteredProducts=this.earings;
          }else{
            this.filteredProducts=this.earings;
          }
          break;
        case 'Rings':
          if(this.rings.length === 0){
            this.getData("813");
            this.rings=this.items;
            this.filteredProducts=this.rings;
          }
          else{
            this.filteredProducts=this.rings;
          }
          break;
        case 'Necklaces':
          if(this.necklaces.length === 0){
            this.getData("815");
            this.necklaces=this.items;
            this.filteredProducts=this.necklaces;
          }
          else{
            this.filteredProducts=this.necklaces;
          }
          break;
      };
      
    }
  },

 async mounted() {
    await this.getData("814");  //earings
    this.earings=this.items;
    this.filteredProducts=this.items;

  }
}
</script>
  