<template>
  <AppHeader/>
  <AppLayout/>
  <vCarousel :slidesData="gemData"/>
  <GemList></GemList>
  <vCarousel :slidesData="ringData"/>
  <jewelleryList></jewelleryList>
  
  <NewsArticles />
  <Helps/>
  

</template>
<script>
import vCarousel from '@/components/vCarousel.vue';
import NewsArticles from '@/components/LandingPage/NewsArticles.vue';
import Helps from '@/components/LandingPage/QuestionHelp.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import AppHeader from '@/layouts/AppHeader.vue'
import GemList from '@/components/gemList.vue';
import JewelleryList from '@/components/jewelleryList.vue';

import aquamarine from '@/assets/images/gems/aquamarine.webp'
import Chrysoberyl from '@/assets/images/gems/Chrysoberyl.webp'
import blueSapphire from '@/assets/images/gems/blueSapphire.webp'
import emerald from '@/assets/images/gems/emerald.webp'
import tsavorite from '@/assets/images/gems/tsavorite.webp'
import ruby from '@/assets/images/gems/ruby.png'

// import blueSapphire from '@/assets/images/gems/blueSapphire.webp'
// import emerald from '@/assets/images/gems/emerald.webp'
// import tsavorite from '@/assets/images/gems/tsavorite.webp'
// import ruby from '@/assets/images/gems/ruby.png'

import rubyRings from '@/assets/images/rings/rubyRings.webp'
import sapphireRings from '@/assets/images/rings/sapphireRings.webp'
import tsavoriteRings from '@/assets/images/rings/tsavoriteRings.webp'






export default {
  components:{
    vCarousel, 
    NewsArticles, 
    AppLayout,
    AppHeader,
    Helps,
    GemList,
    JewelleryList
},
  name: "HomeView",
  created() {},
  data() {
    return {
      gemData: [
        {
          name: this.$t('gemsFavoriteSection.Chrysoberyl.title'),
          image: Chrysoberyl,
          description: this.$t('gemsFavoriteSection.Chrysoberyl.description'),
        },
        {
          name: this.$t('gemsFavoriteSection.Sapphire.title'),
          image: blueSapphire,
          description: this.$t('gemsFavoriteSection.Sapphire.description'),
        },
        {
          name: this.$t('gemsFavoriteSection.Aquamarine.title'),
          image: aquamarine,
          description: this.$t('gemsFavoriteSection.Aquamarine.description'),
        },
        {
          name: this.$t('gemsFavoriteSection.Emerald.title'),
          image: emerald,
          description: this.$t('gemsFavoriteSection.Emerald.description'),
        },
        {
          name: this.$t('gemsFavoriteSection.Tsavorite.title'),
          image: tsavorite,
          description: this.$t('gemsFavoriteSection.Tsavorite.description'),
        },
        {
          name: this.$t('gemsFavoriteSection.Ruby.title'),
          image: ruby,
          description: this.$t('gemsFavoriteSection.Ruby.description'),
        },
      ],
      ringData: [
        {
          name: this.$t('juweliersFavoriteSection.RubyRings.title'),
          image: rubyRings,
          description: this.$t('juweliersFavoriteSection.RubyRings.description'),
        },
        {
          name: this.$t('juweliersFavoriteSection.SapphireRings.title'),
          image: sapphireRings,
          description: this.$t('juweliersFavoriteSection.SapphireRings.description'),
        },
        {
          name: this.$t('juweliersFavoriteSection.TsavoriteRings.title'),
          image: tsavoriteRings,
          description: this.$t('juweliersFavoriteSection.TsavoriteRings.description'),
        }
      ]
    };
  },
  props: {},
  methods: {},
};
</script>
