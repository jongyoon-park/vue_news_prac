<template>
  <div>
    <p>name : {{userInfo.id}}</p>
    <p>karma : {{userInfo.karma}}</p>
    <p>created : {{userInfo.created}}</p>
    <p>about : {{userInfo.about}}</p>
  </div>
</template>

<script>

export default {
  computed : {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER_INFO', username) //dispatch의 두번째 인자는 하나만 넘어가야 하기 때문에 여러 값이 넘어갈 경우 객체로 묶어서 보내야 함
  }
}
</script>

<style scoped>

</style>
