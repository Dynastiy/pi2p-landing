import LoginPageVue from "@/modules/user/pages/auth/LoginPage.vue";
import RegisterPageVue from "@/modules/user/pages/auth/RegisterPage.vue";
import VerifyEmailVue from "@/modules/user/pages/auth/VerifyEmail.vue";

const router = [
  {
    path: "/login",
    name: "user-login",
    component: LoginPageVue,
    meta: {
      layout: "AppAuthLayout",
      parent: "login",
      name: "login",
    },
  },

  {
    path: "/register",
    name: "user-register",
    component: RegisterPageVue,
    meta: {
      layout: "AppAuthLayout",
      parent: "register",
      name: "register",
    },
  },

  {
    path: "/verify",
    name: "verify-email",
    component: VerifyEmailVue,
    meta: {
      layout: "AppAuthLayout",
      parent: "verify-email",
      name: "verify-email",
    },
  },

];

export default router;
