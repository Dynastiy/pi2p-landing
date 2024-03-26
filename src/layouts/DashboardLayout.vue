<template>
  <div class="tw-bg-gray6">
    <!-- <app-header class="tw-sticky tw-top-0 sm:tw-z-0" /> -->
    <dashboard-header class="tw-sticky" @toggle="toggleDrawer"/>
    <div class="lg:tw-block md:tw-block tw-hidden">
      <app-drawer :menu="menu" />
    </div>
    <div id="main" class="">
      <div class="tw-p-4 lg:tw-ml-64 md:tw-ml-64 tw-ml-0">
        <slot />
      </div>
    </div>

    <div>
      <mobile-drawer :menus="menu" :drawer="drawer" @close="toggleDrawer"/>
    </div>
  </div>
</template>

<script>
import AppDrawer from "@/components/static/AppDrawer.vue";
import DashboardHeader from "@/components/static/DashboardHeader.vue";
import MobileDrawer from '@/components/static/MobileDrawer.vue';
import { mapActions } from 'vuex';
export default {
  name: "DashboardLayout",
  components: { AppDrawer, DashboardHeader, MobileDrawer },
  data: () => ({
    selected: 1,
    menu: [
      {
        id: 1,
        title: "Dashboard",
        sub_title: "Your central information space",
        icon: "ic:outline-dashboard",
        url: "/dashboard",
        header: false,
        parent: "dashboard",
      },

      {
        id: 2,
        title: "Transactions",
        sub_title: "See transactions you’ve made",
        icon: "grommet-icons:transaction",
        hasChildren: true,
        parent: "transactions",
        children: [
          {
            id: 1,
            title: "History",
            sub_title: "See transactions you’ve made",
            icon: "el:list-alt",
            url: "/transactions",
            hasChildren: false,
            parent: "transactions",
            subItem: 'transactions'
          },
          {
            id: 2,
            title: "Deposit",
            sub_title: "See transactions you’ve made",
            icon: "iconoir:upload",
            url: "/deposit",
            hasChildren: false,
            parent: "transactions",
            subItem: 'deposit'
          },
          {
            id: 3,
            title: "Withdrawal",
            sub_title: "See transactions you’ve made",
            icon: "uil:money-withdrawal",
            url: "/withdrawal",
            hasChildren: false,
            parent: "transactions",
            subItem: 'withdrawal'
          },
        ],
      },

      // {
      //   id: 3,
      //   title: "Payment History",
      //   sub_title: "Swap currencies",
      //   icon: "fluent:payment-32-regular",
      //   url: "/swap",
      //   hasChildren: false,
      //   parent: "swap",
      // },

      // {
      //   id: 4,
      //   title: "Utilities",
      //   sub_title: "Utilities",
      //   icon: "ic:baseline-devices-other",
      //   url: "/utilities",
      //   hasChildren: false,
      //   parent: "utilities",
      // },

      {
        id: 5,
        title: "Trades",
        sub_title: "Personal History",
        icon: "game-icons:buy-card",
        hasChildren: true,
        parent: "trades",
        children: [
          {
            id: 1,
            title: "Trades",
            subItem: "trades",
            icon: "game-icons:buy-card",
            url: "/trades",
            hasChildren: false,
            parent: "trades",
          },
          {
            id: 2,
            title: "Orders",
            subItem: "orders",
            icon: "icon-park-outline:transaction-order",
            url: "/orders",
            hasChildren: false,
            parent: "trades",
          },
        ],
      },

      {
        id: 6,
        title: "Logout",
        sub_title: "See transactions you’ve made",
        icon: "ant-design:logout-outlined",
        url: "/transaction-history",
        hasChildren: false,
        parent: "transaction-history",
      },

      // {
      //   id: 8,
      //   title: "Referral",
      //   sub_title: "Invite your friends & family",
      //   icon: "carbon:passenger-plus",
      //   url: "/referral",
      //   hasChildren: false,
      //   parent: "referral",
      // },

      // {
      //   id: 9,
      //   title: "Help & Support",
      //   sub_title: "Contact Samzuga GPT Support",
      //   icon: "carbon:passenger-plus",
      //   url: "/help-and-support",
      //   hasChildren: false,
      //   parent: "help-and-support",
      // },

      // {
      //   id: 10,
      //   title: "Sign Out",
      //   sub_title: "Sign Out",
      //   icon: "carbon:passenger-plus",
      //   url: "/sign-out",
      //   hasChildren: false,
      //   parent: "sign-out",
      // },
    ],
    drawer: false
  }),

  methods: {
    ...mapActions("wallet", ["balances", "getSettings"]),
    toggleDrawer(){
      this.drawer = !this.drawer
    },
    getUser(){
      this.$request.get('account/profile')
      .then((res)=> {
        this.$store.commit('auth/SET_USER', res.data)
      })
      .catch((err)=> {
        console.log(err)
      })
    }
  },

  beforeMount(){
    this.getUser()
    this.balances()
    this.getSettings()
  },

  computed: {},
};
</script>

<style>
.bottom-sheet {
  display: none;
}

@media (max-width: 990px) {
  .bottom-sheet {
    display: block;
  }
  .main {
    padding-bottom: 90px;
  }
}
</style>
