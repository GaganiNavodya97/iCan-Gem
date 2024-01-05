<template>
    <!-- <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<nav class="relative select-none lg:flex ">
  <div class="flex">
    <a href="#" class="relative py-2 flex items-center ">
      <img src="../assets/header-icons/logo.png"/>
    </a>

   
  

    <button class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
      <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button>
  </div> -->

  <!-- <div class="flex items-center">
    <nav class="flex items-center justify-center">
      <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">
        Collection
      </a>
      
      <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">
        Contact Us
      </a>
    </nav>
  </div> -->

  <!-- <nav class="mx-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>

  <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">Item 1</a>
      <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">Item 2</a>
      <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">Item 3</a>
    </div>
  </div>
</nav>
</div> -->



<header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <a class="order-first md:order-none md:ml-0 md:mr-auto">
            <img src="../assets/header-icons/logo.png" alt="Logo"/>
        </a>

      
      <div class="md:hidden absolute top-0 right-0 mt-2 mr-5">
        <button class="focus:outline-none" @click="toggleMenu">
          <img v-show="!isMenuOpen" src="../assets/header-icons/ham.png" alt="Menu"/>
          <img v-show="isMenuOpen" src="../assets/header-icons/x.png" alt="Close"/>
        </button>
      </div>

      <nav v-show="isMenuOpen" class="md:hidden w-full flex flex-col items-center justify-center">
        <a class="py-2 hover:text-gray-900">Collection</a>
        <a class="py-2 hover:text-gray-900">Contact Us</a>
      </nav>

      <nav :class="{ 'hidden': !isMenuOpen, 'md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center md:flex md:items-center md:justify-end': true, 'md:flex': isMenuOpen }">
        <a class="hidden md:block hover:text-gray-900">Collection</a>
        <a class="hidden md:block hover:text-gray-900">Contact Us</a>
      </nav>

      <div class="md:order-2 md:flex md:items-center md:justify-end">
        <img src="../assets/header-icons/search.png" alt="Search" class="mr-4"/>
        <img src="../assets/header-icons/shopping.png" alt="Shopping" class="mr-4"/>
        <img src="../assets/header-icons/user.png" alt="User"/>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>
@media (max-width: 768px) {
  .md:hidden {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}


</style>


