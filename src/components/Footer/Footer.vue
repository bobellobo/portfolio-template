<template>
  <footer class="footer">
    <div class="container">
      <p>{{ $t('footer.copyright') }}</p>
      <p>
        <i18n-t keypath="footer.templateCredit" tag="span">
          <template #link>
            <a
              :href="templateRepositoryUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ $t('footer.templateCreditLabel') }}
            </a>
          </template>
        </i18n-t>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

useI18n()

const templateRepositoryUrl = 'https://github.com/bobellobo/portfolio-scaffolder'
</script>

<style scoped src="./Footer.css"></style>
