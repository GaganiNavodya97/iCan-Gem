<template>
  <div class="footer-container">
    <footer class="bg-white">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="text-center py-4">
          <img src="@/assets/images/logo/gemStarLogo.png" alt="Logo" class="mx-auto w-20 h-20" />
        </div>

        <!-- for small devices -->
        <div class="md:hidden mb-4">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                {{ $t('footer.getInTouch') }}
              </h2>
              <ul class="text-gray-500 font-medium">
                <!-- <li class="mb-4">
                  <a href="#" class="hover:underline">aurora@gmail.com</a>
                </li> -->
                <!-- <li class="mb-4">
                  <a href="#" class="hover:underline">+1 (234) 567 89 00</a>
                </li> -->
                <li class="mb-4 leading-6">
                  <a href="#" class="hover:underline">iCan Lanka (Private) Ltd #422, 
                    <br>13th Floor, R A De Mel Mawatha, 
                    <br>Colombo 03. 
                    <br>Sri Lanka</a>
                </li>
              </ul>
            </div>
            <div class="ml-6">
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                {{ $t('footer.customerCare') }}
              </h2>
              <ul class="text-gray-500 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">{{ $t('footer.certificates') }}</a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">{{ $t('footer.faq') }}</a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">{{ $t('footer.legalNprivacy') }}</a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">{{ $t('footer.returns') }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col justify-center items-center">
            <div class="text-center mb-3">
              <h2 class="text-sm font-semibold text-gray-900">{{ $t('footer.followus') }}</h2>
            </div>
            <div class="flex justify-center gap-4 mb-6">
              <a href="#" class="w-7 h-7">
                <img src="@/assets/icons/fbIcon.svg" alt="Facebook" class="w-7 h-7" />
              </a>
              <a href="#" class="w-7 h-7">
                <img src="@/assets/icons/instaIcon.svg" alt="Instagram" class="w-7 h-7" />
              </a>
              <a href="#" class="w-8 h-8">
                <img src="@/assets/icons/youtubeIcon.svg" alt="Youtube" class="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <!-- for medium and above screens -->
        <div class="hidden md:grid gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              {{ $t('footer.getInTouch') }}
            </h2>
            <ul class="text-gray-500 font-medium">
              <!-- <li class="mb-4">
                <a href="#" class="hover:underline">aurora@gmail.com</a>
              </li> -->
              <!-- <li class="mb-4">
                <a href="#" class="hover:underline">+1 (234) 567 89 00</a>
              </li> -->
              <li class="mb-4 leading-6">
                <a href="#" class="hover:underline">iCan Lanka (Private) Ltd #422, 
                  <br>13th Floor, R A De Mel Mawatha, 
                  <br>Colombo 03. 
                  <br>Sri Lanka</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              {{ $t('footer.customerCare') }}
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">{{ $t('footer.certificates') }}</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">{{ $t('footer.faq') }}</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">{{ $t('footer.legalNprivacy') }}</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">{{ $t('footer.returns') }}</a>
              </li>
            </ul>
          </div>
          <div class="">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              {{ $t('footer.followus') }}
            </h2>
            <div class="flex">
              <a href="#">
                <img src="@/assets/icons/fbIcon.svg" alt="Facebook" class="w-7 h-7" />
              </a>
              <a href="#">
                <img src="@/assets/icons/instaIcon.svg" alt="Instagram" class="w-7 h-7" />
              </a>
              <a href="#">
                <img src="@/assets/icons/youtubeIcon.svg" alt="Youtube" class="w-8 h-8" />
              </a>
              <div class="mr-20"></div>
            </div>
          </div>
        </div>

        <!-- <hr /> -->

        <!-- for small screens -->
        <!-- <div class="text-gray-600 text-xs py-3 px-2 mt-2 second-div md:hidden">
          <div class="pl-1">
            {{ $t('footer.shipping') }}
            <select class="text-gray-700">
              <option v-for="country in countries" :key="country">{{ country }}</option>
            </select>
          </div>

          <div class="">
            <div class="">
              <select class="text-gray-700">
                <option v-for="lang in lanuages" :key="lang">{{ lang }}</option>
              </select>
            </div>

            <div class="text-gray-600 text-right mt-2">{{ $t('footer.copyright') }}</div>
          </div>
        </div> -->

        <!-- for medium and above -->
        <!-- <div
          class="hidden md:grid grid-cols-2 gap-8 text-gray-600 text-sm py-3 px-2 my-2 first-div">
          <div class="text-gray-600">{{ $t('footer.copyright') }}</div>
          <div class="flex ml-6">
            <div class="text-gray-600 text-sm">
              {{ $t('footer.shipping') }}
              <select class="text-gray-700 text-sm">
                <option v-for="country in countries" :key="country">{{ country }}</option>
              </select>
            </div>
            <div class="text-gray-600 text-sm">
              <select class="text-gray-700 text-sm">
                <option v-for="lang in lanuages" :key="lang">{{ lang }}</option>
              </select>
            </div>
          </div>
        </div> -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  created() {},
  data() {
    return {
      countries: ['Sri Lanka', 'UK'],
      country: 'Sri Lanka',
      lanuages: [this.$t('footer.Languages.en'), this.$t('footer.Languages.zn'), this.$t('footer.Languages.ko')]
    }
  },
  props: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/layout/styles/__variables.sass"

.footer-container
  width: 100%
  display: block
  align-items: center
  background: #fff
</style>