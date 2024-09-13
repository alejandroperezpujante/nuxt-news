<script setup lang="ts">


defineProps<{ class?: string }>()
</script>

<template>
  <h2 :class="cn('text-4xl font-brand font-semibold', $props.class)">
    NuxtNews
  </h2>
</template>
