<template>
  <div id="logo">

  </div>
  <div id="about_area">
    <CustomButton v-bind:title="'login'" />
  </div>
</template>

<script>
import CustomButton from "@/components/Button/CustomButton";

export default {
  name: 'HeaderComponent',
  components: {
    CustomButton
  }
}
</script>

<style>

</style>
