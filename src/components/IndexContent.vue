<template>
    <div>
        <div class="banner">
            <img class="banner__image" :src="require(`@/assets/${imageBanner}`)" alt="imageBanner">

            <div class="banner__content">
                <h1 class="banner__title">Let Your Home Be Unique</h1>
                <p class="banner__text">There are many variations of the passages of lorem Ipsum fromavailable,
                    majority.</p>
                <button class="banner__button">Get Started<svg width="18.000000" height="16.000000"
                        viewBox="0 0 18   16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path id="Vector" d="M1 7.43L14.72 7.29M9.61 0.91L16.14 7.43L9.48 14.08" stroke="#CDA274"
                            stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
        <PoductsContent />

        <div class="counter">
            <div class="counter__counter">
                <div class="count" v-for="counter in counters" :key="counter.id">
                    <p class="number">{{ counter.date }}</p>
                    <p class="text">{{ counter.dateName }}</p>
                </div>
            </div>


    </div>
    </div>
</template>

<script>
import PoductsContent from './PoductsContent.vue'
import { mapState } from 'vuex';

export default {
    name: 'IndexContent',

	components: { PoductsContent },
    data() {
        return {

        };
    },

    mounted() {

    },

    computed: {
        ...mapState(['imageBanner', 'counters']),
    },

    methods: {
        imgUrl() {
            return require(`@/assets/${this.imageBanner}`)
        },
    },
};
</script>
<style>
    .banner {
        padding-left: calc(50% - 2000px / 2);
        padding-right: calc(50% - 1200px / 2);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
    }
    .first {
        border-top-right-radius: 15%;
    }
    .banner__image {
        width: 100%;
        position: relative;
        border-radius: 100px;
    }

    .banner__content {
        position: absolute;
        width: 434px;
        height: 342px;
        padding: 10px 50px;
    }

    .banner__title {
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 65px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0px;
    }

    .banner__text {
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
        align-items: center;
        padding: 0px;
    }

    .banner__button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 26px 49px 26px 48px;
        border-radius: 18px;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        background: rgb(41, 47, 54);
        margin: 21px 0px;

        color: rgb(255, 255, 255);
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: center;
    }

    .counter {
    height: 457px;
    background: rgb(244, 240, 236);
    margin-bottom: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .counter__counter {
        display: flex;
        padding-left: calc(50% - 2000px / 2);
        padding-right: calc(50% - 1200px / 2);
    }
    
    .count {
        display: flex;
        width: 223px;
        height: 155px;
        gap: 16px;
        align-items: center;
        flex-direction: column;
    }
    .count:not(:last-child) {
        border-right: 1px solid rgb(205, 162, 116);
    }

    .number {
        color: rgb(205, 162, 116);
        font-family: DM Serif Display;
        font-size: 85px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
    }

</style>