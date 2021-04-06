<template>
  <div class="bgBox userBgBox">
    <userInfoBox class="userInfoBox"></userInfoBox>
    <userCollect class="userCollect"></userCollect>
    <userOwnList class="userOwnList"></userOwnList>
  </div>
</template>

<script>
    import userInfoBox from './userInfoBox'
    import userCollect from './userCollect'
    import userOwnList from './userOwnList'
export default {
  name:"userBox",
  components:{
     userInfoBox,
     userCollect,
     userOwnList
  }
}
</script>

<style>
  .userBgBox{
   padding-top: 25px;
}
  .userCollect{
    margin-top: 20px;
  }
  .userOwnList{
    margin-top: 10px;
  }

</style>