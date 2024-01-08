<template>
  <div class="relative bg-[#F6F4F2] sm:hidden">
    <img src="../assets/header-icons/image.png" class="w-full h-full object-cover sm:hidden opacity-30" />
    <div class="absolute top-0 left-0 p-4 sm:p-0"> <!-- Adjusted padding for better positioning -->
      <div class="fonts text-xs">JEWELLERY & GEMS</div>
      <div class="sub-fonts text-4xl mt-2 mb-[7px]">Shine Bright</div>
      <span class="sub-fonts text-4xl mt-3">With GEM STAR</span>
      <div class="text text-base mb-2">Everyday is your special day with our jewellery !</div>
  
      <button
              class="flex items-center justify-center bg-[#DFAC93] hover:bg-[#e2a789] text-[#F6F4F2]  py-3 px-4 rounded-sm mb-2"
            >
              <div class="w-5 h-1 mr-2 bg-[#F6F4F2] btn-font"></div>
  
              Shop
            </button>
    </div>
  </div>
  
  
  <div class="hidden sm:block bg-[#F6F4F2]">
    <div class="mx-auto custom-max-width px-0 sm:px-6 lg:px-8 py-0 sm:py-2">
      <div class="grid grid-cols-1 sm:grid-cols-2">
          <!-- Content for the columns -->
          <div class="flex flex-col justify-center items-center sm:items-start sm:justify-start sm:pl-10 pt-5">
              <div class="fonts text-xl">JEWELLERY & GEMS</div>
              <div class="sub-fonts text-6xl">Shine Bright</div>
              <span class="sub-fonts text-6xl sm:tracking-normal">With GEM STAR</span>
              <div class="text text-xl">Everyday is your special day with our jewellery</div>
          </div>
  
          <img src="../assets/header-icons/image.png" class="object-cover" />
  
          <div class="justify-center items-center sm:items-end sm:justify-end sm:pl-10 mb-2">
              <button class="flex items-center justify-center bg-[#DFAC93] hover:bg-[#e2a789] text-white font-bold py-3 px-4 rounded-sm">
                  <div class="w-5 h-1 mr-2 bg-[#F6F4F2]"></div>
                  Shop
              </button>
              <!-- <div class="mb-2"></div> -->
          </div>
        
      </div>
  </div>
  
    </div>
  
  
  
  </template>
  
  <script>
  export default {
    name: 'AppLayout',
    created() {},
    data() {
      return {}
    },
    props: {},
    methods: {}
  }
  </script>
  
  <style scoped>
  .fonts {
    color: #dfac93;
    /* font-size: 22.21px; */
    font-family: Song Myung;
    font-weight: 400;
    word-wrap: break-word;
  }
  
  .sub-fonts {
    color: #051f34;
    /* font-size: 68.18px; */
    font-family: Sorts Mill Goudy;
    font-weight: 400;
    word-wrap: break-word;
  }
  
  .text {
    color: #051f34;
    /* font-size: 27.16px; */
    font-family: Sorts Mill Goudy;
    font-weight: 400;
    word-wrap: break-word;
  }
  
  .btn-font{
  color: #F6F4F2;
  font-size: 14.70px;
  font-family: Song Myung;
  font-weight: 400;
  }
  
  @media (min-width: 1024px) {
      .sm\:tracking-normal {
        letter-spacing: normal;
      }
    }
  
    .custom-max-width {
    /* For screens smaller than lg (laptops) */
    max-width: 100rem; /* Equivalent to max-w-8xl in Tailwind */
  }
  
  /* For lg screens (larger desktops) */
  @media (min-width: 1024px) {
    .custom-max-width {
      max-width: 90rem; /* Equivalent to lg:max-w-7xl in Tailwind */
    }
  }
  </style>
  