<template>
  <div class="info">
  <div class="infoAbove"><slot name = "infoAbove"></slot></div>
  <div class="infoBetween"><slot name = "infoBetween"></slot></div>
  <div class="infoBelow"><slot name = "infoBelow"></slot></div>
  </div>
</template>

<script>
export default {
  name:"info",
  components:{

  }

}
</script>

<style>
  .info{
    width: 100%;
    height: 100%;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .infoAbove{
    order:1;
    width: 100%;
  }
  .infoBetween{
    order:2;
    width: 100%;
  }
  .infoBelow{
    order:3;
    width: 100%;
  }

</style>