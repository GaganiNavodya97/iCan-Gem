<template>
  <!-- for small devices -->
  <div class="relative bg-[#F6F4F2] sm:hidden h-[20rem]">
    <img
      src="../assets/header-icons/img.png"
      class="w-100 h-80 object-cover sm:hidden opacity-30 absolute right-0"
    />
    <div class="absolute top-0 left-0 p-4 sm:p-0">
      <div class="fonts text-xs mb-4">{{ $t('hereSection.title_1') }}</div>
      <div class="sub-fonts text-4xl mt-2 mb-[7px]">{{ $t('hereSection.title_2') }}</div>
      <span class="sub-fonts text-4xl mt-3">{{ $t('hereSection.title_2Sub') }}</span>
      <div class="text text-base mb-5">{{ $t('hereSection.title_3') }}</div>
      <button
        class="flex items-center justify-center bg-[#DFAC93] hover:bg-[#e2a789] text-[#F6F4F2] py-2 px-3 rounded-sm mb-3"
      >
        <div class="w-4 h-1 mr-2 bg-[#F6F4F2] btn-font"></div>
        {{ $t('hereSection.shop') }}
      </button>
    </div>
  </div>

  <!-- for large devices -->
  <div class="hidden sm:block bg-[#F6F4F2] h-[46rem]">
    <div class="mx-auto custom-max-width px-0 sm:px-6 lg:px-8 py-0 sm:py-2">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div
          class="flex flex-col justify-center items-center sm:items-start sm:justify-start sm:pl-10 pt-5"
        >
          <div class="fonts text-2xl  my-5">{{ $t('hereSection.title_1') }}</div>
          <div class="sub-fonts text-7xl  pb-4 max-[740px]:text-6xl">{{ $t('hereSection.title_2') }}</div>
          <span class="sub-fonts text-7xl mb-4 max-[740px]:text-6xl">{{
            $t('hereSection.title_2Sub')
          }}</span>
          <div class="text text-2xl mb-5 pb-4 max-[740px]:pb-0 ">{{ $t('hereSection.title_3') }}</div>

          <div class="justify-center items-center sm:items-end sm:justify-end sm:pl-10 mb-2">
            <button
              class="flex items-center justify-center bg-[#DFAC93] hover:bg-[#e2a789] text-white font-bold py-3 px-4 rounded-sm mb-2"
            >
              <div class="w-5 h-1 mr-2 bg-[#F6F4F2]"></div>
              {{ $t('hereSection.shop') }}
            </button>
          </div>
        </div>
        <img src="../assets/header-icons/img.png" class="object-cover absolute right-0 max-[1185px]:opacity-30 opacity-100" />
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: 'AppLayout',
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {}
}
</script>
  
  <style scoped>
.fonts {
  color: #dfac93;
  /* font-size: 22.21px; */
  font-family: Song Myung;
  font-weight: 400;
  word-wrap: break-word;
}

.sub-fonts {
  color: #051f34;
  /* font-size: 68.18px; */
  font-family: Sorts Mill Goudy;
  font-weight: 400;
  word-wrap: break-word;
}

.text {
  color: #051f34;
  /* font-size: 27.16px; */
  font-family: Sorts Mill Goudy;
  font-weight: 400;
  word-wrap: break-word;
}

.btn-font {
  color: #f6f4f2;
  font-size: 14.7px;
  font-family: Song Myung;
  font-weight: 400;
}

@media (min-width: 1024px) {
  .sm\:tracking-normal {
    letter-spacing: normal;
  }
}

.custom-max-width {
  /* For screens smaller than lg (laptops) */
  max-width: 100rem; /* Equivalent to max-w-8xl in Tailwind */
}

/* For lg screens (larger desktops) */
@media (min-width: 1024px) {
  .custom-max-width {
    max-width: 90rem; /* Equivalent to lg:max-w-7xl in Tailwind */
  }
}
</style>
  