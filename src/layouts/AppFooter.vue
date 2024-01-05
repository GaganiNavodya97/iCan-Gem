<template>
  <div class="footer-container">
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl">
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
          <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">FOLLOW US</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                  </li>
                  <li class="mb-4">
                  </li>
                  <li class="mb-4">
                  </li>
              </ul>
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
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/layout/styles/__variables.sass"

.footer-container
  margin-top: 1rem
  width: 100%
  display: block
  align-items: center
  background: #fff
</style>