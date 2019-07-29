<template>
  <div>
    <div class="stick" />

    <!-- background -->
    <v-parallax class="background" src="../assets/img_main_bg.jpg" :height="getHeight()">
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
.stick {
  height: 500px;
}

.background {
  position: absolute;
  width: 100%;
  left: 0; top: 0;
}

@media screen and (max-width: 600px) {
  span.main-centertext {
    width: 230px;
  }
}
</style>
