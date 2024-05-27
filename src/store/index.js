import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        imageBanner: "banner.png",
        imageBannerBlogDetails: "Image_laceholder.png",
        projectProducts: [
            {
                id: 1,
                image: "1.png",
                title: "Modern Kitchan",
                sort: "Decor / Artchitecture",
                style: "border-top-right-radius",
                radius: "15%",
            },
            {
                id: 2,
                image: "2.png",
                title: "Modern Kitchan",
                sort: "Decor / Artchitecture",
                style: "border-top-left-radius",
                radius: "15%",
            },
            {
                id: 3,
                image: "3.png",
                title: "Modern Kitchan",
                sort: "Decor / Artchitecture",
                style: "border-bottom-right-radius",
                radius: "15%",
            },
            {
                id: 4,
                image: "4.png",
                title: "Modern Kitchan",
                sort: "Decor / Artchitecture",
                style: "border-bottom-left-radius",
                radius: "15%",
            }
        ],
        counters: [
            {
                date: 12,
                dateName: "Years of Experience",
            },
            {
                date: 85,
                dateName: "Success Project",
            },
            {
                date: 15,
                dateName: "Active Project",
            },
            {
                date: 95,
                dateName: "Happy CUstomers",
            }
        ],

        activeIndex: 0,
        articles: [
            {
                id: 'kitchen',
                title: 'Let’s Get Solution for Building Construction Work',
                image: 'articleBlog1.png',
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
                    { id: 2, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                    { id: 3, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                ],
                image: "kitchen.png",
                imageText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
            },
            {
                id: 2,
                tag: 'Bedroom',
                title: 'Bedroom sprints are great',
                text: 'Bedroom ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                items: [
                    { id: 1, text: 'Bedroom to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                    { id: 2, text: 'Bedroom to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                    { id: 3, text: 'Bedroom to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
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
                    { id: 2, text: 'Contrary to.' },
                    { id: 3, text: 'Contrary to popular belief.' },
                ],
                image: "",
                imageText: 'Bedroom ipsum dolor sit amet.'
            }
        ],

        buttons: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom',],
        tagsName: [
            { title: 'Kitchen' },
            { title: 'Bedroom' },
            { title: 'Building' },
            { title: 'Architecture' },
            { title: 'Kitchen Planning' },
            { title: 'Bedroom' }
        ]
    },
    getters: {
        getActiveIndex: (state) => state.activeIndex,

    }
})