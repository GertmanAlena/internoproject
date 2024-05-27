<template>
  <div>
    404
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',

  data() {
    return {
      
    };
  },
};
</script>
<style scoped>
  .error {
    margin-top: 45px;
  }
  .error_content{
    padding-left: calc(50% - 600px);
    height: calc(100vh - 157px);
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .error_title{
    font-family: "DM Serif Display", serif;
    color: #CDA274;
    font-size: 250px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
    margin-bottom: 20px;
  }
  .error_subtitle{
    width: 560px;
    font-family: "DM Serif Display", serif;
    color: #292F36;
    font-size: 35px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    text-align: left;
    margin-bottom: 20px;
  
  }
  .error_btn {
    border-radius: 18px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: rgb(41, 47, 54);
    padding: 26px 49px 26px 48px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    margin-left: 52px;
    margin-top: 21px;
    border: 1px solid rgb(41, 47, 54);
  }
  
  .error_btn svg {
    margin-left: 10px;
  }
  
  .error_btn path {
    transition: all 0.3s;
  }
  
  .error_btn:hover {
    background-color: #CDA274;
    border: 1px solid #CDA274;
  }
  
  .error_btn:hover path {
    stroke: #292F36;
  }

  </style>
  