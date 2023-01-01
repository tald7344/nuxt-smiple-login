<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-6">
        <img class="img-fluid" :src="product?.thumbnail" alt="" />
      </div>
      <div class="col-6">
        <h2>{{ product.title }}</h2>
        <ul class="list-unstyled">
          <li>Price : {{ product.price }}</li>
          <li>Stock : {{ product.stock }}</li>
          <li>Category : {{ product.category }}</li>
          <li>Brand : {{ product.brand }}</li>
        </ul>
        <p> Description : {{ product.description }}</p>
        <button @click.prevent="addToCart" class="btn btn-primary m-2">
          <span v-if="!isInCart()">Add To Cart</span>
          <span v-else>Remove To Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const cart = useCart();
  const { id } = useRoute().params
  const { data: product } = useFetch(`https://dummyjson.com/products/${id}` , {key: id});

  function isInCart() {
    return !! cart.value.find(res => res.title == product.value.title)
  }
  function addToCart() {
    if (!isInCart()) {
      cart.value.push({ title: product.value.title });
    } else {
      cart.value = cart.value.filter(e => e.title != product.value.title)
    }
  }
</script>