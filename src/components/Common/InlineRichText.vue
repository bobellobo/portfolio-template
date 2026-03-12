<template>
  <span>
    <template v-for="(segment, index) in segments" :key="index">
      <a
        v-if="segment.type === 'link' && segment.href"
        class="inline-link"
        :href="segment.href"
        :target="isExternalLink(segment.href) ? '_blank' : undefined"
        :rel="isExternalLink(segment.href) ? 'noopener noreferrer' : undefined"
      >
        {{ segment.text }}
      </a>
      <span v-else>{{ segment.text }}</span>
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { parseRichText } from '../../content/richText'

interface Props {
  text: string
}

const props = defineProps<Props>()

const segments = computed(() => parseRichText(props.text))

const isExternalLink = (href: string): boolean => /^https?:\/\//i.test(href)
</script>

<style scoped>
.inline-link {
  color: var(--primary-color);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  font-weight: 600;
}

.inline-link:hover {
  color: var(--secondary-color);
}
</style>
