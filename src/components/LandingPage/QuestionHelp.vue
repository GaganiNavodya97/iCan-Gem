<template>
  <div class="question-container md:mx-5 mb-3">
    <div class="header-container">
      <div class="heading">{{ $t('faq.faq') }}</div>
      <div class="main-heading">{{ $t('faq.needHelp') }}</div>
      <div class="heading-discription">{{ $t('faq.description') }}</div>
    </div>
    <div class="body-container">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container lg:px-5 lg:py-24 mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col items-start accordion-container mt-4">
              <div class="accordion">
                <div v-for="(item, index) in collapses" :key="index" class="panel">
                  <div class="main-panel-container">
                    <div class="header">
                      {{ $t(`questions.${item.title}`) }} 
                      <!-- {{ item.title }} -->
                    </div>
                    <div @click="togglePanel(index)">
                      <img :src="PlusIcon" alt="" class="plus-icon">
                    </div>
                  </div>
                  <div class="content" v-if="this.activePanel === index">
                    {{ item.content }}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-end md:block ml-5 hidden">
              <img :src="FAQImg" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import FAQImg from '@/assets/images/faq.png'
import PlusIcon from '@/assets/icons/plus-1.png'
export default {
  name: "QuestionHelp",
  created() {},
  data() {
    return {
      activePanel: null,
      collapses: [
        { title: "q1", content: "" },
        { title: "q2", content: "" },
        { title: "q3", content: "" },
        { title: "q4", content: "" },
        { title: "q5", content: "" },
      ],
      FAQImg: FAQImg,
      PlusIcon:PlusIcon
    };
  },
  props: {},
  methods: {
    togglePanel(index) {
      this.activePanel = index
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/layout/styles/__variables.sass"

.question-container
  background-color: $background-color
.body-container
  justify-content: space-between
  margin-top: 1.5rem
.accodian-container
  width: 50%
.image-container
  width: 50%
  @media (max-width: 900px)
  display: none
.header-container
  text-align: left
  max-width: 1200px
  margin: 0 auto
  width: 80vw ////
.heading-discription
  width: 525px
  @media (max-width: 900px)
    width:320px
.accordion
  margin-left: 2rem
  width: 40rem
  border-radius: 4px
  text-align: left
  @media (max-width: 900px)
    margin-left: 2rem
    width: 20rem
.panel
  width: 100%
  text-align: left
  overflow: hidden
  border-bottom: 1px solid #ccc
  &.active
    background-color: #f1f1f1
.content
  padding: 15px
  padding-left: 2rem
  padding-right: 2rem
.active-content
   display: flex
   align-items: center
   text-align: left
.header
  padding: 15px
  cursor: pointer
  user-select: none
.plus-icon
   width: 1.5rem
   height: 1.5rem
   margin-top: 0.7rem
.main-panel-container
   padding-left: 2rem
   padding-right: 2rem
   display: flex
   justify-content: space-between
.content-active
  display: block
</style>