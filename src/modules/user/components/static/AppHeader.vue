<template>
  <div>
    <div id="user-header" class="sticky-top bg-white">
      <div class="container d-flex align-items-center justify-content-between">
        <router-link to="/home">
          <img src="@/assets/img/logo.svg" width="40" alt="" />
        </router-link>
        <div class="mobile-menu-icon">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link d-flex align-items-center">
              <span
              class="user-avatar text-uppercase mx-auto "
              >{{ user.firstName.slice(0, 2) }}</span
            >
            <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Transaction History</el-dropdown-item>
              <el-dropdown-item><router-link to="/orders" class="text-dark">Order History</router-link></el-dropdown-item>
              <el-dropdown-item>Transactions</el-dropdown-item>
              <el-dropdown-item>Payments</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- <span class="mobile-menu-icon" role="buton" @click="drawer = !drawer">
          <i-icon icon="dashicons:menu-alt" width="30px" />
        </span> -->
        <ul class="user-header-menu web-menu">
          <li v-for="item in menu" :key="item.id">
            <router-link :to="item.url">
              <!-- <span><i-icon :icon="item.icon" /></span> -->
              <span>{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import menu from "@/api/menu";
export default {
  data() {
    return {
      menu: menu,
      drawer: false,
    };
  },
  computed: {
    ...mapState("profile", {
      user: (state) => state.dataSet,
    }),
  },
};
</script>

<style scoped>
.user-header-menu {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  gap: 15px;
  /* padding: 8px 0; */
}

.user-header-menu li {
  list-style: none;
}

#user-header {
  /* background-color: var(--gray-100); */
  padding: 12px 0;
  /* border-radius: 0 0 40px 40px; */
}

#user-header li a {
  font-size: 14.5px;
  color: var(--dark-color);
  display: flex;
  display: -webkit-flex;
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 10px;
  font-weight: 600;
}

#user-header li a:hover {
  text-decoration: none;
}

#user-header li .router-link-exact-active {
  color: var(--primary-500);
  font-weight: 700;
  position: relative;
}

#user-header li .router-link-exact-active::after {
  content: "";
  position: absolute;
  width: 50%;
  height: 3px;
  background-color: var(--primary-500);
  bottom: 0;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}

.user-avatar {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    background-color: var(--primary-bg);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 15px;
}

@media (max-width: 990px) {
  .web-menu {
    display: none;
  }
}
</style>
