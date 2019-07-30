<template>
  <v-layout class="mt-12" align-center justify-center fill-height wrap>
    <!-- ci -->
    <v-flex xs12 sm6 class="text-center">
      <img class="ci ma-auto" src="../assets/icn_helpus_ci.jpg">
    </v-flex>

    <!-- texts -->
    <v-flex xs12 sm6>
      <h1 class="corp-name display-1 mt-10 mt-sm-0">연혁</h1>
      <v-layout wrap class="mt-3">
        <template v-for="(item, ind) in getEnvData('histories')">
          <v-flex xs12 sm2 :key="`history-date-${ind}`" class="mt-2 mt-sm-0">
            <span class="sub-title" v-text="item.date" /></v-flex>
          <v-flex xs12 sm10 :key="`history-content-${ind}`">
            <span class="content" v-text="item.content" /></v-flex>
        </template>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { getEnv, getPath } from '../plugins/tools';

export default {
  name: 'history',
  data() {
    return {
      env: null,
    };
  },
  methods: {
    /**
     * get environments data (lazy)
     *
     * @param path object path
     */
    getEnvData(path) {
      return getPath(this.env, path);
    },
  },
  async mounted() {
    this.env = await getEnv();
  },
};
</script>

<style lang="scss" scoped>
.corp-name, .contents {
  color: #646464;
}
.sub-title {
  color: #a0a0a0;
}

.ci {
  max-width: 200px;
}
</style>
