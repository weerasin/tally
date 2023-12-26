<script setup>
  import { ref } from 'vue';
  import c from '../data/defaultCourses.json'
  const course = c[0];
  
  const currentHole = ref(course.holes[0]);
  
</script>


<template>
  <section class="hero is-small is-info">
    <div class="hero-body">
      <p class="title">{{ course.name }}</p>
      <p class="subtitle">
        Hole: <strong>{{ currentHole.number }}</strong> Par: <strong>{{ currentHole.par }}</strong> Handicap: <strong>{{ currentHole.handicap }}</strong>
      </p>

    </div>
  </section>
</template>