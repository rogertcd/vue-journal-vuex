<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name: 'entry', params: {id: 10}})"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">09</span>
      <span class="mx-1 fs-5">November</span>
      <span class="mx-2 fw-light">2022, Wednesday</span>
    </div>
    <div class="entry-description">
      sdfjbdkjf sdfksdf ks klsdfn lsndf sd fksd slafsdkf ns fksd fdf sdfj xcxzcn woerie xccn werowier sd,mnd,
      sdfhsjdfh sdfdkf ñlsdfoer qweqp aosidp aslmkcneu asdl2o ewoprk 239vm, zdsdf
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry"
}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover { // Propio de sass para evitar vovler a colocar todo lo de arriba
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description{
    font-size: 12px;
  }

}
</style>