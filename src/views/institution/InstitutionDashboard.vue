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

  <div class="bg-gray-200 rounded-md h-[540px] mt-6">
    <div class="flex justify-between bg-gray-100 p-2 border">
      <input
        placeholder="Search"
        class="w-1/4 rounded-md py-1 px-4 bg-gray-300"
      />

      <div class="flex flex-row border">
        <v-btn-group>
          <v-btn active="true" class="">weekly</v-btn>
          <v-btn>Mothly</v-btn>
          <v-btn>Yearly</v-btn>
        </v-btn-group>
      </div>
    </div>
    <div class="w-full h-[470px] mx-auto px-4 py-2">
      <canvas id="acquisitions"></canvas>
    </div>
  </div>
</template>

<script>
import { data } from "autoprefixer";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
export default {
  name: "InstitutionDashboard",
  props: {},
  components: { Chart },
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
      ],
      users: [],
      documents: [],
    };
  },
  methods: {
    async chart() {
      const data = [
        { year: "January", count: 1 },
        { year: "February", count: 20 },
        { year: "March", count: 5 },
        { year: "April", count: 25 },
        { year: "May", count: 22 },
        { year: "June", count: 0 },
        { year: "August", count: 0 },
        { year: "September", count: 0 },
        { year: "October", count: 0 },
        { year: "November", count: 0 },
        { year: "December", count: 0 },
      ];

      new Chart(document.getElementById("acquisitions"), {
        type: "bar",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Document share Monthly",
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    },
  },
  mounted() {
    this.$store.dispatch("clearUsers");
    this.$store.dispatch("setLoadingStatus", true);
    this.$store.dispatch("fetchAllUsers").then(() => {
      this.$store.dispatch("setLoadingStatus", false);
      this.users = this.$store.getters.getAllUsers;
      this.cards[0].number === this.users.length || 0;
    });

    this.$store.dispatch("clearDocuments");
    this.$store.dispatch("setLoadingStatus", true);
    this.$store.dispatch("fetchAllDocuments").then(() => {
      this.$store.dispatch("setLoadingStatus", false);
      this.documents = this.$store.getters.getAllDocuments;
      this.cards[1].number = this.documents.length || 0;
    });

    this.chart();
  },

  async created() {
    await this.chart();
  },
};
</script>

<style scoped></style>
