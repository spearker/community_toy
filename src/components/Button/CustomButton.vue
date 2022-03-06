<template>
  <button>
    <p>{{ title }}</p>
  </button>
</template>

<script>

export default {
  name: 'CustomButton',
  props: ['title'],
  components: {
  }
}
</script>

<style>
  button {
    height: 100%;
  }

  p{
    padding: 0;
    margin: 0;
  }
</style>
