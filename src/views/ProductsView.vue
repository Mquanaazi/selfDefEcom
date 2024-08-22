<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Products</h2>
    </div>
    <div class="row gap-2 justify-content-center my-2" v-if="products">
      <CardComp v-for="product in products" :key="product.productID">
        <template #cardHeader>
          <img :src="product.prodUrl" loading="lazy" class="img-fluid" style="height: 200px;" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
          <p class="lead"><span class="text-success fw-bold">Amount</span>: ${{ product.amount }}</p>
          <div class="button-wrapper d-md-flex d-block justify-content-between">
            <router-link :to="{ name: 'product', params: { id: product.productID } }">
              <button class="btn btn-success">View</button>
            </router-link>
            <button class="btn btn-dark" @click="addToCart(product)">Add to Cart</button>
          </div>
        </template>
      </CardComp>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
  </div>
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
.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #2c3e50; /* Same as About page */
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Same shadow effect */
}

.display-2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color:  white; /* Match text color */
}

.gap-2 {
  gap: 20px;
}

.my-2 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  color: white; /* Match text color */
}

.lead {
  font-size: 18px;
  color:  white; /* Match text color */
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
</style>
