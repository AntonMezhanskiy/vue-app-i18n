<template>
  <div id="app">
    <div id="nav">
      <router-link :to="$i18nRoute({ name: 'home'})">
        {{ $t('pages.home') }}
      </router-link> |
      <router-link :to="$i18nRoute({ name: 'about'})">
        {{ $t('pages.about') }}
      </router-link> |
      <router-link :to="$i18nRoute({ name: 'login'})">
        {{ $t('pages.login') }}
      </router-link>
      <div>
        {{ $t('change_tanguage_to') }}:
        <TheLanguageSwitcher />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import TheLanguageSwitcher from '@/components/TheLanguageSwitcher';

export default {
  name: 'App',
  components: {
    TheLanguageSwitcher,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
