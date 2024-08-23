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
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>
                <button @click="updateUser(user)" class="btn btn-primary btn-sm">Edit</button>
                <button @click="deleteUser(user.userID)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="openUserModal" class="btn1">
            <i class="fas fa-plus"></i> Add New User
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
            <tr v-for="product in products" :key="product.productID">
              <td>{{ product.productID }}</td>
              <td>{{ product.prodName }}</td>
              <td>${{ product.amount }}</td>
              <td>
                <button @click="openEditProductModal(product)" class="btn btn-primary btn-sm">Edit</button>
                <button @click="deleteProduct(product.productID)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="openProductModal" class="btn1">
            <i class="fas fa-plus"></i> Add New Product
          </button>
        </div>
      </div>
    </div>

    <!-- Modal for Adding New User -->
    <div v-if="showUserModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Add New User</h2>
        <form @submit.prevent="submitUser">
          <div class="form-group">
            <label for="userFirstName">First Name</label>
            <input v-model="createUser.firstName" type="text" id="userFirstName" required>
          </div>
          <div class="form-group">
            <label for="userLastName">Last Name</label>
            <input v-model="createUser.lastName" type="text" id="userLastName" required>
          </div>
          <div class="form-group">
            <label for="userEmail">Email</label>
            <input v-model="createUser.emailAdd" type="email" id="userEmail" required>
          </div>
          <div class="form-group">
            <label for="userPassword">Password</label>
            <input v-model="createUser.password" type="password" id="userPassword" required>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button @click="closeUserModal" type="button" class="btn btn-secondary">Cancel</button>
        </form>
      </div>
    </div>

    <!-- Modal for Editing Product -->
    <div v-if="showEditProductModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Edit Product</h2>
        <form @submit.prevent="updateProduct">
          <div class="form-group">
            <label for="editProductName">Product Name</label>
            <input v-model="productToEdit.prodName" type="text" id="editProductName" required>
          </div>
          <div class="form-group">
            <label for="editProductQuantity">Quantity</label>
            <input v-model="productToEdit.quantity" type="number" id="editProductQuantity" required>
          </div>
          <div class="form-group">
            <label for="editProductAmount">Amount</label>
            <input v-model="productToEdit.amount" type="number" id="editProductAmount" required>
          </div>
          <div class="form-group">
            <label for="editProductCategory">Category</label>
            <input v-model="productToEdit.Category" type="text" id="editProductCategory" required>
          </div>
          <div class="form-group">
            <label for="editProductUrl">Product URL</label>
            <input v-model="productToEdit.prodUrl" type="text" id="editProductUrl" required>
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
          <button @click="closeEditProductModal" type="button" class="btn btn-secondary">Cancel</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, reactive, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { toast } from "vue3-toastify";

export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);

    const showProductModal = ref(false);
    const showEditProductModal = ref(false);
    const showUserModal = ref(false);
    const showEditUserModal = ref(false);  // Add this line for user edit modal

    const newProduct = reactive({
      prodName: '',
      amount: '',
      quantity: '',
      Category: '',
      prodUrl: ''
    });

    const productToEdit = reactive({
      prodName: '',
      amount: '',
      quantity: '',
      Category: '',
      prodUrl: ''
    });

    const userToEdit = reactive({
      userID: '',
      firstName: '',
      lastName: '',
      emailAdd: '',
      password: ''  // Add password if you want to allow updates
    });

    const createUser = reactive({
      firstName: '',
      lastName: '',
      emailAdd: '',
      password: ''
    });

    onMounted(async () => {
      await store.dispatch('getProducts');
      await store.dispatch('getUsers');
    });

    const openProductModal = () => {
      showProductModal.value = true;
    };

    const closeProductModal = () => {
      showProductModal.value = false;
      resetProductForm();
    };

    const openEditProductModal = (product) => {
      Object.assign(productToEdit, product);
      showEditProductModal.value = true;
    };

    const closeEditProductModal = () => {
      showEditProductModal.value = false;
    };

    const openUserModal = () => {
      showUserModal.value = true;
    };

    const closeUserModal = () => {
      showUserModal.value = false;
      resetUserForm();
    };

    const openEditUserModal = (user) => {  // Function to open the edit user modal
      Object.assign(userToEdit, user);
      showEditUserModal.value = true;
    };

    const closeEditUserModal = () => {
      showEditUserModal.value = false;
    };

    const resetProductForm = () => {
      newProduct.prodName = '';
      newProduct.amount = '';
      newProduct.quantity = '';
      newProduct.Category = '';
      newProduct.prodUrl = '';
    };

    const resetUserForm = () => {
      createUser.firstName = '';
      createUser.lastName = '';
      createUser.emailAdd = '';
      createUser.password = '';
    };

    const submitProduct = async () => {
      try {
        await store.dispatch('createProduct', newProduct);
        toast.success('Product created successfully!');
        closeProductModal();
      } catch (error) {
        toast.error('Failed to create product.');
        console.error(error);
      }
    };

    const updateProduct = async () => {
      try {
        await store.dispatch('updateProduct', productToEdit);
        toast.success('Product updated successfully!');
        closeEditProductModal();
      } catch (error) {
        toast.error('Failed to update product.');
        console.error(error);
      }
    };

    const submitUser = async () => {
      try {
        await store.dispatch('createUser', createUser);
        toast.success('User created successfully!');
        closeUserModal();
      } catch (error) {
        toast.error('Failed to create user.');
        console.error(error);
      }
    };

    const updateUser = async () => {  // Add this function to handle user updates
      try {
        await store.dispatch('updateUser', userToEdit);
        toast.success('User updated successfully!');
        closeEditUserModal();
      } catch (error) {
        toast.error('Failed to update user.');
        console.error(error);
      }
    };

    const deleteUser = async (userId) => {
      try {
        await store.dispatch('deleteUser', userId);
        toast.success('User deleted successfully!');
      } catch (error) {
        toast.error('Failed to delete user.');
        console.error(error);
      }
    };

    return {
      products,
      users,
      showProductModal,
      showEditProductModal,
      showUserModal,
      showEditUserModal,  // Add this line
      newProduct,
      productToEdit,
      userToEdit,  // Add this line
      createUser,
      openProductModal,
      closeProductModal,
      openEditProductModal,
      closeEditProductModal,
      openUserModal,
      closeUserModal,
      openEditUserModal,  // Add this line
      closeEditUserModal,  // Add this line
      submitProduct,
      updateProduct,
      submitUser,
      updateUser,  // Add this line
      deleteUser,
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
.admin-section {
  margin: 20px;
}
.background-container {
  position: relative;
}
.background-image {
  width: 100%;
  height: auto;
}
.container {
  margin-top: 20px;
}
.admin-header {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
}
.admin-title {
  margin: 0;
}
.admin-subtitle {
  margin-top: 0;
}
.table {
  width: 100%;
  margin-top: 20px;
}
.table th, .table td {
  text-align: center;
}
.action-buttons {
  margin-top: 10px;
}
.btn1 {
  margin-right: 10px;
}
.delete-button {
  background: #dc3545;
  color: white;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
