<template>
  <div>
    <list-item />
  </div>
</template>

<script>

import ListItem from "@/components/ListItem.vue";

export default {
  components : {
    ListItem,
  },
  data() {
    return {
      fetchType : "FETCH_NEWS"
    }
  }
}
</script>

<style scoped>
</style>
