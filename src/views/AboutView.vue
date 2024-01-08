<template>
  <div class="about">
    <news-articles/>
    <question-help/>
    <app-footer/>
  </div>
</template>
<script>
import AppFooter from '@/layouts/AppFooter.vue';
import NewsArticles from '@/components/LandingPage/NewsArticles.vue';
import QuestionHelp from '@/components/LandingPage/QuestionHelp.vue';
export default {
  components:{
    AppFooter,
    NewsArticles,
    QuestionHelp
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
