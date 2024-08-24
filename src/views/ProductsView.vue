<template>
  <section class="products-section">
    <!-- Background Image Container -->
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
    <!-- Main Content Container -->
    <div class="content-container mt-4">
      <h2 class="display-2 text-center mb-4">Products</h2>
      <!-- Product Grid -->
      <div class="row" v-if="products">
        <!-- Use col-12 col-md-4 to create a 3-column layout on medium to larger screens -->
        <div class="col-12 col-md-4 mb-4" v-for="product in products" :key="product.productID">
          <CardComp>
            <template #cardHeader>
              <img 
                :src="product.prodUrl" 
                loading="lazy" 
                :alt="product.prodName"
                class="img-fluid"
              />
            </template>
            <template #cardBody>
              <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
              <p class="lead">
                <span class="text-success fw-bold">Amount</span>: ${{ product.amount }}
              </p>
              <div class="button-wrapper d-flex justify-content-between mt-3">
                <router-link :to="{ name: 'product', params: { id: product.productID } }">
                  <button class="btn btn-success">View</button>
                </router-link>
                <button class="btn btn-dark" @click="addToCart(product)">Add to Cart</button>
              </div>
            </template>
          </CardComp>
        </div>
      </div>
      <!-- Loading Spinner -->
      <div v-else>
        <SpinnerComp />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp1.vue';

export default {
  components: {
    CardComp,
    SpinnerComp,
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);

    onMounted(() => {
      store.dispatch('getProducts');
    });

    const addToCart = (product) => {
      store.dispatch('addToCart', product);
    };

    return {
      products,
      addToCart,
    };
  },
};
</script>

<style scoped>
.products-section {
  position: relative;
  padding: 20px 0;
  min-height: 100vh;
  overflow: hidden;
}

.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.content-container {
  position: relative;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: rgba(44, 62, 80, 0.9);
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.display-2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
}

.card-title, .lead {
  font-size: 18px;
  color: white;
}

.button-wrapper {
  margin-top: 20px;
}

.btn-success {
  background-color: #1abc9c;
  border-color: #1abc9c;
  color: #fff;
}

.btn-dark {
  background-color: #2c3e50;
  border-color: #2c3e50;
  color: #fff;
}

.btn {
  margin: 10px;
}

.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
