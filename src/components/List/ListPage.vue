<template>
  <div id="listView">
    <div id="listTable">
      <ListItem v-bind:header="[...header]" v-bind:items="[...items]" />
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/List/ListItem";
import {header, items} from "../../Dummy/DummyData.js"

export default {
  name: 'ListPage',
  components: {
    ListItem
  },
  data() {
    return {
      header: [...header],
      items: [...items]
    }
  }
}
</script>

<style>
  #listView {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  #listTable {
    width: 1200px;
    height: 600px;
    border: 1px solid #b3b3b3;
  }
</style>
