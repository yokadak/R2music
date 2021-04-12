<template>
  <div class="Test">
    <!-- 使用滚动组件 -->
     <scroll class="wrapper">
       <!-- 下面的内容替换了默认插槽 -->
       <div class="content">
          <div class="scrollTest">我是要纵向和横向都滚动的内容</div>
          <div class="scrollTest scrollTest2">我也是要纵向和横向都滚动的内容</div>
       </div>
    
     </scroll>
  </div>
</template>

<script>
  //导入刚才封装的滚动组件
  import scroll from './scroll'
export default {
  name:"scrollTest",
  components:{
    scroll        //注册组件
  }
}
</script>

<style scoped >
  .wrapper{
    background-color: green;
    height: 300px;
    width:300px;
    overflow: hidden;
  }
  /* 设置后该元素内的子元素都会横向排列，根据自己的需求来决定是否要设置
  *  纵向滚动不需要设置该类。
  */
  .content{
    display: inline-flex;
    overflow: hidden;
    }
  /* 设置滚动内容的宽和高都大于wrapper */
  .scrollTest,.scrollTest2{
     background-color:red;
     width: 900px;
     height: 600px;
     font-size: 30px;
     font-weight: bold;
  }
  .scrollTest2{
     background-color:yellowgreen;
  }

</style>