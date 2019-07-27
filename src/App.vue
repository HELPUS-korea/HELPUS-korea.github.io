<template>
  <v-app>
    <!-- toolbar -->
    <v-app-bar app flat class="pt-1">
      <!-- title -->
      <v-toolbar-title>
        <span><v-img src="./assets/img_logo_company.png" /></span>
      </v-toolbar-title>

      <v-spacer class="hidden-md-and-up" />

      <!-- toolbar items -->
      <v-toolbar-items>
        <!-- hidden le sm -->
        <v-btn v-for="item in navItems" :key="`nav-${item.title}`"
          v-text="item.title" text width="120"
          class="hidden-sm-and-down" />
      </v-toolbar-items>

      <!-- visible le sm -->
      <v-btn text icon @click="drawer = true" class="icon-button hidden-md-and-up">
        <v-icons name="menu"></v-icons></v-btn>

      <!--
      <template v-slot:extension>
        <div v-resize="resizeNav" ref="sub-toolbar" class="sub-toolbar">
          <v-item-group>
            <v-item><v-btn text x-large width="135">b1</v-btn></v-item>
            <v-item><v-btn text x-large width="135">카카오 봇</v-btn></v-item>
          </v-item-group>
        </div>
      </template>
      -->
    </v-app-bar>

    <!-- nav drawer -->
    <v-navigation-drawer v-model="drawer" right app temporary>
      <v-list class="pt-1">
        <!-- close button -->
        <v-list-item class="pr-0">
          <v-list-item-content class="align-end pt-0">
            <v-list-item-title class="text-right">
              <v-btn class="icon-button ma-0" text icon
                @click="drawer = false"><v-icons name="x" /></v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- nav groups -->
        <v-list-group v-for="nav in navItems" :key="`drawer-${nav.title}`">
          <!-- subject -->
          <template v-slot:activator>
            <v-list-item-title>{{ nav.title }}</v-list-item-title>
          </template>

          <!-- children -->
          <v-list-item v-for="(item, ind) in nav.children" :key="`drawer-c-${item.title}${ind}`"
            :to="item.link">
            <v-list-item-title v-text="item.title" class="pl-10" />
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-content app>
      <!-- content -->
      <router-view />

      <!-- footer -->
      <v-footer class="mt-10">
        <v-container class="text-center">
          <v-layout wrap>
            <v-flex xs12>
              <span class="mr-4 mr-sm-3 mr-md-4" v-text="`사명: ${info.companyName}`" />
              <span class="mr-sm-3 mr-md-4" v-text="`대표: ${info.CEO}`" />
              <span class="hidden-xs-only" v-text="`주소: ${info.address}`" />
            </v-flex>
            <v-flex xs12 class="hidden-sm-and-up mt-2">
              <span v-text="`주소: ${info.address}`" />
            </v-flex>
            <v-flex xs12 class="mt-2">
              <span class="mr-4 mr-sm-3 mr-md-4" v-text="`사업자등록번호: ${info.registration}`" />
              <span class="hidden-xs-only mr-4 mr-sm-3 mr-md-4" v-text="`Tel: ${info.tel}`" />
              <span class="hidden-xs-only mr-sm-3 mr-md-4" v-text="`Email: ${info.email}`" />
            </v-flex>
            <v-flex xs12 class="hidden-sm-and-up mt-2">
              <span v-text="`Tel: ${info.tel}`" />
            </v-flex>
            <v-flex xs12 class="hidden-sm-and-up mt-2">
              <span v-text="`Email: ${info.email}`" />
            </v-flex>
            <v-flex xs12 class="mt-6">
              <span>Copyright ⓒHELPUS Corporation. All Rights Reserved.</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    info: {
      companyName: 'HELPUS',
      CEO: '김두연',
      address: '충청남도 아산시 신창면 순천향로 22 순천향대학교 공과대학 9126호',
      registration: '000-00-00000',
      tel: '010-7773-3461',
      email: 'ceo@help-us.kr',
    },
    navItems: [
      {
        title: '헬퍼스',
        children: [
          {
            title: '소개',
            link: 'introduce',
          },
          {
            title: '연혁',
            link: 'history',
          },
          {
            title: 'CI',
            link: 'ci',
          },
        ],
      },
      {
        title: '서비스',
        children: [
          {
            title: '카카오 봇',
            link: 'kakao-bot',
          },
          {
            title: '셔틀웨어',
            link: 'shuttle-where',
          },
        ],
      },
      {
        title: '게시판',
        children: [
          {
            title: '공지사항',
            link: 'notice',
          },
        ],
      },
      {
        title: '고객지원',
        children: [
          {
            title: 'Q & A',
            link: 'qna',
          },
          {
            title: '오시는 길',
            link: 'map',
          },
        ],
      },
    ],
  }),
  methods: {
    resizeNav() {
      const navItemsElement = document.querySelector('header div.v-toolbar__items');
      const subToolbarElement = this.$refs['sub-toolbar'];

      subToolbarElement.style = `margin-left: ${navItemsElement.offsetLeft - subToolbarElement.offsetLeft}px`;
    },
  },
};
</script>

<style lang="scss">
/* global */

@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css); /* font */

$sm: 960px;

/* nav positioning */
header > div.v-toolbar__content:first-child {
  justify-content: space-around;
  border-bottom: 3px solid #eee;
}
header > div.v-toolbar__extension:nth-child(2) {
  border-bottom: 3px solid #eee;
}

/* buttons that has icon */
button.icon-button > span {
  width: 100%;
}
button.icon-button > span > svg {
  width: 50%;
}

/* footer */
footer {
  background: #fafafa !important;
  font-size: 14px;
}

/* font */
* {
  font-family: "Nanum Gothic", sans-serif;
}

@media screen and (max-width: $sm) {
  header > div.v-toolbar__content:first-child {
    justify-content: inherit;
  }
}
</style>
