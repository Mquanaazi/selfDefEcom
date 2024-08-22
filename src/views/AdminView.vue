<template>
  <section class="admin-section">
    <!-- Background Image Container -->
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>

    <!-- Main Content Container -->
    <div class="container">
      <div class="admin-header content-box">
        <h1 class="admin-title">Admin Dashboard</h1>
      </div>
      <div class="admin-content">
        <!-- User Management Section -->
        <div class="admin-section content-box">
          <h2 class="admin-subtitle">User Management</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <button @click="editUser(user)" class="btn btn-primary btn-sm">Edit</button>
                  <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="action-buttons">
            <button @click="createUser" class="btn1">
              <i class="fas fa-plus"></i> Add New User
            </button>
            <button @click="deleteAllUsers" class="btn1 delete-button">
              <i class="fas fa-trash-alt"></i> Delete User
            </button>
          </div>
        </div>

        <!-- Product Management Section -->
        <div class="admin-section content-box">
          <h2 class="admin-subtitle">Product Management</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>
                  <button @click="editProduct(product)" class="btn btn-primary btn-sm">Edit</button>
                  <button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="action-buttons">
            <button @click="createProduct" class="btn1">
              <i class="fas fa-plus"></i> Add New Product
            </button>
            <button @click="deleteAllProducts" class="btn1 delete-button">
              <i class="fas fa-trash-alt"></i> Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],  // Array to hold user data
      products: []  // Array to hold product data
    };
  },
  methods: {
    createUser() {
      // Logic to create a new user
    },
    editUser(user) {
      // Logic to edit an existing user
    },
    deleteUser(userId) {
      // Logic to delete a user
    },
    deleteAllUsers() {
      // Logic to delete all users
      alert('All users deleted!');
    },
    createProduct() {
      // Logic to create a new product
    },
    editProduct(product) {
      // Logic to edit an existing product
    },
    deleteProduct(productId) {
      // Logic to delete a product
    },
    deleteAllProducts() {
      // Logic to delete all products
      alert('All products deleted!');
    }
  },
  mounted() {
    // Fetch the users and products from your store or API
    this.users = this.$store.state.users;
    this.products = this.$store.state.products;
  }
};
</script>

<style scoped>
.admin-section {
  position: relative;
  text-align: center;
  padding: 5rem;
  color: #1abc9c; /* Text color */
}

.background-container {
  position: absolute;
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
  -webkit-filter: blur(8px); /* For Safari */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-box {
  border: 2px solid #2c3e50; /* Border style */
  background-color: rgba(44, 62, 80, 0.9); /* Background similar to navbar */
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; /* Smooth transitions */
}

.content-box:hover {
  transform: scale(1.05); /* Slightly increase size on hover */
  border-color: #1abc9c; /* Light green border color on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Box shadow on hover */
}

.admin-title {
  color: #1abc9c; /* Light text color */
}

.admin-subtitle {
  color: #1abc9c; /* Light text color */
}

.btn1 {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid #2c3e50; /* Border style */
  color: #1abc9c; /* Text color */
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  position: relative; /* Ensure the relative positioning for the pseudo-element */
  overflow: hidden; /* Hide overflow from typing animation */
  transition: color 0.3s, background-color 0.3s, transform 0.3s; /* Smooth transitions */
  margin-right: 10px; /* Space between buttons */
  border-color: #1abc9c;
}

.delete-button {
  border-color: #1abc9c; /* Red border color */
}

.delete-button:hover {
  background-color: #1abc9c; /* Red background color on hover */
  color: #ecf0f1; /* Light text color on hover */
}

.btn1:hover {
  color: #1abc9c; /* Light green text color on hover */
  background-color: #ecf0f1; /* Light background color on hover */
  transform: scale(1.05); /* Slightly increase size on hover */
}

@media (max-width: 768px) {
  .admin-section {
    padding: 3rem 1rem; /* Adjust padding */
  }

  .container {
    padding: 1rem;
  }

  .content-box {
    padding: 0.75rem;
  }

  .admin-title {
    font-size: 1.5rem; /* Adjust font size */
    padding: 0.5rem;
  }

  .admin-subtitle {
    font-size: 0.875rem; /* Adjust font size */
  }

  .btn1 {
    padding: 0.5rem 1rem; /* Adjust padding */
    font-size: 0.875rem; /* Adjust font size */
  }
}

@media (max-width: 576px) {
  .admin-section {
    padding: 2rem 1rem; /* Adjust padding */
  }

  .container {
    padding: 0.5rem;
  }

  .content-box {
    padding: 0.5rem;
  }

  .admin-title {
    font-size: 1.25rem; /* Adjust font size */
    padding: 0.25rem;
  }

  .admin-subtitle {
    font-size: 0.75rem; /* Adjust font size */
  }

  .btn1 {
    padding: 0.5rem; /* Adjust padding */
    font-size: 0.75rem; /* Adjust font size */
  }
}
</style>
