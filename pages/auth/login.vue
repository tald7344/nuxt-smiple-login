<template>
  <div class="container py-5">
    <div class="register-header">
      <h1 class="pb-4 text-center text-secondary">Login User</h1>
    </div>
    <div class="register-form">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
        <div class="drop-shodow p-3">
          <div v-if="hasError" class="error-messages mb-3">
          <div class="alert alert-danger text-center">{{ errorMessage }}</div>
        </div>
        <form method="POST">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Type Your Email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Type Your Password" autocomplete="false">
          </div>
        </form>
        <button type="submit" value="Login" class="btn btn-primary btn-block px-3" @click.prevent="onSubmit">
          <span v-if="!isLoading">Login</span>
          <span v-else>Loading...</span>
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const hasError = ref(null);
  const errorMessage = ref(null);
  const isLoading = ref(false);
  const auth = useAuth();

  const form = reactive({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  })

  async function onSubmit() {
    if (isLoading.value) return;    // this to prevent user to press on login again

    isLoading.value = true
    const { data, error } = await useFetch('https://reqres.in/api/login', {
      method: 'POST',
      body: form
    }); 

    isLoading.value = false

    if (error.value) {
      hasError.value = true
      errorMessage.value = error.value.data.error      
    }

    auth.value.isAuthenticated = true
    navigateTo('/')
  }

</script>

<style lang="scss">
  .register-form {
    .drop-shodow {
      filter: drop-shadow(1px 1px 10px #ccc);
      background-color: #fff;
    } 
  }
</style>