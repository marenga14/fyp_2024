<template>
  <div>Dashboard</div>

  <div
    class="flex fex-row flex-wrap gap-2 w-full p-2 justify-start mt-5 shadow-gray-200 rounded-md"
  >
    <div :key="index" v-for="(card, index) of cards" class="w-1/4 h-52">
      <v-card class="w-full h-full">
        <v-card-title
          class="text-xl font-bold bg-secondary-content text-secondary-background h-12"
        >
          {{ card.name }}
        </v-card-title>
        <v-card-text
          class="h-40 flex justify-center items-center text-secondary-content text-5xl font-extrabold"
          >{{ card.number }}</v-card-text
        >
      </v-card>
    </div>
  </div>

  <div class="p-2 bg-gray-200 rounded-sm mt-6">
    <div class="flex justify-between">
      <input
        placeholder="Search"
        class="w-1/4 rounded-md py-1 px-4 bg-gray-300"
      />

      <div class="flex flex-row">
        <v-btn-group>
          <v-btn active="true" class="">weekly</v-btn>
          <v-btn>Mothly</v-btn>
          <v-btn>Yearly</v-btn>
        </v-btn-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstitutionDashboard",
  props: {},
  components: {},
  data() {
    return {
      cards: [
        {
          name: "Users",
          number: 2,
          color: "",
        },
        {
          name: "Documents",
          number: 12,
          color: "",
        },
        {
          name: "Reviews",
          number: 10,
          color: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
