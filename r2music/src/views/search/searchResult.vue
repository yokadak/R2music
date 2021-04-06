<template>
  <div class="searchResult">
    <searchNav></searchNav>
    <searchLabel class="searchLabel"></searchLabel>
    <songBox></songBox>  
  </div>
</template>

<script>
  import searchNav from './searchNav'
  import searchLabel from './searchLabel'
  import songBox from 'components/content/base/songBox'

export default {
  name:"searchResult",
  components:{
    searchNav,
    searchLabel,
    songBox  
  }
}
</script>

<style scoped>
</style>