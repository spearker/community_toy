<template>
  <div class="itemView">
    <div class="itemTitleArea">
      <div class="items" v-for="(item, idx) in header" :key="idx" :style="`width: ${item.width}px;`">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
  <div class="itemView" v-for="(item, idx) in items" :key="`item-${idx}`">
    <div class="itemTitleArea">
      <div class="items" v-for="(headerItem, idx) in header" :key="idx" :style="`width: ${headerItem.width}px;`">
        <router-link class="link" :to="`/detail/${item.id}`">
          <p>{{item[headerItem.key]}}</p>
        </router-link>
      </div>
    </div>
    <div class="itemSubmitArea">
      <CustomButton v-bind:title="'수정'"/>
      <CustomButton v-bind:title="'삭제'"/>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/Button/CustomButton";

export default {
  name: 'ListItem',
  props: ['header', 'items'],
  components: {
    CustomButton
  }
}
</script>

<style>
  .itemView {
    display: flex;
    justify-content: flex-start;
  }
  .itemTitleArea {
    /*background-color: red;*/
    width: 91%;
    height: 30px;
    display: flex;
  }
  .itemSubmitArea {
    width: 9%;
    height: 30px;
    display: flex;
    justify-content: space-between;
  }
  .items{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .items > p {
    text-align: center;
  }
  .link {
    text-decoration: none;
    color: inherit;
  }
</style>
