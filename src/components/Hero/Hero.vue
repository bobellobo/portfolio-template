<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="hero-main">
        <div class="hero-copy">
          <!-- <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p> -->
          <p class="hero-about">
            <InlineRichText :text="profileDescription" />
          </p>
        </div>
        <img class="hero-photo" :src="heroPhoto" :alt="$t('exportView.photoAlt')" />
      </div>
      <button
        class="scroll-next-btn"
        type="button"
        aria-label="Scroll to next section"
        @click="scrollToNextSection"
      >
        <span class="scroll-next-icon" aria-hidden="true">↓</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InlineRichText from '../Common/InlineRichText.vue'
import { getProfileContent, getProfilePhotoUrl } from '../../content/data/profile'
import { getSupportedLocale } from '../../content/locale'

const { locale } = useI18n()

const currentLocale = computed(() => getSupportedLocale(locale.value))
const profileDescription = computed(() => getProfileContent(currentLocale.value).description)
const heroPhoto = getProfilePhotoUrl()

const scrollToNextSection = () => {
  const skillsSection = document.getElementById('skills')

  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  const heroSection = document.getElementById('home')
  const nextSection = heroSection?.nextElementSibling as HTMLElement | null
  nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped src="./Hero.css"></style>
