<template>
  <div class="about">
    <news-articles/>
    <app-footer/>
  </div>
</template>
<script>
import AppFooter from '@/layouts/AppFooter.vue';
import NewsArticles from '@/components/LandingPage/NewsArticles.vue';
export default {
  components:{
    AppFooter,
    NewsArticles
  },
  name: "AppLayout",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
@media (min-width: 1024px) {

}
</style>
