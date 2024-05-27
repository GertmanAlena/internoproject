<template>
  <div>
    <div class="footer index">
        <div class="footer__logo">
            <div class="header__name">
                <img class="image_logo" src="../assets/Logo.png" alt="logo">
                <p class="logo__text">Interno</p>

            </div>
            <p class="description">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="icons">
                <a class="icon-twit" href="#">
                    <svg width="18.000000" height="15.000000" viewBox="0 0 18 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path id=""
                            d="M17.46 1.44C16.97 2.18 16.33 2.81 15.63 3.34L15.63 3.83C15.63 8.72 11.94 14.31 5.16 14.31C3.05 14.31 1.11 13.71 -0.5 12.66C-0.22 12.69 0.06 12.73 0.37 12.73C2.1 12.73 3.68 12.13 4.94 11.14C3.33 11.11 1.96 10.05 1.5 8.58C1.75 8.61 1.96 8.65 2.2 8.65C2.52 8.65 2.87 8.58 3.15 8.51C1.46 8.16 0.2 6.68 0.2 4.89L0.2 4.85C0.69 5.13 1.29 5.27 1.89 5.31C0.87 4.64 0.23 3.51 0.23 2.25C0.23 1.55 0.41 0.91 0.73 0.39C2.55 2.6 5.3 4.08 8.35 4.25Q8.25 3.83 8.25 3.41C8.25 1.37 9.9 -0.28 11.94 -0.28C13 -0.28 13.94 0.14 14.65 0.88C15.46 0.7 16.26 0.39 16.97 -0.04C16.69 0.84 16.12 1.55 15.35 2C16.09 1.93 16.83 1.72 17.46 1.44Z"
                            fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd" />
                    </svg>
                </a>
                <a class="icon-in" href="#">
                    <svg width="16.000000" height="15.000000" viewBox="0 0 16 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path id=""
                            d="M3.38 0.89C3.38 1.95 2.54 2.83 1.48 2.83C0.46 2.83 -0.38 1.95 -0.38 0.89C-0.38 -0.13 0.46 -0.97 1.48 -0.97C2.54 -0.97 3.38 -0.13 3.38 0.89ZM15.37 14.75L12.1 14.75L12.1 9.65C12.1 8.42 12.07 6.87 10.38 6.87C8.69 6.87 8.44 8.17 8.44 9.54L8.44 14.75L5.17 14.75L5.17 4.23L8.3 4.23L8.3 5.67L8.34 5.67C8.8 4.87 9.85 3.99 11.43 3.99C14.74 3.99 15.37 6.17 15.37 8.98L15.37 14.75ZM3.14 4.23L3.14 14.75L-0.13 14.75L-0.13 4.23L3.14 4.23Z"
                            fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>

        <div class="footer__pages">
            <h3 class="pages__title">Pages</h3>
            <a class="active" href="#">Home</a>
            <a class="active" href="#">Project</a>
            <a class="active" href="#">Blog</a>
        </div>

        <div class="footer__contact">
            <h3 class="contact__title">Contact</h3>
            <p class="contact__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p class="contact__text">contact@interno.com</p>
            <p class="contact__text">(123) 456 - 7890</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent.',

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
    .index {
        padding-left: calc(50% - 1200px/2);
        padding-right: calc(50% - 1200px/2);
    }
    .footer {
        padding-bottom: 134px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 60px;
        justify-content: center;
    }
    .header {
        padding-left: calc(50% - 1200px/2);
        padding-right: calc(50% - 1200px/2);
        display: flex;
        align-items: center;
        padding-bottom: 57px;
        padding-top: 53px;
    }
    .image_logo {
        width: 34px;
        height: 34px;
        left: 0%;
        right: 0%;
        top: 23.53%;
        bottom: -23.53%;
    }
    .header__name {
        display: flex;
        width: 50%;
        gap: 10px;
        align-items: center;    
        margin-top: -30px;

    }
    .logo__text {
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 40px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0%;
            text-align: left;
    }
    .description{
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
        padding-bottom: 31px;
        padding-top: 18px;
    }
    .icons{
        display: flex;
        gap: 54px;
    }
    
    .footer__pages{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-left: 101px;
    }
    .pages__title{
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: left;
        padding-bottom: 9px;
    }
    .active{
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 300%;
        letter-spacing: 1%;
        text-align: left;
    }
    .footer__contact{
        padding-left: 96px;
    }
    .contact__title{
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: left;
    }
    .contact__text{
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 45px;
    }
</style>
