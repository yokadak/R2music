<template>
<!-- 该组件显示用户喜欢的歌曲、歌单、专辑列表 -->
<div>
  
  <div class="top">
    <navTop class="">
      <div slot="center"><span >我喜欢</span></div>
      <div slot="right"><span class="fa fa-ellipsis-h"></span></div>
    </navTop>
    <!-- TODO:tab的标签是否应该用router-link来实现跳转？ -->
    <div class = "tab" v-if="collections">
      <div v-for="(item,index) of collections" 
        :key="index"
        :class="{'active': currentPageIndex === index}"
        @click="goToPage(index)">
        <span>{{item.category}} </span>
        <span class="count">{{item.collection.length}}</span>
      </div>
      <div class="tabHighLight" ref='tabHighLight'></div>
    </div>
  </div>

  <slideX class="slideX-wrapper" ref="userLikedSlideX" v-if="collections">
    <!-- TODO:这里要加个滚动 滚动报错,滚动有些问题-->
    <scroll class="scrollYwrapper likedSongs">
      <div class="content">
        <songBox :songs= "collections[0].collection"></songBox>
      </div>
    </scroll>
    <div class="albumCollections">
      <alOrPlList :list= "collections[1]"></alOrPlList>
    </div>
    <div class="playListCollections">
      <alOrPlList :list= "collections[2]"></alOrPlList>
    </div>
  </slideX>

  <miniPlayer></miniPlayer>

</div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'
  import slideX from 'components/common/scroll/slideX.vue'
  import scroll from 'components/common/scroll/scroll'
  import songBox from 'components/content/base/songBox'
  import miniPlayer from 'components/content/base/miniPlayer'
  import alOrPlList from '../../songList/alOrPlList'
 
export default {
  name:"list",
  components:{
    navTop,
    slideX,
    scroll,
    songBox,
    miniPlayer,
    alOrPlList
  },
  data() {
    return {
      name:"name",
      collections:this.$route.params.collections,
      currentPageIndex:this.$route.params.fromIndex,//当前slide页面的索引值
    }
  },
  mounted() {
    this.init()
    // const slideX = this.$refs.userLikedSlideX
    // slideX.slideX.on("slideWillChange",(page)=>{
    //   this.slideWillChange(page)
    // })
  },
  methods: {
    init(){
      const slideX = this.$refs.userLikedSlideX
      slideX.goToPage(this.currentPageIndex,0,0)
      this.$refs.tabHighLight.style = `left:${this.currentPageIndex * 44}%;transition:left 0s`
      slideX.slideX.on("slideWillChange",(page)=>{
      this.slideWillChange(page)
    })
    },
    slideWillChange(page){
      this.currentPageIndex = page.pageX
      this.$refs.tabHighLight.style = `left:${page.pageX * 44}%;`
    },
    goToPage(index){
      // this.currentPageIndex = index
      this.$refs.userLikedSlideX.goToPage(index,0,300)
    },
  },
}
</script>

<style scoped>
  .top{
    background-color: var(--color-tint);
  }
  .slideX-wrapper{
    overflow: hidden;
    height: calc(100vh - 150px);
  }
  .scrollYwrapper{
    overflow: hidden;
    height: calc(100vh - 155px);
    /* background-color: green; */
  }
  .content{
    /* background-color: red; */
    padding-top: 10px;
    min-height:102%
  }
  .tab{
    height: 30px;
    width: 85%;
    color: var(--color-text);
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin: auto;
    position: relative;
  }
  .active{
    color:white;
  }
  .count{
    font-size: 12px;
  }
  /* 标签底下的高亮块 */
  .tabHighLight{
    background-color: #fff;
    height: 3px;
    width: 20px;
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left:10px;
    transition: left 0.3s
  }
  
</style>