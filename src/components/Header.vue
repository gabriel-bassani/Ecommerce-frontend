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
    </div>
  </template>
  
  <script>
  import { InputText } from 'primevue';
  export default {
    name: 'AppHeader',
    components: {
      InputText,
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
      };
    },
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
  </style>
  