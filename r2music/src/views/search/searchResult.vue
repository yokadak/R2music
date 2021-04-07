<template>
  <div class="searchResult">
    <searchNav></searchNav>
    <songBox></songBox>  
  </div>
</template>

<script>
  import searchNav from './searchNav'
  import songBox from 'components/content/base/songBox'

export default {
  name:"searchResult",
  components:{
    searchNav,
    songBox  
  },
  data(){
    return{

    }
  },
  methods: {

  },
}
</script>

<style scoped>
</style>