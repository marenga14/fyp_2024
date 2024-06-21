<template>
  <div>
    {{ user_Type.toUpperCase() }}

    <div class="flex flex-row flex-wrap gap-1 mt-4">
      <v-card class="w-1/4 h-52" :key="index" v-for="(card, index) in cards">
        <v-card-title
          class="text-xl font-bold bg-secondary-content text-secondary-background h-12"
          >{{ card.name }}</v-card-title
        >

        <v-card-text
          class="flex justify-center items-center text-5xl font-extrabold h-40"
        >
          {{ card.number }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AdminDashboard",
  props: {},
  components: {},
  data() {
    return {
      cards: [
        {
          name: "Users",
          number: 1,
          color: "",
        },
        {
          name: "Documents",
          number: 0,
          color: "",
        },
        {
          name: "Reviews",
          number: 16,
          color: "",
        },
      ],
    };
  },

  computed: {
    ...mapState({
      user_Addres: (state) => state.UserStore.logeInUser.user_Addres,
      user_Type: (state) => state.UserStore.logeInUser.user_Type,
      name: (state) => state.UserStore.logeInUser.name,
      org_Name: (state) => state.UserStore.logeInUser.org_Name,
    }),
  },

  created() {
    this.user = this.$store.getters.getCurrentUser;
    console.log(this.user);
  },
};
</script>

<style scoped></style>
