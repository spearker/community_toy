<template>
  <div id="detailContainer">
    <div id="detailView">
      <div id="detailTitle">
        <p>{{ title }}</p>
      </div>
      <div id="detailDate">
        <p>{{ writer }} / {{ createdAt }}</p>
      </div>
      <div id="detailContents">
        <p>{{ contents }}</p>
      </div>
    </div>
    <div id="commentView"></div>
  </div>
</template>

<script>
import {items} from "../../Dummy/DummyData.js"

export default {
  name: 'DetailPage',
  components: {
  },
  data() {
    return {
      id: -1,
      title: '',
      createdAt: '',
      writer: '',
      contents: '',
    }
  },
  created() {
    const id = this.$route.params.id

    const detailItem = items.find((item) => {
      console.log(item.id === Number(id))
      return item.id === Number(id)
    })

    this.id = id
    this.title = detailItem.title
    this.createdAt = detailItem.createAt
    this.writer = detailItem.writer
    this.contents = detailItem.contents
  }
}
</script>

<style>
#detailContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
#detailView {
  paddint: 8px;
  width: 1200px;
  height: 600px;
}
#detailTitle > p {
  font-size: 22px;
  font-weight: bold;
}
#detailDate {
  color: #303030;
  border-bottom: 1px solid #b3b3b3;
  margin-bottom: 16px;
}
</style>
