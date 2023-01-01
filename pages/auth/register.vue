<template>
  <div class="container py-5">
    <div class="register-header">
      <h1 class="pb-4 text-center text-secondary">Register New User</h1>
    </div>
    <div class="register-form">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
        <div class="drop-shodow p-3">
          <div v-if="hasError" class="error-messages mb-3">
          <div class="alert alert-danger text-center">{{ errorMessage }}</div>
        </div>
        <form v-on:submit.prevent method="POST">
          <input type="hidden" name="remember" value="" />
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" v-model="name" class="form-control" id="name" placeholder="Type Your Name" required>
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" v-model="username" class="form-control" id="username" placeholder="Type Your Username">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Type Your Email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Type Your Password" autocomplete="false">
          </div>
        </form>
        <button @click.prevent="postRegisterForm" class="btn btn-primary btn-block px-3">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from '@vue/reactivity';

  const name = ref(null);
  const email = ref(null);
  const username = ref(null);
  const password = ref(null);
  const hasError = ref(null);
  const errorMessage = ref(null);

  const postRegisterForm = async function () {
    await registerWithEmail(name, username, email, password);
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