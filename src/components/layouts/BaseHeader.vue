<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <button
    class="border-none w-full bg-transparent cursor-pointer"
    @click="toggleDark()"
    style="height: var(--ep-menu-item-height)"
  >
    <i inline-flex i="dark:ep-moon ep-sunny" />
  </button>
</template>
