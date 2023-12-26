<script setup>
const imageUrl = new URL('/src/assets/img/Windyke_East_1.png', import.meta.url)
</script>


<template>
  <section>
    <div class="greeninfo">
      <img class="greenimg" :src="`${imageUrl}`" alt="Windyke East Hole 1" />
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
}
</style>