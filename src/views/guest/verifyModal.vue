<template>
  <div
    class="py-4 px-6 rounded-lg bg-gray-50 dark:bg-gray-800"
    id="styled-settings"
    role="tabpanel"
    aria-labelledby="settings-tab"
  >
    <v-form ref="form">
      <v-text-field
        v-model="cid"
        :counter="10"
        :rules="nameRules"
        label="Document ID"
        required
      ></v-text-field>

      <div class="flex justify-end w-full">
        <v-btn class="mt-4" color="success" block @click="validate">
          Verify
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "VerifyModal",
  components: {},
  data() {
    return {
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
    },
  },
};
</script>

<style scoped></style>
