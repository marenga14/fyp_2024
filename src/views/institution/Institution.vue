<template>
  <div>
    <nav>
      <v-navigation-drawer v-model="open" class="bg-secondary-focus relative">
        <Logo :width="50" :height="80" />
        <hr class="border-neutral-50" />
        <!-- <SidebarImage></SidebarImage> -->
        <NavigationLinks :menu="menu"></NavigationLinks>

        <div
          class="absolute bottom-3 text-red-400 sm:visible w-full boder-2 border-red-100 flex justify-center"
        >
          <div
            class="bg-secondary-background shadow shadow-secondary-content rounded-md w-44 h-52"
          ></div>
        </div>
      </v-navigation-drawer>
      <v-toolbar
        class="bg-secondary-background text-secondary-content flex justify-between"
        flat
      >
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="open = !open"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="flex items-center">
          <p class="text-2xl font-bold">SECDOC</p>
          <p class="text-xs font-normal">Welcome Joktam</p>
        </v-toolbar-title>

        <div class="inline-flex flex-row">
          <span class="flex items-center">UDSM</span>

          <v-btn router to="/" icon>
            <v-icon router to="/">mdi-logout</v-icon>
          </v-btn>
        </div>
      </v-toolbar>
    </nav>
    <div class="p-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SidebarImage from "@/components/shared/sidebarImage";
import Logo from "@/components/icons/logo.vue";
import NavigationLinks from "@/components/shared/NavigationLinks";

export const menu = [
  {
    name: "Dashboard",
    icon: "dashboard",
    route: "/institution/dashboard",
  },
  {
    name: "Users",
    icon: "people",
    route: "/institution/users",
  },
  {
    name: "Documents",
    icon: "document",
    route: "/institution/documents",
  },
  {
    name: "Settings",
    icon: "setting",
    route: "/institution/settings",
  },
];
export default {
  name: "Institution",
  components: { SidebarImage, NavigationLinks, Logo },
  data() {
    return {
      menu,
      open: true,
    };
  },
};
</script>

<style scoped></style>
