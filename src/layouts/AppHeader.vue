<template>
  <Disclosure as="nav" class="" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-3 sm:py-2">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center justify-center">
          <div>
            <img class="w-20 h-20" src="@/assets/images/logo/gemStarLogo.png" alt="logo" />
          </div>
          <!-- Updated div for centering -->
          <div class="hidden flex sm:flex ml-[100px] font">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-[#565656] hover:text-black py-2 text-lg font-medium flex items-center justify-center"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ $t(`header.${item.name}`) }} 
            </a>
          </div>
        </div>

        <div class="hidden sm:flex md:order-2 md:items-center md:justify-end">
          <MagnifyingGlassIcon class="block h-7 w-7 mr-4" aria-hidden="true" />
          <ShoppingBagIcon class="block h-7 w-7 mr-4" aria-hidden="true" />

          <UserIcon class="block h-7 w-7" aria-hidden="true" />
        </div>

        <div class="sm:hidden flex items-center justify-end">
          <MagnifyingGlassIcon class="block h-6 w-6" aria-hidden="true" />
          <ShoppingBagIcon class="block h-6 w-6" aria-hidden="true" />

          <DisclosureButton
            class="relative inline-flex sm:hidden items-center justify-center p-2 focus:outline-none"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden h-screen">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          key="item.name"
          as="a"
          href=""
          class="text-[#565656] hover:text-black py-2 text-lg font-medium flex items-center justify-center"
        >
          Profile
        </DisclosureButton>

        <DisclosureButton
          key="item.name"
          as="a"
          href=""
          class="text-[#565656] hover:text-black py-2 text-lg font-medium flex items-center justify-center"
        >
          Collection
        </DisclosureButton>

        <DisclosureButton
          key="item.name"
          as="a"
          href=""
          class="text-[#565656] hover:text-black py-2 text-lg font-medium flex items-center justify-center"
        >
          Favourite
        </DisclosureButton>

        <DisclosureButton
          key="item.name"
          as="a"
          href=""
          class="text-[#565656] hover:text-black py-2 text-lg font-medium flex items-center justify-center"
        >
          Contact Us
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon ,XMarkIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon  } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'collection', href: '#', current: true },
  { name: 'contactUs', href: '#', current: false }
  // { name: 'Favourite', href: '#', current: false },
  // { name: 'Contact Us', href: '#', current: false }
]
</script>

<style scoped>
.icon {
  height: 24px;
  width: 24px;
  object-fit: contain;
}
.font {
  font-family: Montserrat;
  word-wrap: break-word;
}
</style>
