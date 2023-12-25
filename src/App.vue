<script setup>
const imageUrl = new URL('/src/assets/img/Windyke_East_1.png', import.meta.url)
</script>

<template>
  <section class="hero is-small is-info">
    <div class="hero-body">
      <p class="title">Windyke East</p>
      <p class="subtitle">
        Hole <strong>1</strong> Par <strong>4</strong> Handicap <strong>7</strong>
      </p>
    </div>
  </section>
  <section>
    <div class="greeninfo">
      <img class="greenimg" :src="`${imageUrl}`" alt="Windyke East Hole 1" />
      <span>Today's Hole location: <strong>2</strong></span>
    </div>
  </section>
  <section class="box">
    <h3 class="title is-4">Player Scores</h3>
    <div class="player">
      <span>Mike</span>
      <span>4</span>
      <span>3</span>
      <span>13</span>
    </div>
    <div class="player">
      <span>John</span>
      <span>4</span>
      <span>4</span>
      <span>12</span>
    </div>
    <div class="player">
      <span>Steve</span>
      <span>4</span>
      <span>4</span>
      <span>12</span>
    </div>
    <div class="player">
      <span>Bob</span>
      <span>4</span>
      <span>4</span>
      <span>12</span>
    </div>
  </section>
  <section class="box">
    <table class="table is-fullwidths">
      <th>
        <td>Front</td>
        <td>Back</td>
        <td>Total</td>
      </th>
      <tr>
        <td>Target</td>
        <td>36</td>
        <td>36</td>
        <td>72</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>36</td>
        <td>36</td>
        <td>72</td>
      </tr>
    </table>
  </section>
  <footer class="footer">
      <div class="theMenu">
        <span>Prev Hole</span>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option> 
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
        </select>
        <span>Next Hole</span>
      </div>
  </footer>
</template>

<style scoped>
.theMenu {
  display: flex;
  justify-content: space-around;
}
.player {
  display: flex;
  justify-content: space-around;
  padding-top: 5px;
  padding-bottom: 5px;
}
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
