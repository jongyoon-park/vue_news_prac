<template>
  <div>
    <list-item />
  </div>
  <!-- v-for는 넘겨준 배열을 반복문 돌려 ask를 뱉어줌 -->
</template>

<script>
import {mapGetters} from "vuex";
import ListItem from "@/components/ListItem.vue";
//주로 데이터 요청은 created와 beforMount에서 많이 요청 -> mount 되고 나서 데이터가 들어가면 화면을 다시 그리게 되기 때문에
export default {
  components: {
    ListItem
  },
  computed: {
    ...mapGetters({
      askList: "askList"
    })
    /*...mapState({
      askList: state => state.askList
    })*/
    /*ask() {
      return this.$store.state.askList;
    }*/
  },
  created() {
    this.$store.dispatch('FETCH_ASK_LIST')
  }
}
</script>

<style scoped>
</style>
