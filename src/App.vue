<template>
  <v-app>
    <!-- toolbar -->
    <v-app-bar app flat class="pt-1" @mouseleave="hoverNav = false"
      :extension-height="getExtensionHeight()">
      <!-- title -->
      <v-toolbar-title>
        <span @click="$router.push('/')" class="title-logo">
          <img src="./assets/img_logo_company.png"></span>
      </v-toolbar-title>

      <v-spacer class="hidden-md-and-up" />

      <!-- toolbar items -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in getEnvData('menus')" :key="`nav-${item.title}`"
          v-text="item.title" text width="120"
          @mouseover="hoverNav = true" />
      </v-toolbar-items>

      <!-- mobile toolbar button -->
      <v-btn text icon @click="drawer = true" class="icon-button hidden-md-and-up">
        <v-icons name="menu"></v-icons></v-btn>

      <!-- sub-toolbar -->
      <div v-if="hoverNav"
        class="sub-toolbar hidden-sm-and-down d-flex justify-space-around white">
        <div class="shadow-title-logo" />
        <div class="sub-toolbar-items">
          <v-layout>
            <v-item-group v-for="nav in getEnvData('menus')" :key="`sub-toolbar-${nav.title}`"
              class="sub-toolbar-item d-inline-block">
              <v-item v-for="item in nav.children" :key="`sub-toolbar-item-${item.title}`">
                <span class="pa-5 text-center">
                  <router-link :to="item.link" v-text="item.title" /></span>
              </v-item>
            </v-item-group>
          </v-layout>
        </div>
      </div>
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
        <v-list-group v-for="nav in getEnvData('menus')" :key="`drawer-${nav.title}`">
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
      <transition name="fade">
        <!-- contents -->
        <v-container>
          <v-breadcrumbs :items="getBreadcrumbItems()" divider=">" />

          <!-- pages that except for 'home' page -->
          <router-view />
        </v-container>
      </transition>

      <!-- footer -->
      <v-footer class="mt-10 white">
        <v-container class="text-center">
          <v-layout wrap>
            <v-flex xs12>
              <span class="mr-4 mr-sm-3 mr-md-4" v-text="`사명: ${getEnvData('info.companyName')}`" />
              <span class="mr-sm-3 mr-md-4" v-text="`대표: ${getEnvData('info.CEO')}`" />
              <span class="hidden-xs-only" v-text="`주소: ${getEnvData('info.address')}`" />
            </v-flex>
            <v-flex xs12 class="hidden-sm-and-up mt-2">
              <span v-text="`주소: ${getEnvData('info.address')}`" />
            </v-flex>
            <v-flex xs12 class="mt-2">
              <span class="mr-4 mr-sm-3 mr-md-4"
                v-text="`사업자등록번호: ${getEnvData('info.registration')}`" />
              <span class="hidden-xs-only mr-4 mr-sm-3 mr-md-4"
                v-text="`Tel: ${getEnvData('info.tel')}`" />
              <span class="hidden-xs-only mr-sm-3 mr-md-4"
                v-text="`Email: ${getEnvData('info.email')}`" />
            </v-flex>
            <v-flex xs12 class="hidden-sm-and-up mt-2">
              <span v-text="`Tel: ${getEnvData('info.tel')}`" />
            </v-flex>
            <v-flex xs12 class="hidden-sm-and-up mt-2">
              <span v-text="`Email: ${getEnvData('info.email')}`" />
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
import _ from 'lodash';
import { getEnv, getPath } from './plugins/tools';

export default {
  name: 'App',
  data: () => ({
    drawer: false, // mobile toolbar
    hoverNav: false, // sub-toolbar
    env: null,
  }),
  methods: {
    /**
     * get height that extension toolbar (sub-toolbar height)
     *
     * @returns {number}
     */
    getExtensionHeight() {
      return _.flowRight(
        len => len * 48,
        _.partial(_.get, _, 'children.length'), // get length
        _.partial(_.maxBy, _, o => o.children.length), // get max length object
      )(this.navItems);
    },
    /**
     * get breadcrumb items
     *
     * @returns {[{ text: String, href: String }]}
     */
    getBreadcrumbItems() {
      const routeName = this.$route.name;
      return _.flowRight(
        el => el && [
          { text: '홈' }, // root
          { text: el[0] }, // parent
          { text: el[1].title }, // children
        ],
        nav => nav && [nav.title, _.find(nav.children, item => item.link === routeName)],
        _.partial(_.find, _, nav => _.some(nav.children, ['link', routeName])),
      )(this.navItems);
    },
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
    // get env
    this.env = await getEnv();
  },
};
</script>

<style lang="scss">
/* global */
// import fonts
@import url(https://fonts.googleapis.com/earlyaccess/nanumgothic.css);
#app {
  background-color: #ffffff;
}
$sm: 960px;
// nav positioning
header > div.v-toolbar__content:first-child {
  justify-content: space-around;
  border-bottom: 3px solid #eee;
}
// nav button
header > div.v-toolbar__content > div.v-toolbar__items > button.v-btn::before {
  background-color: transparent;
}
header > div.v-toolbar__content > div.v-toolbar__items > button:hover::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -1px;
  border-bottom: 3px solid;
}
// breadcrumbs
ul.v-breadcrumbs > li > div {
  color: #646464;
}
// buttons that has icon
button.icon-button > span {
  width: 100%;
}
button.icon-button > span > svg {
  width: 50%;
}
// footer
footer {
  background: #fafafa !important;
  font-size: 14px;
  color: #646464 !important;
}
// set font
* {
  font-family: "Nanum Gothic" !important;
}
/* relative */
// toolbar
@media screen and (max-width: $sm) { // on mobile
  header > div.v-toolbar__content:first-child {
    justify-content: inherit;
  }
}
</style>

<style lang="scss" scoped>
// title logo
span.title-logo {
  cursor: pointer;
}
// sub-toolbar
div.sub-toolbar {
  position: absolute;
  width: 100%;
  top: 64px; // toolbar height
  border-bottom: 3px solid #eee !important; // toolbar border
}
div.sub-toolbar > div.shadow-title-logo {
  width: 139px; // title logo width
}
div.sub-toolbar > div.sub-toolbar-items {
  width: 480px; // toolbar width
}
// sub-toolbar-item
div.sub-toolbar-item {
  width: 120px;
}
div.sub-toolbar-item > span {
  width: 100%;
  display: block;
}
div.sub-toolbar-item > span > a {
  color: #6c6c6c;
  text-decoration: none;
  transition: color 0.2s ease;
}
div.sub-toolbar-item > span > a:hover {
  color: black;
  text-decoration: none;
}
/* router transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
