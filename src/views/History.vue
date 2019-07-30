<template>
  <v-layout class="mt-12" align-center justify-center fill-height wrap>
    <!-- ci -->
    <v-flex xs12 sm6>
      <img class="ci ma-auto" src="../assets/icn_helpus_ci.jpg">
    </v-flex>

    <!-- texts -->
    <v-flex xs12 sm6>
      <h1 class="corp-name display-1 mt-10 mt-sm-0">연혁</h1>
      <v-layout wrap class="mt-3">
        <template v-for="(item, ind) in historyItems">
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
export default {
  name: 'history',
  data() {
    return {
      historyItems: [ // history
        {
          date: '2018.05',
          content: "순천향대학교 창업동아리 'HELPUS' 설립",
        },
        {
          date: '2018.07',
          content: '아산시 청년 창업 아이디어 경진대회 지원사업 확정',
        },
      ],
    };
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
