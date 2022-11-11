<template>
  <button class="btn btn-primary">
<!--    <i :class="'fa fa-2x ' + faicon"></i>-->
    <i class="fa fa-2x" :class="faicon"></i>
  </button>
</template>

<script>
export default {
  name: "Fab",
  props: {
    faicon: {
      type: String,
      require: true,
      default: 'fa-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
}
</style>