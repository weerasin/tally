<script setup>
import { useCourseStore } from '@/stores/courseInfo'
import { computed} from 'vue'

  const courseStore = useCourseStore()

  const imageUrl = computed(() => {
    let prefix = courseStore.courseName.replace(/\s/g, '_')
    let imgFullName = `${prefix}_${courseStore.holeNumber}.png`
    return new URL(`/src/assets/img/${imgFullName}`, import.meta.url)
  })

// const imageUrl = new URL('/src/assets/img/Windyke_East_2.png', import.meta.url)
</script>


<template>
  <section>
    <div class="greeninfo">
      <img class="greenimg" :src="`${imageUrl}`" :alt="`${courseStore.courseName } ${courseStore.holeNumber}`" />
      <span>Today's Hole location: <strong>2</strong></span>
    </div>
  </section>
</template>

<style scoped>
.greeninfo {
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
}
.greenimg {
  width: 90px;
  height: 90px;
  background-color: #dee1aa;
  border-radius: 25%;
}
</style>