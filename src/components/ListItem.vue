<template>
  <div>
    <ul class="news-list">
      <!-- v-for는 넘겨준 배열을 반복문 돌려 ask를 뱉어줌 -->
      <li v-for="item in listItems" class="post">
        <div class="points">
          {{item.points || 0}}
        </div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">{{item.title}}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
            </template>
          </p>
          <small class="link-text">{{item.time_ago}} by
            <router-link
              v-if="item.user" :to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
            <a v-else :href="item.url" class="link-text">{{item.domain}}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed : {
    listItems() {
      const name = this.$route.name;
      if (!name) {
        return this.$store.state.news;
      }
      if (name === 'ask') {
        return this.$store.state.askList;
      }
      if (name === 'jobs') {
        return this.$store.state.jobs;
      }

      return this.$store.state.news;
    }
  },
  created() {
    const name = this.$route.name;
    let actionName = 'FETCH_NEWS';

    if (name === 'ask') {
      actionName = "FETCH_ASK_LIST";
    }
    if (name === 'jobs') {
      actionName = "FETCH_JOBS";
    }

    this.$store.dispatch(actionName);
  }
}
</script>

<style scoped>
  .news-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42B883;
  }
  .news-title {
    margin: 0;
  }
  .link-text {
    color:  #828282;
  }
</style>
