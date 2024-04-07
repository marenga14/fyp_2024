<template>
  <div>
    <div
      :key="index"
      v-for="(item, index) of menu"
      class="px-6 py-1 hover:bg-slate-200 hover:cursor-pointer slide-left"
      @click="navigate(index)"
    >
      <div class="flex flex-row p-2 justify-start items-center w-full">
        <Icon width="w-7" height="h-7" :name="item.icon" class="grow-0"></Icon>
        <div class="grow px-2">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "./Icon.vue";

export default {
  name: "NavigationLinks",
  components: {
    Icon,
  },
  props: {
    menu: {
      type: [],
    },
  },
  data() {
    return {
      iconWidth: "10px",
      iconHeight: "10px",
    };
  },
  methods: {
    navigate(index) {
      this.$router.push(this.menu[index].route);
    },
  },
};
</script>
