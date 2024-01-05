<template>
  <div class="about">
    <app-footer/>
  </div>
</template>
<script>
import AppFooter from '@/layouts/AppFooter.vue';
export default {
  components:{
    AppFooter
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
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
