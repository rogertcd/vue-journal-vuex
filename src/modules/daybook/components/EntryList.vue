<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entrada" />
    </div>
    <div class="entry-scrollarea">
      <Entry v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
export default {
  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import('@/modules/daybook/components/Entry'))
  }
}
</script>

<style lang="scss" scoped>
input {
  height: 50px;
}
.entry-list-container {
  border-right: 1px solid #123e50;
  height:calc(100vh - 56px);
}

.entry-scrollarea {
  height:calc(100vh - 110px);
  overflow: scroll;
}
</style>