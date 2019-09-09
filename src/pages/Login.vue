<template>
  <div>
    <h1>This is an login page</h1>
    <form @submit.prevent="login">
      <div>
        <label for="inputEmail">Email</label>
        <input
          id="inputEmail"
          v-model.trim="email"
          type="text"
        >
      </div>
      <div>
        <label for="inputPassword">Пароль</label>
        <input
          id="inputPassword"
          v-model.trim="password"
          type="password"
        >
      </div>
      <button type="submit">
        Войти
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const obj = {
        username: this.email.toLowerCase(),
        password: this.password,
      };
      try {
        const resp = await this.$store.dispatch('user/userLogin', obj);
        this.$router.push('/');
      } catch (e) {

      }
    },
  },
};
</script>

<style>
</style>
