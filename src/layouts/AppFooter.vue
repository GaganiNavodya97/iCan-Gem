<template>
  <div class="footer-container">
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl">

        <div class="text-center py-4">
          <img src="@/assets/images/logo/gemStarLogo.png" alt="Logo" class="mx-auto w-20 h-20">
        </div>



        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">GET IN TOUCH</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                      <a href="#" class="hover:underline">aurora@gmail.com</a>
                  </li>
                  <li class="mb-4">
                      <a href="#" class="hover:underline">+1 (234) 567 89 00</a>
                  </li>
                  <li class="mb-4">
                      <a href="#" class="hover:underline">310 E 67th St, New York, NY 10065, USA</a>
                  </li>
              </ul>
          </div>
          <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">CUSOMER CARE</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                      <a href="#" class="hover:underline">Certificates</a>
                  </li>
                  <li class="mb-4">
                      <a href="#" class="hover:underline">FAQ</a>
                  </li>
                  <li class="mb-4">
                      <a href="#" class="hover:underline">Legal & Privacy</a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">Returns</a>
                </li>
              </ul>
          </div>
          <div class="" >
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">FOLLOW US</h2>
              <!-- <ul class="text-gray-500 dark:text-gray-400 font-medium"> -->
                  <!-- <li class="mb-4"> -->
                    <div class="flex ">
                    <a href="#">
                  <img src="@/assets/icons/fbIcon.svg" alt="Facebook" class="w-7 h-7">
                </a>
                <a href="#">
                  <img src="@/assets/icons/instaIcon.svg" alt="Instagram" class="w-7 h-7">
                </a>
                <a href="#">
                  <img src="@/assets/icons/youtubeIcon.svg" alt="Youtube" class="w-8 h-8 ">
                </a>
                <div class="mr-20"></div>
                  <!-- </li> -->
                  <!-- <li class="mb-4">
                    <img src="@/assets/icons/fbIcon.svg" alt="Logo" class="mx-auto w-10 h-10">
                  </li>
                  <li class="mb-4">
                    <img src="@/assets/icons/fbIcon.svg" alt="Logo" class="mx-auto w-10 h-10">
                  </li> -->
              <!-- </ul> -->
            </div>
          </div>
      </div>

      <hr>

      <div class="flex  text-gray-600 text-sm py-3 px-1">
        <div class="text-gray-600 mt-3 ">
        ALL RIGHTS RESERVED ©GEMSTAR | 2024 
        </div>

        <div class="flex space-x-4 pl-5">
        <div class="mt-3 text-gray-600 text-sm ml-5">
          SHIPPING TO : 
          <select class="text-gray-700 text-sm">
            <option v-for="country in countries" :key="country">{{ country }}</option>
          </select>

          <!-- <VaSelect
      v-model="country"
      :options="options"
          /> -->
        </div>

        <div class="mt-3 text-gray-600 text-sm">
          <select class="text-gray-700 text-sm">
            <option v-for="lang in lanuages" :key="lang">{{ lang }}</option>
          </select>
        </div>

        </div>
      </div>


      </div>
  </footer>
  
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  created() {},
  data() {
    return {
      countries: ["Sri Lanka","UK"],
      country: "Sri Lanka",
      lanuages: ["English","Chinese"]
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/layout/styles/__variables.sass"

.footer-container
  width: 100%
  display: block
  align-items: center
  background: #fff
</style>