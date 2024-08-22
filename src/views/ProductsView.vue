<!-- src/views/Home.vue -->
<template>
    <div class="row">
        <h2 class="display-2">
          Products
        </h2>
      </div>
      <div class="row-6" ourStore></div>
      <div class="row-6 justify-content-between my-2 d-block d-md-flex p-2 ">
        <div class="col">
          <input class="form-control" type="text" id="search-input" placeholder="Search product by name">
          <button class="btn btn-primary" id="search-btn">Search</button>
          <ul id="search-results"></ul>
        </div>
        <div class="col">
          <button class="btn btn-secondary" id="sortingByAmount">Sort by amount</button>
        </div>
      </div>
      <div class="row gap-2 justify-content-between mx-2" recentProducts>
      </div>
      
  </template>
  
  <script>
  export default {
    name: 'Products',
  };
  
  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }
  </style>
  