<template>
  <v-layout class="mt-12" align-center justify-center fill-height wrap>
    <v-flex sm10>
      <v-layout wrap>
        <v-flex xs12 sm6 row justify-center justify-sm-start>
          <v-img class="align-self-center" src="../assets/ci_wireframe.jpg" max-width="200" />
        </v-flex>
        <v-flex xs12 sm6>
          <h4 class="contents title font-weight-bold mt-5 mt-sm-0">모양(Shape)</h4>
          <p class="contents">
            원 도형들은 사람들을 의미하며,
            도형이든 사람이든 뭉치면 하나가 되어 서로 의존하고
            협력하면 하나의 작품이 나온다는 의미로 제작되었습니다.
          </p>
          <h4 class="contents title font-weight-bold mt-5 mt-sm-0">색상(Color)</h4>
          <p class="contents">
            믿음을 보여주는 푸른 계열 색상과
            편안함을 보여주는 녹색 계열 색상을 조합하여
            하나의 작품, 믿음, 편안함을 하나의 CI로 표현하였습니다.
          </p>
        </v-flex>
        <v-flex xs12 class="mt-5 mt-sm-0">
          <v-img class="ma-auto" src="../assets/logo_big.jpg" />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ci',
};
</script>

<style lang="scss" scoped>
.sub-title, .contents {
  color: #646464
}
</style>
