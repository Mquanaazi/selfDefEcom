<template>
  <section class="product-section">
    <h1>These are the products we offer</h1>
    <p>Each product has a purchase button. You can purchase only if you have the token.</p>
    <div class="container">
      <div v-for="product in products" :key="product.productID" class="content-box">
        <h2 class="product-title">Name: {{ product.prodName }}</h2>
        <h3>Category: {{ product.Category }}</h3>
        <h3>Amount: ${{ product.amount }}</h3>
        <img :src="product.prodUrl" alt="product image" class="card-img-top">
        <button 
          v-if="$store.getters.isAuthenticated" 
          class="btn btn-primary mt-3"
          @click="purchaseProduct(product)"
        >
          Purchase
        </button>
        <button @click="fetchProducts()">get products</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    // Fetch products from Vuex store
    products() {
      return this.$store.getters.getProducts;
    }
  },
  methods: {
    getProducts(){
      this.$store.dispatch('getProducts')
    },
    purchaseProduct(product) {
      if (this.$cookies.get('token')) {
        this.$store.dispatch('addToCart', product.productID);
        alert(`You have purchased ${product.prodName}!`);
      } else {
        alert('You need to log in to make a purchase.');
      }
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style scoped>
/* Add styling similar to your AboutView.vue for consistency */
.product-section {
  position: relative;
  text-align: center;
  padding: 5rem;
  color: #1abc9c;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-box {
  border: 2px solid #2c3e50;
  background-color: rgba(44, 62, 80, 0.9);
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.content-box:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.product-title {
  color: #1abc9c;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.btn-primary {
  background-color: #1abc9c;
  border-color: #1abc9c;
}

.btn-primary:hover {
  background-color: #16a085;
  border-color: #16a085;
}

/* Responsive styling */
@media (max-width: 768px) {
  .product-section {
    padding: 3rem 1rem;
  }

  .container {
    padding: 1rem;
  }

  .content-box {
    padding: 0.75rem;
  }

  .product-title {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
}

@media (max-width: 576px) {
  .product-section {
    padding: 2rem 1rem;
  }

  .container {
    padding: 0.5rem;
  }

  .content-box {
    padding: 0.5rem;
  }

  .product-title {
    font-size: 1.25rem;
    padding: 0.25rem;
  }
}
</style>
