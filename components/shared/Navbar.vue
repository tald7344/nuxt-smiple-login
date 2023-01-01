<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">
                Home
              </NuxtLink>
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            </li>
            <li class="nav-item">
              <NuxtLink to="/products" class="nav-link">Products</NuxtLink>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <span class="nav-link">
                Cart ( {{ cart.length }} )
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                Page Visit Count ( {{ pageVisitCount }} )
              </span>
            </li>
            <li class="nav-item" v-if="auth.isAuthenticated">
              <NuxtLink to="/profile" class="nav-link">
                Profile
              </NuxtLink>
            </li>
            <li class="nav-item" v-if="auth.isAuthenticated">
              <span @click="logout" class="nav-link" style="cursor: pointer">
                Logout
              </span>
            </li>
            <li class="nav-item" v-if="!auth.isAuthenticated">
              <NuxtLink to="/auth/login" class="nav-link">
                Login
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <ElementsBackButton />
    </div>
  </div>
</template>

<script setup>
  const cart = useCart();
  const auth = useAuth();
  const pageVisitCount = usePageVisitCount();

  function logout() {
    auth.value.isAuthenticated = false;
  }
</script>