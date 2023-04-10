<template>
  <div>
    <div id="user-header" class="sticky-top">
      <div class="container d-flex align-items-center justify-content-between">
        <router-link to="/home">
          <img src="@/assets/img/logo.svg" width="40" alt="" />
        </router-link>
        <span class="mobile-menu-icon" role="buton" @click="drawer = !drawer">
          <i-icon icon="dashicons:menu-alt" width="30px" />
        </span>
        <ul class="user-header-menu web-menu">
          <li v-for="item in menu" :key="item.id">
            <router-link :to="item.url">
              <span><i-icon :icon="item.icon" /></span>
              <span>{{ item.title }}</span>
            </router-link>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.mings.pi2p&pli=1"
              target="_blank"
              ><button class="primary-btn">Download App</button></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div id="user-header">
      <el-drawer :withHeader="false" title="I am the title" size="80%" :visible.sync="drawer" direction="rtl">
        <div class="text-right p-3">
            <span role="button" @click="drawer = !drawer">
            <i-icon icon="ic:sharp-close" width="25px"/> </span>
        </div>
        <ul class="user-header-menu">
          <li v-for="item in menu" :key="item.id">
            <router-link :to="item.url">
              <span><i-icon :icon="item.icon" /></span>
              <span>{{ item.title }}</span>
            </router-link>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.mings.pi2p&pli=1"
              target="_blank"
              ><button class="primary-btn">Download App</button></a
            >
          </li>
        </ul>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import menu from "@/api/menu";
export default {
  data() {
    return {
      menu: menu,
      drawer: false,
    };
  },
};
</script>

<style></style>
