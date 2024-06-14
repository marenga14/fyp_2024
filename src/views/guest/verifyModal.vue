<template>
  <div
    class="py-4 px-6 rounded-lg bg-gray-50 dark:bg-gray-800"
    id="styled-settings"
    role="tabpanel"
    aria-labelledby="settings-tab"
  >
    <v-form ref="form">
      <v-text-field
        @change="onChangeFunc"
        v-model="cid"
        :counter="10"
        :rules="nameRules"
        label="Document ID"
        required
      ></v-text-field>

      <div class="flex justify-end w-full">
        <v-btn class="mt-4" color="success" block @click="retrieveDocument">
          Verify
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { encodeText } from "@/interfaces/global.interface";
export default {
  name: "VerifyModal",
  components: {},
  data() {
    return {
      name: "",
      documentId: undefined,
      data: undefined,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  methods: {
    async retrieveDocument() {
      let dataResp = await this.$store.dispatch("retrieveSingleDocument", {
        identification: this.documentId,
      });

      this.data = dataResp;
      const documentName = encodeText(this.data.docName);
      this.$router.push(
        `/verify/document-view/${this.data.cidValue}/${documentName}`
      );

      console.log(this.data);
    },

    async onChangeFunc(e) {
      this.documentId = e.target.value;
    },
  },
};
</script>

<style scoped></style>
