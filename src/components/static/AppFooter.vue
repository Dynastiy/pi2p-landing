<template>
    <div class="app-footer py-4 text-center container">
      <div>
        <ul
          class="mb-0 d-flex align-items-center justify-content-center"
          style="gap: 20px"
        >
          <li class="menu-item text-capitalize" v-for="item in nav_menu" :key="item.id">
            <router-link :to="item.url">
                {{item.title }}
            </router-link>
          </li>
          
        </ul>
  
        <div class="social-links">
          <a target="_blank" href="javascript:void(0)"
            ><i class="fa fa-facebook" aria-hidden="true"></i
          ></a>
          <a target="_blank" href="javascript:void(0)">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a target="_blank" href="javascript:void(0)">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data: () => {
      return {
        nav_menu: [
          {
            id: 1,
            title: "faqs",
            url: "/faqs"
          },
          {
            id: 2,
            title: "privacy policy",
            url: "/privacy-policy"
          },
          {
            id: 3,
            title: "terms and conditions",
            url: "/terms-and-conditions"
          },
          
        ],
      };
    },
  };
  </script>
  
  <style></style>