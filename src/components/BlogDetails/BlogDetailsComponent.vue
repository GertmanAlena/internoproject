<template>
    <div>
        <section id="app" class="section-article index">
            <main class="main-article">
                <div class="article" v-for="article in articles" :key="article.id">
                    <h1 class="article-title">{{ article.title }}</h1>
                    <img :src="require(`@/assets/${article.image}`)" alt="imageBanner">
                    <div class="article-data">
                        <p>{{ article.data }}</p>
                        <p>{{ article.page }}</p>
                    </div>
                    <p class="article-description">{{ article.description }}</p>
                </div>

                <article class="advertisement">
                    <p class="advertisement__logo">“</p>
                    <p class="advertisement__text">The details are not the details.
                        They make the design.</p>
                </article>

                <!-- <article-all-component v-for="t in filteredArticle" :t="t"></article-all-component> -->
                <div class="articles-all" v-for="t in filteredArticle" :key="t.id">
                    <h1 class="articles-all-title">{{ t.title }}</h1>
                    <p class="articles-all-text">{{ t.text }}</p>
                    <div class="articles-all-list">
                        <ol class="li">
                            <li class="item" v-for="item in t.items" :key="item.id">{{ item.text }}</li>
                        </ol>
                        <!-- <img class="image" :src="t.image" :alt="t.name"> -->
                        <img :src="require(`@/assets/${t.image}`)" alt="imageBanner">
                        <p class="articles-all-text">{{ t.imageText }}</p>
                    </div>
                </div>


            </main>
            <div class="sort-article">
                <h2 class="sort-article__title">Tags</h2>
                <div class="sort-article__buttons">
                    <button class="btn" v-for="(button, index) in buttons" :key="button.id"
                        @click="onClickTag(index)">{{ button }}</button>
                </div>

            </div>

        </section>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    name: 'BlogDetailsComponent',

    data() {
        return {

        };
    },

    mounted() {

    },
    computed: {
        ...mapGetters('getActiveIndex'),
        ...mapState(['activeIndex', 'articles', 'tags', 'buttons', 'tagsName', 'articles.image']),
        filteredArticle() {
            return this.tags.filter(tg => tg.tag.includes(this.tagsName[this.activeIndex].title));

        },

    },


    methods: {
        imgUrl() {
            return require(`@/assets/${this.articles.image}`)
        },
        onClickTag(index) {
            if (this.activeIndex === index) {
                this.activeIndex = 0;
            } else {
                this.activeIndex = index;
            }
        },
    },
};
</script>
<style>
button {
    border: none;
}

.bannerBlog {
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.section-article {
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* Blog Details */
    position: static;
    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 93px 0px;
}

.main-article {}

.article {
    padding-bottom: 35px;
}

.article-title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
    padding-bottom: 11px;
}

.article-image {
    width: 100%;
}

.article-data {
    display: flex;
    justify-content: space-between;
    padding-right: 57px;
    padding-top: 35px;
    padding-bottom: 48px;
}

.article-description {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: justify;
}

.advertisement {
    margin-bottom: 27px;
    border-radius: 50px;
    background: rgb(244, 240, 236);
    position: relative;
    /* Автолейаут */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 53px 227px 53px 227px;
    position: relative;
    height: 140px;
}

.advertisement__logo {
    color: rgb(205, 162, 116);
    font-family: DM Serif Display;
    font-style: italic;
    font-size: 200px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
    position: absolute;
    width: 246px;
    height: 130px;
    left: 258px;
    right: -231px;
    top: 45px;
    bottom: -158px;
    transform: rotate(-180deg);
}

.advertisement__text {
    color: rgb(205, 162, 116);
    font-family: DM Serif Display;
    font-style: italic;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
    position: absolute;
    width: 345px;
    left: 187px;
    top: 132px;
    bottom: -53px;
}

.articles-all {}

.articles-all-title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
    padding-bottom: 20px;
}

.articles-all-text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
    padding-bottom: 24px;
}

.li {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
}

.item {
    padding-bottom: 32px;
}

.image {
    border-radius: 54px;
    padding-bottom: 20px;
}

.sort-article {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 52px;
    padding-top: 20px;
}

.sort-article__title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
}

.sort-article__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.btn {
    border-radius: 10px;
    background: rgb(244, 240, 236);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9px 30px 9px 30px;
    gap: 10px;

}

.btn:hover {
    background: rgb(18, 18, 18);
    color: rgb(252, 251, 250);
}
</style>