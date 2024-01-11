<template>
  <div class="news-container">
  <div class="header">
    <div class="heading">{{ $t('blog.blog') }}</div>
    <div class="main-heading">{{ $t('blog.heading_1') }}</div>
    <div class="heading-discription">{{ $t('blog.heading_2') }}</div>
  </div>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 overflow-hidden">
            <img class="lg:h-96 md:h-36 w-full object-cover object-center" :src="News3" alt="blog">
            <div class="py-6">
              <h1 class="text-2xl font-medium text-gray-900 mb-3 main-topc">{{ $t('blog.blog_01.title') }}</h1>
              <p class="leading-relaxed text-zinc-600 mb-3 para">{{ $t('blog.blog_01.description') }}</p>
              <div class="flex items-center flex-wrap see-more-button">
                <div class="inline-flex items-center md:mb-2 lg:mb-0">{{ $t('blog.readMore') }}
                  <div class="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-96 md:h-36 w-full object-cover object-center" :src="News2" alt="blog">
            <div class="py-6">
              <h1 class="text-2xl font-medium  mb-3 main-topc">{{ $t('blog.blog_02.title') }}</h1>
              <p class="leading-relaxed text-zinc-600 mb-3 para">{{ $t('blog.blog_02.description') }}</p>
              <div class="flex items-center flex-wrap see-more-button">
                <div class="inline-flex items-center md:mb-2 lg:mb-0">{{ $t('blog.readMore') }}
                  <div class="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-96 md:h-36 w-full object-cover object-center" :src="News1">
            <div class="py-6">
              <h1 class="text-2xl font-medium text-gray-900 mb-3 main-topc">{{ $t('blog.blog_02.title') }}</h1>
              <p class="leading-relaxed text-zinc-600 mb-3 para">{{ $t('blog.blog_03.description') }}</p>
              <div class="flex items-center flex-wrap see-more-button">
                <div class="inline-flex items-center md:mb-2 lg:mb-0">{{ $t('blog.readMore') }}
                  <div class="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import News1 from '@/assets/images/news-1.png';
import News2 from '@/assets/images/news-2.png';
import News3 from '@/assets/images/news-3.png';

export default {
  name: "NewsArticles",
  created() {},
  data() {
    return {
      News1:News1,
      News2:News2,
      News3:News3
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="sass">
@import "@/assets/layout/styles/__variables.sass"
.news-container
  width: 100%
  background-color: $background-color
  padding: 2rem
.header
  display: block
  align-items: center
  text-align: center
.heading
  color: #DFAC93
  font-size: 24.37px
  font-style: normal
  font-weight: 600
  line-height: normal
.main-heading
  color: #051F34
  font-family: Sorts Mill Goudy
  font-size: 51.749px
  font-style: normal
  font-weight: 400
  line-height: normal
  @media (max-width: 640px)
    font-size: 34px
.heading-discription
  color: rgba(5, 31, 52, 0.66)
  font-family: Sorts Mill Goudy
  font-size: 27.165px
  font-style: normal
  font-weight: 400
  line-height: normal
  @media (max-width: 640px)
    font-size: 18px
.topic
  color: #DFAC93
.main-topc
  font-family: Sorts Mill Goudy
.para
  font-family: Montserrat
  font-size: 18.252px
.see-more-button
  color: #051F34
  font-family: Montserrat
  font-size: 14.344px
  font-style: normal
  font-weight: 600
.line
  width: 20.8px
  height: 1.6px
  flex-shrink: 0
  background: #051F34
  margin-left: 0.5rem
  transition: margin-left 0.3s ease-in-out
.see-more-button:hover .line
    margin-left: 1rem

</style>