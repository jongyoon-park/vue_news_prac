<template>
  <div>
    <list-item />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
//주로 데이터 요청은 created와 beforMount에서 많이 요청 -> mount 되고 나서 데이터가 들어가면 화면을 다시 그리게 되기 때문에
export default {
  components: {
    ListItem
  },
  created() {
    this.$store.dispatch('FETCH_ASK_LIST')
  }
}
</script>

<style scoped>
</style>
