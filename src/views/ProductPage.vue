<template>
  <AppHeader></AppHeader>
  <div class="product-page">
    <div class="product-section">
      <!-- Nome do Produto -->
      <div class="product-name">
        <h1>{{ product.name }}</h1>
      </div>
      
      <div class="product-content">
        <!-- Carrossel de Imagens -->
        <div class="image-carousel">
          <Carousel :value="products" numVisible="3" numScroll="1" orientation="vertical" verticalViewPortHeight="100%">
            <template #item="slotProps">
              <div>
                <img :src="slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
              </div>
            </template>
          </Carousel>
        </div>

        <!-- Imagem Principal -->
        <div class="main-image-container">
          <img :src="mainImage" alt="Imagem Principal" class="main-image" />
        </div>

        <!-- Detalhes do Produto -->
        <div class="product-details">
          <h1>{{ product.name }}</h1>
          <p class="price-text">R$ {{ product.price.toFixed(2) }}</p>
          <div class="stars">
            <v-icon name="fa-star" v-for="star in product.stars" :key="star" fill="#df9204" />
          </div>
          <button class="action-button">Comprar Agora</button>
          <button class="action-button">Adicionar à Sacola</button>
          <div class="calculate-shipping">
            <input type="text" placeholder="Calcule o frete" class="shipping-input" />
            <button class="shipping-button">Calcular</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from 'primevue/carousel';
import AppHeader from "../components/Header.vue";

export default {
  name: 'ProductPage',
  components: {
    AppHeader,
    Carousel
  },
  data() {
    return {
      product: {
        name: "Air Fryer Mondial",
        price: 49.99,
        stars: 5,
        images: [
          "/images/airfryer.webp",
          "/images/airfryer1.webp",
          "/images/airfryer2.webp",
        ],
      },
      mainImage: "/images/airfryer.webp",
      products: [
        { id: 1, name: "Jogo de Taças de Vidro", image: "/images/airfryer.webp", price: 99.99, stars: 3 },
        { id: 2, name: "Escova Secadora Bivolt", image: "/images/airfryer1.webp", price: 49.99, stars: 5 },
        { id: 3, name: "Robô de Limpeza", image: "/images/airfryer2.webp", price: 99.99, stars: 4 },
        { id: 3, name: "Robô de Limpeza", image: "/images/airfryer3.webp", price: 99.99, stars: 4 },
      ],
    };
  },
  mounted() {
    const productId = this.$route.params.id;
    this.fetchProductData(productId);
  },
  methods: {
    fetchProductData(id) {
      console.log("ID do Produto:", id);
        // Dados de exemplo, substitua pela chamada de API para o produto real
        // this.product = {
        //   name: "Produto Exemplo",
        //   price: 99.99,
        //   stars: 4,
        //   images: [
        //     "/images/produto1.webp",
        //     "/images/produto2.webp",
        //     "/images/produto3.webp",
        //   ],
        // };
        // this.mainImage = this.product.images[0];
    },
    setMainImage(image) {
      this.mainImage = image;
    },
  },
};
</script>

<style scoped>
.product-page {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.product-section {
  background-color: #fff;
  width: 90%;
  height: 80vh;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
}

.product-name {
  margin-bottom: 20px;
  margin-left: 100px;
  text-align: left;
}

.product-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.image-carousel {
  margin-left: 100px;
}
.product-image {
    width: 100%;
    max-width: 150px;
    margin-bottom: 5px;
  }
.main-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  width: 400px;
  height: 400px;
}

.main-image {
  width: auto;
  height: auto;
  border-radius: 8px;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 100px;
}

.stars {
  display: flex;
}

.price-text {
  font-size: 24px;
  font-weight: bold;
}

.action-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #6200ea;
  color: white;
  border-radius: 4px;
  font-size: 16px;
}

.calculate-shipping {
  display: flex;
  gap: 10px;
}

.shipping-input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.shipping-button {
  padding: 8px 16px;
  background-color: #6200ea;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>
