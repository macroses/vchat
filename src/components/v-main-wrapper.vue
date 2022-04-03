<template>
  <div class="v-main-wrapper">
    <v-header />
    <router-view />
    <v-bottom-nav />
  </div>
</template>

<script>
import VHeader from "@/components/layouts/v-header";
import VBottomNav from "@/components/layouts/v-bottom-nav";

export default {
  name: 'v-main-wrapper',
  components: {
    VHeader,
    VBottomNav
  }
}
</script>
