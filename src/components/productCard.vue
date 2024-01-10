<template>
    <div class="max-w-sm rounded overflow-hidden bg-white flex flex-col justify-between">
      <img class="w-full h-34 object-cover" :src="product.imageSrc" alt="add to cart items">
      <div class="px-6 pb-4 pt-1">
        <div class="text-base mb-1 text-center font-Montserrat h-12 lg:h-6 truncate-2-lines">{{ product.name }}</div>
        <p class="text-[#DFAC93] font-bold text-center text-base font-Montserrat h-1">
          {{ product.price }}
        </p>
      </div>
      <div class="pt-0 pb-3 text-center font-Myung">
        <button class="bg-[#DFAC93] hover:bg-[#e8a98a] text-white py-2 px-3 rounded ">
          — {{ $t('addCart.addToCart') }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
  </script>

  <style scoped>
  .truncate-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
  </style>
  