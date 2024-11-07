<template>
    <div class="product-card">
      <!-- <img :src="image" :alt="name" class="product-image" /> -->
      <h3>{{ name }}</h3>
      <p>R$ {{ price.toFixed(2) }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
    //   image: String,
      name: String,
      price: Number
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
  }
  .product-image {
    width: 100%;
    border-radius: 8px;
  }
  </style>
  