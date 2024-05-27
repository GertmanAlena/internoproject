<template>
  <div>
    <div class="index center">
        <div class="header">
            <div class="header__name">
                <router-link to="/"><img class="image_logo" src="../assets/Logo.png" alt="logo"></router-link>
                <p class="logo__text">Interno</p>
            </div>

            <div class="header__menubar">
                <router-link to="/" class="active">Home</router-link>
                <router-link to="/blogDetails" class="active">Project</router-link>

                <a class="active" href="blogDetails.html">Blog</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style scoped>
    body {
    font-family: "Jost", sans-serif;
}

.index {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
}

.header {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    display: flex;
    align-items: center;
    padding-bottom: 57px;
    /* padding-top: 53px; */
}
.header__name {
    display: flex;
    width: 50%;
    gap: 10px;
    align-items: center;
}
.image_logo {
    width: 34px;
    height: 34px;
    left: 0%;
    right: 0%;
    top: 23.53%;
    bottom: -23.53%;
}

.logo__text {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 40px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: left;
    margin-top: 25px;
}
.header__menubar {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        gap: 20px;
}
.active {
    color: rgb(41, 47, 54);
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 15px;
}

</style>
