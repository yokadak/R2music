<template>
  <div>
  <navTop>
    <div slot="left"><span class="fa fa-user"></span></div>
    <div slot="center" class="inputWrapper"><input><span class="fa fa-search"></span></div>
    <div slot="right"><span class="fa fa-navicon"></span></div>
  </navTop>
  </div>
</template>

<script>
  import navTop from 'components/common/navBar/navTop'


export default {
  name: "navTest",
  data() {
    return {

    }
  },
  components: {
    navTop,
  },
  methods: {
  }
}
</script>

<style  scoped>
.fa{
  font-size: 26px;
  color: var(--icon-color);
}
.fa-navicon{
  font-size: 20px;
}
.inputWrapper{
  width: 100%;
  position: relative;
}
.inputWrapper .fa-search{
  font-size: 18px;
  color:#706b6b;
  position:absolute;
  top:4px;
  right: 8px;
}
.center input{
  width: 100%;
  height: 28px;
  border-radius: 10px;
  border:none;
  outline: none;
  padding-left:10px;
  font-size: 14px;
  color: var(--search-text);
}

</style>
