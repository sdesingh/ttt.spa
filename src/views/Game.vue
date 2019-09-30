<template>
  <v-container fill-height>


    <div id="grid">

      <div v-for="(item, i) in grid" :key="i" id="grid-item">
        <div id="grid-item-text">
            {{ item }}
        </div>

      </div>


    </div>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  data() {
    return {
      grid: ['x', 'o', ' ', 'x', 'o', ' ', 'x', 'x', 'x']
    }
  }
});
</script>

<style scoped>

  #grid {
    margin: auto;
    display: grid;
    width: 700px;
    height: 700px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 30px;
  }

  #grid-item {
    background: whitesmoke;
    text-align: center;
    color: black;
    font-size: 70px;
    transition: 0.2s linear;
    cursor: pointer;
    box-shadow: 0px 2px 15px 5px rgba(0,0,0, 0.1)
  }

  #grid-item-text {
    margin-top: 40px;
  }

  #grid-item:hover {
    background: rgb(160, 160, 160);
    color: black;
  }

</style>