<template>
  <div class="question-container">
    <div class="header-container">
      <div class="heading">FAQ</div>
      <div class="main-heading">Need Help?</div>
      <div class="heading-discription">If you have any questions, feel free to contact us in any convenient way.</div>
    </div>
    <div class="body-container">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start accodian-container">
              <div class="accordion">
                <div v-for="(item, index) in 5" :key="index" class="panel" :class="{ active: activePanel === index }">
                  <div class="main-panel-container">
                    <div class="header" @click="togglePanel(index)">
                      Section {{ index + 1 }}
                    </div>
                    
                  </div>
                  <div class="content" :class="{ active: activePanel === index }">
                    Content for Section {{ index + 1 }}
                  </div>
                </div>
              </div>
            </div>
            <div class="p-12 md:w-1/2 flex flex-col items-end image-container">
              <img :src="FAQImg" alt="">
            </div>
          </div>
        </div>
      </section>
      <!-- <div class="accodian-container">
        <VaAccordion
          v-model="value"
          class="max-w-sm"
        >
        <VaCollapse
          v-for="(collapse, index) in collapses"
          :key="index"
          :header="collapse.title"
        >
        <template #content>
          {{ collapse.content }}
        </template>
      </VaCollapse>
      </VaAccordion>
      </div>
      <div class="image-container">
        <img :src="FAQImg" alt="">
      </div> -->
    </div>
  </div>
</template>
<script>
import FAQImg from '@/assets/images/faq.png'
export default {
  name: "QuestionHelp",
  created() {},
  data() {
    return {
      value: [false, false, false],
      collapses: [
        { title: "First collapse", content: "First collapse content" },
        { title: "Second collapse", content: "Second collapse content" },
        { title: "Third collapse", content: "Third collapse content" },
      ],
      FAQImg: FAQImg
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/layout/styles/__variables.sass"

.question-container
  background-color: $background-color
.body-container
  display: flex
  justify-content: space-between
  margin-top: 1.5rem
.accodian-container
  width: 50%
.image-container
  width: 50%
  @media (max-width: 900px)
    dispaly: none
.header-container
  text-align: left
  max-width: 1336px
  margin: 0 auto
  width: 90vw
.heading-discription
  width: 525px
.accordion
  margin-left: 2rem
  width: 40rem
  border-radius: 4px
  text-align: left
.panel
  width: 100%
  text-align: left
  overflow: hidden
  border-bottom: 1px solid #ccc
  &.active
    background-color: #f1f1f1
.content
  padding: 15px
  display: none
  &.active
    display: block
.header
  padding: 15px
  cursor: pointer
  user-select: none
  &:hover
    background-color: #ddd
</style>