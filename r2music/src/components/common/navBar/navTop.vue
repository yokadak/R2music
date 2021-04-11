<template>
  <div class="navTop">
    <div class="left"><slot name = "left"><span class="fa fa-chevron-left" @click="toBack"></span></slot></div>
    <div class="center"><slot name = "center"></slot></div>
    <div class="right"><slot name = "right"><span class="fa fa-navicon"></span></slot></div>
  </div>
</template>

<script>
export default {
  name:"navTop",
  methods: {
    toBack(){
      this.$router.back();
    }
  },
}

</script>

<style lang ="less" scoped>
  .navTop{
    display: flex;
    border:none;
    height: 60px;
  }
  .left,.right{
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .right{
    color: var(--icon-color);
    font-size: 20px;
    
  }
  .center{
    display: flex;
    flex:1;
    position: relative;
    width:100%;
    font-size: 18px;
    align-items: center;
    justify-content:center;
  }
</style>
