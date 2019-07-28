<template>
  <v-layout class="mt-12" align-center justify-center fill-height wrap>
    <!-- ci -->
    <v-flex xs12 sm6>
      <v-img class="ma-auto" src="../assets/icn_helpus_ci.jpg" max-width="200" />
    </v-flex>

    <!-- texts -->
    <v-flex xs12 sm6>
      <p class="mt-10 hidden-sm-and-up" v-text="' '" />
      <h1 class="corp-name display-1">HELPUS</h1>
      <p class="sub-title title">
        살아가는데 편안함이 제공되고,<br>
        소소한 만족을 느끼며 살아야 삶이다.
      </p>
      <p class="contents mt-10">
        헬퍼스는 Helpers의 변형으로 도우미라는 의미입니다.<br>
        사람들이 살아가면서 소통, 편리를 추구하는데 있어 편의를 제공하고,<br>
        개개인의 도우미가 되는 목표를 가지고 나아가고 있습니다.
      </p>
      <p class="contents mt-10">
        어제와 오늘, 오늘과 내일이 반복되는 일상생활 속에서도<br>
        소소한 만족을 느끼며 살아가실 수 있도록 도움을 드리겠습니다.
      </p>
      <p class="gradient-text mt-10">
        <span>Communication</span> ·
        <span>relax</span> ·
        <span>convenience</span>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'about-us',
};
</script>

<style lang="scss" scoped>
.corp-name, .contents {
  color: #646464;
}
.sub-title {
  color: #a0a0a0;
}

.gradient-text {
  letter-spacing: 1px;
}
.gradient-text > span:nth-child(1) {
  color: #1e78b4;
}
.gradient-text > span:nth-of-type(2) {
  color: #1eb4b4;
}
.gradient-text > span:nth-of-type(3) {
  color: #00dc78
}
</style>
