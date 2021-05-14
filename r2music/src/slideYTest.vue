<template>
     <slideY class="wrapper">
          <div class="slide-page page1">page1</div>
          <div class="slide-page page2">page2</div>
          <div class="slide-page page3">page3</div>
          <div class="slide-page page4">page4</div>
     </slideY>
</template>

<script>
  import slideY from 'components/common/scroll/slideY'

  export default {
    name:"slideYTest",
    components:{
      slideY
    }
  }
</script>

<style scoped>
    
  .wrapper{
    height: 600px;
    overflow: hidden;
  }
    
    .slide-page{
      width: 100%;
      text-align: center;
      font-size:60px;
    }
      .page1{
background-color:yellowgreen;
      }
        
      .page2{
 background-color:green;
      }
       
      .page3{
 background-color: red;
      }
       
      .page4{
 background-color: blue;
      }
       
</style>