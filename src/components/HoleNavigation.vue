<script setup>
  import { useCourseStore } from '@/stores/courseInfo'
  import { ref } from 'vue'

  const courseStore = useCourseStore()

  const selected = ref(courseStore.holeNumber)

  const holes = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])

  const prevDisabled = ref(true)
  const nextDisabled = ref(false)

  const prevHole = () => {
    courseStore.prevHole()
    updateButtons()
  }

  const nextHole = () => {
    courseStore.nextHole()
    updateButtons()
  }

  function updateButtons() {
    selected.value = courseStore.holeNumber
    prevDisabled.value = courseStore.holeNumber === 1
    nextDisabled.value = courseStore.holeNumber === 18
  }

  const setNewHole = () => {
    courseStore.setHoleNumber(selected.value)
    updateButtons()
  }
  
</script>

<template>
  <div class="theMenu">
    <button class="button is-small is-primary is-outlined" @click="prevHole" :disabled="prevDisabled">Previous Hole</button>
    <select v-model="selected" @change="setNewHole">
      <option v-for="hole in holes" :key="hole" :value="hole">{{ hole }}</option>
    </select>
    <button class="button is-small is-primary is-outlined" @click="nextHole" :disabled="nextDisabled">Next Hole</button>
  </div>
</template>


<style scoped>
.theMenu {
  display: flex;
  justify-content: space-around;
}
</style>