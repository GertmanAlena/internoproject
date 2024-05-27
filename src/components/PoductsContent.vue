<template>
    <div class="products">
        <div class="products__heading">
            <h2 class="products__title">Follow Our Projects</h2>
            <p class="products__text">
                It is a long established fact that a reader will be distracted by the of readable content of page
                lookings at its layouts points.
            </p>
        </div>
        <div class="products__content">
            <div v-for="projectProduct in projectProducts" :key="projectProduct.id">
                <img class="banner__img" :src="require(`@/assets/${projectProduct.image}`)" alt="photo1"
                    :style="`${projectProduct.style}: ${projectProduct.radius}`">
                <div class="options">
                    <div class="options__info">
                        <h4 class="options__title">{{ projectProduct.title }}</h4>
                        <p class="options__text">{{ projectProduct.sort }}</p>
                    </div>
                    <button class="options__button">
                        <svg width="10.000000" height="21.000000" viewBox="0 0 10   21" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <path id="Vector" d="M1 19L9 10L1 1" stroke="#292F36" stroke-opacity="1.000000"
                                stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'PoductsContent',

    data() {
        return {

        };
    },

    mounted() {

    },

    computed: {
        ...mapState(['projectProducts']),
    },
};
</script>
<style>
.products {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.products__heading {
    padding-left: calc(50% - 2000px / 2);
    padding-right: calc(50% - 1200px / 2);
    width: 680px;
    height: 137px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
}

.products__title {
    text-align: center;
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
}

.products__text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: center;
}

.products__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    gap: 60px;
    padding-bottom: 96px;
}

.product {
    width: 385px;
}

.options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    padding-top: 10px;
}

.options__info {}

.options__title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;

}

.options__text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
}

.options__button {
    width: 70px;
    height: 70px;
    background-color: rgb(244, 240, 236);
    border-radius: 50%;
    border: none;
    vertical-align: top;
}
</style>