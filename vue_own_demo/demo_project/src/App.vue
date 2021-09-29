<template>
  <div id="app">
    <Header />
    <div>
      <main>
        <Movies />
      </main>
    </div>
  </div>

  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
import Header from "@/components/Header.vue";
import Movies from "@/components/Movies.vue";

export default {
  name: "App",
  components: { Header, Movies },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>

