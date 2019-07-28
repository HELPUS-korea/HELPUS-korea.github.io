<template>
  <div>
    <!-- background -->
    <v-parallax src="../assets/img_main_bg.jpg" :height="getHeight()">
      <!-- center text -->
      <v-layout column align-center justify-center>
        <span class="main-centertext"><v-img src="../assets/img_main_centertext.png" /></span>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    /**
     * get image height using break-points
     */
    getHeight() {
      const {
        xs, sm, md, lg, xl,
      } = this.$vuetify.breakpoint;

      return ((xs || sm || md) && 500) || ((lg || xl) && 800);
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  span.main-centertext {
    width: 230px;
  }
}
</style>
