<template>
  <AppHeader/>
  <AppLayout/>
  <vCarousel :slidesData="gemData"/>
  <NewsArticles />
  <vCarousel :slidesData="ringData"/>

</template>
<script>
import vCarousel from '@/components/vCarousel.vue';
import NewsArticles from '@/components/LandingPage/NewsArticles.vue';

import image1 from '@/assets/images/pngwing1.png'
import image2 from '@/assets/images/pngwing2.png'
import image3 from '@/assets/images/pngwing3.png'


import ring1 from '@/assets/images/ring1.png'
import ring2 from '@/assets/images/ring2.png'
import ring3 from '@/assets/images/ring3.png'
import AppHeader from '@/layouts/AppHeader.vue';
import AppLayout from '@/layouts/AppLayout.vue';





export default {
  components:{
    vCarousel, NewsArticles,AppLayout,
    AppHeader
},
  name: "HomeView",
  created() {},
  data() {
    return {
      gemData: [
        {
          name: this.$t('gemsFavoriteSection.chrysoberyl.title'),
          image: image1,
          description: this.$t('gemsFavoriteSection.chrysoberyl.description'),
        },
        {
          name: this.$t('gemsFavoriteSection.ruby.title'),
          image: image2,
          description: this.$t('gemsFavoriteSection.ruby.description'),
        },
        {
          name: this.$t('gemsFavoriteSection.reridot.title'),
          image: image3,
          description: this.$t('gemsFavoriteSection.reridot.description'),
        },
      ],
      ringData: [
        {
          name: this.$t('juweliersFavoriteSection.chrysoberyl.title'),
          image: ring1,
          description: this.$t('juweliersFavoriteSection.chrysoberyl.description'),
        },
        {
          name: this.$t('juweliersFavoriteSection.ruby.title'),
          image: ring2,
          description: this.$t('juweliersFavoriteSection.ruby.description'),
        },
        {
          name: this.$t('juweliersFavoriteSection.reridot.title'),
          image: ring3,
          description: this.$t('juweliersFavoriteSection.reridot.description'),
        }
      ]
    };
  },
  props: {},
  methods: {},
};
</script>
