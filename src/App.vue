<template>
  <div id="App">
    <HeaderComponent />
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent";
// import ListPage from "@/components/List/ListPage";

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style>
#tableContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
