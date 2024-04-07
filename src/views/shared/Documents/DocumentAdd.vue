<template>
  <div class="flex flex-col">
    <v-dialog v-model="dialog" width="500">
      <div class="rounded-lg bg-white" style="width: 600px !important">
        <DialogHeader
          class="!w-full"
          :dialog="dialog"
          @dialog="onCloseDialog"
        ></DialogHeader>

        <div>
          <div class="form-holder">
            <input
              @change="onChanges"
              type="file"
              id="document"
              class="file mx-4"
            />
            <dynamic-form
              :form="DocumentAddFields"
              @submitted="addDocument"
              @error="handleErrors"
            />
            <button
              submit="true"
              :form="DocumentAddFields.id"
              class="btn-submit btn-submit-right"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </v-dialog>
    <div class="flex flex-row justify-end">
      <v-btn class="btn-outline grow-0" @click="dialog = true">
        <v-icon left>mdi-plus</v-icon>
        Add Document
      </v-btn>
    </div>
  </div>
</template>

<script>
import { DocumentAddFields } from "./DocumentAddFields";
import DialogHeader from "@/components/shared/DialogHeader";

export default {
  name: "DocumentAdd",
  components: { DialogHeader },
  data() {
    return {
      dialog: false,
      DocumentAddFields,
      file: null,
    };
  },
  methods: {
    async addDocument(documentData) {
      if (this.file) {
        this.$store.dispatch("addDocument", {
          ...documentData,
          file: this.file,
        });
        this.dialog = false;
      }
    },
    async onChanges(e) {
      this.file = e.target.files[0];
      return this.file;
    },
    handleErrors(err) {
      console.log(err);
    },
    onCloseDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped></style>
