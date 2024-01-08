<template>
  
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




export default {
  components:{
    vCarousel,NewsArticles
  },
  name: "HomeView",
  created() {},
  data() {
    return {
      gemData: [
        {
          name: 'Chrysoberyl Gems Stone',
          image: image1,
          description:
            "The chrysoberyl group is perhaps most famous for its cat's eye gemstone variety, but the rarest and most valuable chrysoberyl is alexandrite"
        },
        {
          name: 'Ruby Gems Stone',
          image: image2,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        },
        {
          name: 'Peridot Gems Stone',
          image: image3,
          description:
            'Found in green-blue to blue colour variations, aquamarine crystals get the blue tone due to the presence of iron within the crystal'
        },
      ],
      ringData: [
        {
          name: 'Peridot Gems Stone',
          image: ring1,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        },
        {
          name: 'Peridot Gems Stone',
          image: ring2,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        },
        {
          name: 'Chrysoberyl Gems Stone',
          image: ring3,
          description:
            'Ruby stands for love, courage, emotions, and interest.For centuries, this gem has been considered the king of all gemstones.'
        }
      ]
    };
  },
  props: {},
  methods: {},
};
</script>
