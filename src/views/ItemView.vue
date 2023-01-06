<template>
  <section>
    <div>
      <div>
        User
      </div>
      <div class="user-container">
        <router-link :to="`/user/${askInfo.user}`">{{askInfo.user}}</router-link>
        <small>{{askInfo.point}} points by  {{askInfo.time_ago}}</small>
      </div>
      <h2>{{askInfo.title}}</h2>
      <p v-html="askInfo.content"></p>
    </div>
  </section>
  <section>
    <div>
      <p v-for="comment in askInfo.comments">
        <small>{{comment.user}} {{comment.time_ago}}</small>
        <br>
        <div v-html="comment.content"></div>
      </p>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed : {
    ...mapGetters({
      askInfo : "askInfo"
    })
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch("FETCH_ASK_INFO", askId)
  }
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
  }
</style>
