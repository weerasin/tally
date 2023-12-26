<script setup>
import AppHeader from './components/AppHeader.vue'
import HoleLocation from './components/HoleLocation.vue';
import PlayerScores from './components/PlayerScores.vue';
import TotalsView from './components/TotalsView.vue';
import HoleNavigation from './components/HoleNavigation.vue';
</script>

<template>
  <AppHeader />
  <HoleLocation />
  <PlayerScores />
  <TotalsView />

  <footer class="footer">
      <HoleNavigation />
  </footer>
</template>


