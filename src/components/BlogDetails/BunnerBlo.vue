<template>
  <div>
    <div class="bannerBlog">
        <img :src="require(`@/assets/${imageBannerBlogDetails}`)" alt="imageBanner">
    </div>
    <BlogDetailsComponent />
  </div>
</template>

<script>
import BlogDetailsComponent from './BlogDetailsComponent.vue'
import { mapState } from 'vuex';
export default {
  name: 'BunnerBlo',

	components: { BlogDetailsComponent },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  computed: {
        ...mapState(['imageBanner', 'counters', 'imageBannerBlogDetails']),
    },

    methods: {
        imgUrl() {
            return require(`@/assets/${this.imageBanner}`)
        },
    },
};
</script>