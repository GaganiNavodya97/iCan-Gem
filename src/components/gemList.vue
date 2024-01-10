<template>
  <div class="container mx-auto px-4 bg-[#F6F4F2] py-1">
    <h1 class="text-2xl  text-center mt-4 text-[#DFAC93] font-Montserrat">{{ $t('addCart.newIn') }}</h1>
    <h1 class="text-[51.749px] font-normal text-center my-3 text-[#051F34] font-goudy">
      {{ $t('addCart.newCollection') }}
    </h1>
    <p class="text-center text-[27.165px] mb-12 text-[#051F34A8] font-goudy sm:text-red-500">
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
      selectedCategory: 'ruby',
      items: [],
      tsavorite: [],
      blueSapphire: [],
      ruby:[],
      categories: ['ruby', 'blueSapphire', 'tsavorite'],
      filteredProducts: [],
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
          price: element.priceSymbol+". " + element.price,
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
        case 'ruby':
          console.log('ruby');
          if(this.ruby.length === 0){
            this.getData("911");
            this.ruby=this.items;
            this.filteredProducts=this.ruby;
            console.log("1")
          }else{
            this.filteredProducts=this.ruby;
            console.log("2")
          }
          break;
        case 'blueSapphire':
          console.log('blueSapphire',this.blueSapphire.length);
          if(this.blueSapphire.length === 0){
            this.getData("912");
            this.blueSapphire=this.items;
            console.log("3 this.filteredProducts ",this.filteredProducts)
            this.filteredProducts=this.blueSapphire;
            console.log("333 this.filteredProducts",this.filteredProducts)
            console.log("3")
          }
          else{
            this.filteredProducts=this.blueSapphire;
            console.log("4")
          }
          break;
        case 'tsavorite':
          console.log('tsavorite',this.tsavorite.length);
          if(this.tsavorite.length === 0){
            this.getData("916");
            this.tsavorite=this.items;
            this.filteredProducts=this.tsavorite;
            console.log("5")
          }
          else{
            this.filteredProducts=this.tsavorite;
            console.log("6")
          }
          break;
      };
      console.log("after switch ",this.filteredProducts)
      
    }
  },

 async mounted() {
    await this.getData("911");
    this.ruby=this.items;
    this.filteredProducts=this.items;
    console.log("filteredProducts",this.filteredProducts)

  }
}
</script>
  