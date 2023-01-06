<template>
  <div id="app">
    <Toolbar/>
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: {
    Toolbar
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #35495e;
  text-decoration: none;
}
a:hover {
  color: #42B883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/*router transition*/
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
