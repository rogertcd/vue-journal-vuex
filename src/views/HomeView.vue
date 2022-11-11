<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>

    <button @click="goToDayBook" class="btn btn-primary">Primary</button>
    <button @click="goToDayBook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDayBook" class="btn btn-success">Success</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  methods: {
    goToDayBook() {
      this.$router.push({name: 'no-entry'}) // Redirecciona a la ruta no-entry porque sino se ve blanco cuado se accede desde un enlace
    }
  }
}
</script>
