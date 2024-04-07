<template>
  <div>Dashboard</div>

  <div class="flex flex-row flex-wrap gap-1 mt-4">
    <v-card class="w-1/4 h-52" :key="index" v-for="(card, index) of cards">
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
</template>

<script>
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
};
</script>

<style scoped></style>
