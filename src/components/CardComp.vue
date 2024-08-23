<template>
  <div class="card">
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Optional props for card header, body, etc.
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #1abc9c;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #2c3e50; /* Matches the background of the About page */
  margin: 20px 0;
  color: white;
}

.card-header {
  padding: 0;
  margin-bottom: 15px;
}

.card-body {
  padding: 10px;
}

h5.card-title {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

p.lead {
  font-size: 18px;
  color: white;
}

.button-wrapper .btn {
  margin: 10px;
}

button.btn-success {
  background-color: #1abc9c;
  border-color: #1abc9c;
}

button.btn-dark {
  background-color: #2c3e50;
  border-color: #2c3e50;
}

.card:hover {
  color: #1abc9c;
  background-color: #2c3e50;
  transform: scale(1.05);
}
</style>
