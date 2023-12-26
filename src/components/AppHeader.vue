<script setup>
  import { useCourseStore } from '@/stores/courseInfo'

  const courseStore = useCourseStore()
  
</script>


<template>
  <section class="hero is-small is-info">
    <div class="hero-body">
      <p class="title">{{ courseStore.courseName }}</p>
      <p class="subtitle">
        Hole: <strong>{{ courseStore.holeNumber }}</strong> Par: <strong>{{ courseStore.holePar }}</strong> Handicap: <strong>{{ courseStore.holeHandicap }}</strong>
      </p>

    </div>
  </section>
</template>