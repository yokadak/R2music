<template>
  <div class="homeInfo">
    <info>
      <div slot="infoAbove"><span class="fa fa-music"></span>
      <span class="songName">Behind the mask</span></div>
      <div slot="infoBetween"><span class="fa fa-user"></span>
      <span class="singerName">Yellow Magic Ochestra</span></div>
      <div slot="infoBelow"><span class="fa fa-dot-circle-o"></span>
      <span class="albumName">Y.M.O Best Selection</span></div>
    </info>
  </div>

  
</template>

<script>
    import info from 'components/content/base/info'
export default {
  name:"homeInfo",
  components:{
    info
  }
}
</script>

<style scoped>
.homeInfo{
  width: 70%;
  height:100%;
  margin-left: 7px;
}
.fa-music,.fa-user,.fa-dot-circle-o{
  font-size: 20px;
  color:var(--icon-color);
  margin-right: 10px;
  margin-left: 5px;
}
.songName{
  font-weight:bold;
  color:var(--color-high-text);
}
.singerName,.albumName{
  color:var(--color-high-text);
}

</style>