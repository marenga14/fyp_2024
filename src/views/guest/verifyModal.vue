<template>
  <div class="mb-2 border-b border-gray-200 dark:border-gray-700 h-full">
    <ul
      class="flex -mb-px text-sm font-medium text-center"
      id="default-styled-tab"
      data-tabs-toggle="#default-styled-tab-content"
      data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
      data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
      role="tablist"
    >
      <li class="me-2 flex flex-grow" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="settings-styled-tab"
          data-tabs-target="#styled-settings"
          type="button"
          role="tab"
          aria-controls="settings"
          aria-selected="false"
        >
          Using Document ID
        </button>
      </li>
      <li class="flex flex-grow justify-end" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="contacts-styled-tab"
          data-tabs-target="#styled-contacts"
          type="button"
          role="tab"
          aria-controls="contacts"
          aria-selected="false"
        >
          Using Document
        </button>
      </li>
    </ul>
  </div>
  <div class="bg-white/95 py-8" id="default-styled-tab-content">
    <div
      class="hidden py-4 px-6 rounded-lg bg-gray-50 dark:bg-gray-100"
      id="styled-settings"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      <div
        class="py-4 px-6 rounded-lg bg-gray-50"
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
    </div>
    <div
      class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-100"
      id="styled-contacts"
      role="tabpanel"
      aria-labelledby="contacts-tab"
    >
      <v-form ref="form">
        <div class="bg-[#f6f6f6] border h-14">
          <v-file-input class="h-full" label="Upload document"></v-file-input>
        </div>

        <div class="flex justify-end w-1/2">
          <v-btn class="mt-4" color="success" block @click="validate">
            Verify
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { encodeText } from "@/interfaces/global.interface";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
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
  mounted() {
    initFlowbite();
  },
};
</script>

<style scoped></style>
