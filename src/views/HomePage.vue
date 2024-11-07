<template>
  <div class="home-page">
    <header class="header">
      <div class="header-top">
      <div class="logo">
        <div>
          <v-icon name="fa-flag" scale="2.5" />
        </div>
        <p  class="logo-text">FlagShip</p>
      </div>
    <div class="search-bar">
      <InputText placeholder="Pesquise pelo produto que deseja..." type="text" class="custom-input" v-model="searchText"  />
      <v-icon name="fa-search" class="search-icon"/>
    </div>
      <div class="cart">
        <div>
          <v-icon name="fa-shopping-cart" scale="2" />

        </div>
        <p  class="cart-text">Carrinho</p>
      </div>

      </div>
      <div class="category-bar">
        <div class="menu-icon">
          <v-icon name="fa-bars" scale="1.5"/>

        </div>
      <div v-for="category in categories" :key="category.name" class="category-item">
        <!-- <v-icon name="fa-flag" /> -->
        <!-- <Vicon name="fa-flag"  /> -->
        <span>{{ category.name }}</span>
      </div>
      </div>
    </header>
    <section class="product-section">
      <h2>Produtos em Destaque</h2>
      <div class="carousel-list">
        <Carousel :value="products" numVisible="4" numScroll="1" color>
          <template #item="slotProps">
            <div class="product-card">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
              <p>{{ slotProps.data.name }}</p>
              <div class="stars">
                <v-icon name="fa-star" v-for="star in slotProps.data.stars" :key="star" fill="#df9204"/>
              </div>
              <p class="price-text">R$ {{ slotProps.data.price }}</p>
            </div>
          </template>
        </Carousel>

      </div>
    </section>
    <section class="product-section">
      <h2>Promoções de Black Friday</h2>
    <Carousel :value="products1" numVisible="4" numScroll="1">
      <template #item="slotProps">
        <div class="product-card"
        @click="goToProductPage(slotProps.data.id)">
          <img :src="slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
          <p>{{ slotProps.data.name }}</p>
          <div class="stars">
            <v-icon name="fa-star" v-for="star in slotProps.data.stars" :key="star" fill="#df9204" />
          </div>
          <p class="price-text">R$ {{ slotProps.data.price }}</p>
        </div>
      </template>
    </Carousel>
    </section>
    <section class="product-section">
      <h2>Recomendados para vocês</h2>
    <Carousel :value="products2" numVisible="4" numScroll="1">
      <template #item="slotProps">
        <div class="product-card">
          <img :src="slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
          <p>{{ slotProps.data.name }}</p>
          <div class="stars">
            <v-icon name="fa-star" v-for="star in slotProps.data.stars" :key="star" fill="#df9204"/>
          </div>
          <p class="price-text">R$ {{ slotProps.data.price }}</p>
        </div>
      </template>
    </Carousel>
    </section>
  </div>
</template>

<script>
// import ProductCard from '@/components/ProductCard.vue';
import Carousel from 'primevue/carousel';
import { InputText } from 'primevue';
export default {
  name: 'HomePage',
  components: {
    // ProductCard,
    InputText,
    Carousel,
  },
  data() {
    return {
      categories: [
        { name: "Eletrônicos" },
        { name: "Roupas" },
        { name: "Livros" },
        { name: "Esportes" },
        { name: "Brinquedos" },
        { name: "Jogos Digitais" },
        { name: "Papelaria" },
        { name: "Ferramentas" },
        { name: "Alimentos e Bebidas" },
        { name: "Beleza e Cuidados Pessoais" },
        { name: "Bebês" },
      ],
      products: [
        { id: 1, name: "Jogo de Taças de Vidro", image: "/images/copos.webp", price: 99.99, stars: 3 },
        { id: 2, name: "Escova Secadora Bivolt", image: "/images/escova.webp", price: 49.99, stars: 5 },
        { id: 3, name: "Robô de Limpeza", image: "/images/robo.webp", price: 99.99, stars: 4 },
        { id: 4, name: "Fralda Pampers Premium", image: "/images/fralda.webp", price: 49.99, stars: 3 },
      ],
      products1: [
        { id: 1, name: "Smartphone Galaxy A15 128GB", image: "/images/celulargalaxy.webp", price: 99.99, stars: 3 },
        { id: 2, name: "Notebook Lenovo IdeaPad i5", image: "/images/laptop.webp", price: 49.99, stars: 4 },
        { id: 3, name: "Drone Quadcopter", image: "/images/drone.webp", price: 99.99, stars: 4 },
        { id: 4, name: "Air Fryer Mondial", image: "/images/airfryer.webp", price: 49.99, stars: 5 },
      ],
      products2: [
        { id: 1, name: "Liquidificador", image: "/images/liquidificador.webp", price: 99.99, stars: 5 },
        { id: 2, name: "Jogo de Taças de Vidro", image: "/images/copos.webp", price: 49.99, stars: 3 },
        { id: 3, name: "Cervejeira 228 litros Frost Free", image: "/images/cervejeira.webp", price: 99.99, stars: 4 },
        { id: 4, name: "Robô de Limpeza", image: "/images/robo.webp", price: 49.99, stars: 4 },
      ]
    };
  },
  methods: {
    formatCurrency(value) {
      return `R$ ${value.toFixed(2)}`;
    },
    goToProductPage(productId) {
      this.$router.push({ name: 'Product', params: { id: productId } });
    },
  }
};
</script>

<style scoped>
/* Estilo para a barra de categorias */
.header {
  padding: 10px 20px;
  /* width: 3000px; */
  /* width: 100%; */
  background-color: var(--neutral-bg);
  /* color: #fff; */
  display: flex;
  flex-direction: column;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-text{
  font-size: 27px;
  font-weight: 800;
}
.cart {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.cart-text{
  font-size: 20px;
  font-weight: 600;
}
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search-bar .custom-input {
  width: 290px;
  height: 45px;
  color: black;
  font-size: 16px;
  padding: 15px;
  /* padding-right: 35px; */
  border-radius: 20px;
  background-color: white;
  /* border: 1px solid var(--secondary-color); */
}

.search-icon {
  margin-left: 4px;
  cursor: pointer;
  /* color: var(--secondary-color); */
}
.menu-icon{
  position: absolute;
  left: 40px;
  margin-top: 5px;
  cursor: pointer;
}
.category-bar {
  display: flex;
  gap: 15px;
  padding: 10px;
  justify-content: center;
  /* background-color: #e8e8e8; */
  /* border-bottom: 2px solid var(--primary-color); */
}
.category-item {
  /* color: var(--primary-color); */
  padding: 8px 15px;
  border-radius: 10px;
}

.category-item:hover {
  /* color: var(--secondary-color); */
  /* border: 1px solid var(--secondary-color); */
  cursor: pointer;
  background-color: #c0c2c2;
}
/* Estilo para os produtos */
.carousel-list {
  display: flex;
  justify-content: center;
  /* width: 100%; */
}
.product-section {
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 20px;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 10px;
}
.product-section h2{
  /* color: #df9204; */

}
.product-card {
  background-color: #fff;
  width: 180px;
  max-height: 300px;
  padding: 15px;
  margin-left: 110px;
  margin-right: 110px;
  margin-bottom: 10px;
  /* border-radius: 10px; */
  /* border-color: #df9204; */
  /* border-width: 1px; */
  /* border-style: solid; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.2s;
}
.price-text{
  /* color: #101c34; */
  font-size: 17px;;
  font-weight: 600;
}
.product-image {
  width: 100%;
  border-radius: 8px;
}
.product-card:hover {
  transform: scale(1.05);
  cursor: pointer;

  /* border: 1px solid var(--primary-color); */
}
</style>
