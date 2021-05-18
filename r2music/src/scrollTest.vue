<!--
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2020-10-26 12:41:10
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-18 19:34:53
-->
<template>
    <!-- 使用滚动组件 -->
     <scroll class="wrapper" ref="lyricList">
       <!-- 下面的内容替换了默认插槽 -->
       <div class="content">
         <!-- <ul>
           <li v-for="(item,index) of list" 
           :key="index"
           class="list"
           ref="lyricLine"
           :style="index === scrollIndex  ? playingLyricStyle: ''"
           >{{item}}</li>
         </ul> -->
          <div class="scrollTest">我是要纵向和横向都滚动的内容</div>
          <div class="scrollTest scrollTest2"
          >我也是要纵向和横向都滚动的内容</div>
       </div>
     </scroll>
</template>

<script>
  //导入刚才封装的滚动组件
  import scroll from 'components/common/scroll/scroll'

export default {
  name:"scrollTest",
  components:{
    scroll        //注册组件
  },
  data() {
    return {
      list:[1111111,2222222,333333,444444,555555,6666666,777777,888888,9999999,10000000],
      scrollIndex:0,
      playingLyricStyle:"color:white;font-size:40px;font-weight:bold;",//正在播放的歌词的样式

    }
  },
  mounted() {
    // setInterval(()=>{
    //  let div2 = this.$refs.lyricLine[this.scrollIndex]
    //   if(this.scrollIndex < 10){
    //     this.$refs.lyricList.scrollToElement(div2,1000)
    //     console.log(this.scrollIndex)
    //   }
    //   this.scrollIndex ++
    // },2000)
  },
}
</script>

<style scoped >
  .wrapper{
    background-color: green;
    height: 625px;
    width:375px;
    overflow: hidden;
  }
  /* 设置后该元素内的子元素都会横向排列，根据自己的需求来决定是否要设置
  *  纵向滚动不需要设置该类。
  */
  .content{
    display: inline-flex;
    /* overflow: hidden; */
    }
  /* 设置滚动内容的宽和高都大于wrapper */
  .scrollTest,.scrollTest2{
     background-color:red;
     width: 900px;
     height: 1000px;
     font-size: 30px;
     font-weight: bold;
      /* margin-top: 200px; */
  }
  .list{
    background-color: aquamarine;
    height: 100px;
    color:black;
    font-size: 30px;
  }
  .scrollTest2{
     background-color:yellowgreen;
  }

</style>