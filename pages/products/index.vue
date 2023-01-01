<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <NuxtLink :to="`/products/${product.id}`" v-for="product of products.products.slice(0, 8)" :key="product.id" class="col-6 col-md-4 col-lg-3 mx-auto mb-3">
          <div class="card">
            <img :src="product.thumbnail" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description.slice(0, 50) }}</p>
            </div>
          </div>
        </NuxtLink><!--.col-6-->
      </div>
    </div>
  </div>
</template>

<script setup>
  const { data: products, error } = await useFetch('https://dummyjson.com/products');

  // log response (data will be a ref)
  if (error.value) console.log('ERROR from useFetch: ', error.value)
  if (products.value) console.log('data returned from useFetch: ', products)
</script>

<style lang="scss">
  a { color: #000; text-decoration: none;}
</style>