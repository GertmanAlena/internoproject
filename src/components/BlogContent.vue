<template>
    <div>
        <div class="bannerBlog">
            <img src="../assets/Image_laceholder.png" alt="banner__image">
        </div>

        <section class="section-article index">
            <main class="main-article">
                <div class="article" v-for="article in articles" :article="article" :key="article.id">
                    <h1 class="article-title">{{ article.title }}</h1>
                    <img class="article-image" :src="article.image" :alt="article.name" width="100">
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

                <div class="articles-all"  v-for="tg in filteredArticle" :tg="tg" :key="tg.id">
                    <h1 class="articles-all-title">{{ tg.title }}</h1>
                    <p class="articles-all-text">{{ tg.text }}</p>
                    <div class="articles-all-list">
                        <ol class="li">
                            <li class="item" v-for="item in tg.items" :key="item.id">{{ item.text }}</li>
                        </ol>
                        <img class="image" :src="tg.image" :alt="tg.name">
                        <p class="articles-all-text">{{ tg.imageText }}</p>
                    </div>
                </div>     
                

            </main>

            <div class="sort-article">
                <h2 class="sort-article__title">Tags</h2>
                <div class="sort-article__buttons">
                    <button class="btn" v-for="(button, index) in buttons" :button="button" @click="onClickTag(index)" :key="index">{{button}}</button>
                </div>
                
            </div>

        </section>

    </div>  
</template>

<script>
export default {
  name: 'BlogContent',

  data() {
    return {
        activeIndex: 0,
                articles: [
                    {
                        id: 'kitchen',
                        title: 'Let’s Get Solution for Building Construction Work',
                        image: "../assets/imageBlog.png",
                        page: 'Interior / Home / Decore',
                        data: '26 December,2022',
                        description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',

                    }
                ],
                tags: [
                    {
                        id: 1,
                        tag: 'Kitchen',
                        title: 'Design sprints are great',
                        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        items: [
                            { id: 1, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                            { id: 2, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
                            { id: 3, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
                        ],
                        image: "../assets/kitchen.png",
                        imageText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                    },
                    {
                        id: 2,
                        tag: 'Bedroom',
                        title: 'Bedroom sprints are great',
                        text: 'Bedroom ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        items: [
                            { id: 1, text: 'Bedroom to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                            { id: 2, text: 'Bedroom to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
                            { id: 3, text: 'Bedroom to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
                        ],
                        image: "",
                        imageText: 'Bedroom ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                    },
                    {
                        id: 2,
                        tag: 'Bedrooms',
                        title: 'Second Bedroom sprints are great',
                        text: 'Bedroom ipsum dolor sit amet, adipiscing.',
                        items: [
                            { id: 1, text: 'Contrary.' },
                            { id: 2, text: 'Contrary to.'},
                            { id: 3, text: 'Contrary to popular belief.'},
                        ],
                        image: "",
                        imageText: 'Bedroom ipsum dolor sit amet.'
                    }
                ],

                buttons:['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom',],
                tagsName: [
                    { title: 'Kitchen' },
                    { title: 'Bedroom' },
                    { title: 'Building' },
                    { title: 'Architecture' },
                    { title: 'Kitchen Planning' },
                    { title: 'Bedroom' }
                ]
    };
  },

  methods: {
    onClickTag(index) {
        if (this.activeIndex === index) {
            this.activeIndex = 0;
        } else {
            this.activeIndex = index;
        }
    },
                
    },
    computed: {
        filteredArticle() {
            return this.tags.filter(filterTag => filterTag.tag.includes(this.tagsName[this.activeIndex].title));

        }
    },
};
</script>
<style scoped>
    .bannerBlog{
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .section-article{
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
    .main-article{
    }
    .article{
        padding-bottom: 35px;
    }

    .article-title{
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
        padding-bottom: 11px;
    }
    .article-image{
        width: 100%;
    }
    .article-data{
        display: flex;
        justify-content: space-between;
        padding-right: 57px;
        padding-top: 35px;
        padding-bottom: 48px;
    }
    .article-description{
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: justify;
    }
    .advertisement{
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
    .advertisement__logo{
        color: rgb(205, 162, 116);
        font-family: DM Serif Display;
        font-style: italic;
        font-size: 200px;
        letter-spacing: 2%;
        position: absolute;
        left: 372px;
        right: px;
        bottom: -153px;
        transform: rotate(-180deg);
    }
    .advertisement__text{
        color: rgb(205, 162, 116);
        font-family: DM Serif Display;
        font-style: italic;
        font-size: 25px;
        letter-spacing: 2%;
        text-align: center;
        position: absolute;
        width: 345px;
        top: 107px;

    }
    .articles-all-title{
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
        padding-bottom: 20px;
    }
    .articles-all-text{
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
        padding-bottom: 24px;
    }
    .li{
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
    }

    .item{
        padding-bottom: 32px;
    }

    .image{
        border-radius: 54px;
        padding-bottom: 20px;
    }
    .sort-article{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-left: 52px;
        padding-top: 20px;
    }
    .sort-article__title{
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
    }
    .sort-article__buttons{
            display: flex;
            flex-wrap: wrap;
            gap: 13px;
            margin-top: 20px;
    }
    .btn{
        border-radius: 10px;
        background: rgb(244, 240, 236);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 9px 30px 9px 30px;
        gap: 10px;

    }
    .btn:hover{
        background: rgb(18, 18, 18);
        color: rgb(252, 251, 250);
    }
</style>
