<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  created () {
    this.$router.push({ name: 'index' })
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jost:ital@0;1&display=swap');
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #4D5053;
}

a:hover {
  color: #CDA274;
}
#app {
  font-family: "Jost", sans-serif;
}
button{
    border:none;
}
.dm-serif-display-regular {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
}

.dm-serif-display-regular-italic {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: italic;
}

.dm-serif-display-regular {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
}

.dm-serif-display-regular-italic {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: italic;
}

a{
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
}
.index {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
}
</style>

