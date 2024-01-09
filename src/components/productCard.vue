<template>
    <div class="max-w-sm rounded overflow-hidden bg-white">
      <img class="w-full" :src="product.imageSrc" alt="add to cart items">
      <div class="px-6 py-4">
        <div class="text-xl mb-2 text-center font-Montserrat">{{ product.name }}</div>
        <p class="text-[#DFAC93] font-bold text-center text-base font-Montserrat">
          {{ product.price }}
        </p>
      </div>
      <div class="pt-3 pb-3 text-center font-Myung">
        <button class="bg-[#DFAC93] hover:bg-[#e8a98a] text-white py-2 px-3 rounded">
          — Add to cart
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
  