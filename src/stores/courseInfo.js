
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import ci from '@/data/defaultCourses.json'


export const useCourseStore = defineStore('courseInfo', () => {
  const currentCourse = ref(ci[0])
  const courseName = ref(currentCourse.value.name)
  const holeNumber = ref(1)
  const holePar = ref(currentCourse.value.holes[holeNumber.value - 1].par)
  const  holeHandicap = ref(currentCourse.value.holes[holeNumber.value - 1].handicap)
  
  watch(holeNumber, (val) => {
    // currentHole.value = currentCourse.value.holes[holeNumber.value - 1]
    let nh = val-1
    if (nh < 0) nh = 0
    if (nh > 17) nh = 17
    holePar.value = currentCourse.value.holes[nh].par
    holeHandicap.value = currentCourse.value.holes[nh].handicap
  })

  function nextHole() {
    if (holeNumber.value < 18) holeNumber.value++
  }

  function prevHole() {
    if (holeNumber.value > 1) holeNumber.value--
  }

  function setHoleNumber(n) {
    if (n >= 1 && n <= 18 && n != holeNumber.value)
      holeNumber.value = n
  }

  return { holeNumber, holePar, holeHandicap, courseName, nextHole, prevHole, setHoleNumber }
})
