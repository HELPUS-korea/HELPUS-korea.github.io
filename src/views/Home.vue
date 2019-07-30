<template>
  <div>
    <div class="stick" />

    <!-- background -->
    <v-parallax class="background" src="../assets/img_main_bg.jpg" :height="getHeight()">
      <!-- center text -->
      <v-layout column align-center justify-center>
        <span class="main-centertext">
          <img src="../assets/img_main_centertext.png"></span>
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

      const height = ((xs || sm || md) && 500) || ((lg || xl) && 800);

      // update stick height
      if (this.$refs.stick) {
        this.$refs.stick.style = `height: ${height}px`;
      }

      return height;
    },
  },
};
</script>

<style lang="scss" scoped>
$xs: 600px;
$md: 1264px;

.background {
  position: absolute;
  width: 100%;
  left: 0; top: 0;
}

.stick {
  height: 684px;
}

@media screen and (max-width: $xs) {
  span.main-centertext {
    width: 230px;
  }
}

@media screen and (max-width: $md) {
  .stick {
    height: 452px;
  }
}
</style>
