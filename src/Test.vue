<script setup>
import { ref, onMounted } from 'vue';
import Products from './components/Products.vue';

import axios from 'axios';

const products = ref([]); 

const getData = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  products.value = response.data;
};
onMounted(getData);

</script>


<template>
  <main>
    <h1 class="text-base">IsRayNotArray</h1>
    <!-- <ul>
      <li v-for="item in products">{{ item.title }}</li>
    </ul> -->
    <Products :products="products"></Products>
  </main>
</template>

<style scoped>
</style>