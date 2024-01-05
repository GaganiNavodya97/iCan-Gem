<template>
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

