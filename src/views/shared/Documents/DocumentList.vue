<template>
  <div>
    <app-header title="Documents"></app-header>
    <document-add></document-add>
    <div class="shadow-inner shadow-gray-400 py-6 rounded-md mt-5">
      <div class="flex justify-start pl-8">
        <div
          class="border-2 hover:cursor-pointer border-dotted border-gray-400 rounded-sm h-28 flex justify-center items-center w-40 bg-gray-200"
        >
          <v-icon class="text-primary2" size="40">mdi-plus</v-icon>
        </div>
      </div>

      <div class="flex flex-row flex-wrap gap-1 mt-4 pl-8">
        <div
          :key="index"
          v-for="(folder, index) of folders"
          class="hover:cursor-pointer"
        >
          <FolderComponent :title="folder" />
        </div>
      </div>
    </div>
    <div class="my-2">
      <simple-data-table
        class=""
        :columns="columns"
        :table-data="documents"
        :hasData="isDocs"
        has-actions="true"
      >
        <template #actions="{ data }">
          <action-button
            @click="openDoc(data)"
            name="Append document +"
            styles="bg-secondary-focus px-4 py-2 text-white"
          >
          </action-button>
          <action-button
            @click="openDoc(data)"
            name="View"
            styles="px-8 py-2 bg-secondary text-white"
          >
          </action-button>
        </template>
      </simple-data-table>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/shared/AppHeader";
import FolderComponent from "@/components/shared/folder.vue";
import DocumentAdd from "@/views/shared/Documents/DocumentAdd";
import SimpleDataTable from "@/components/shared/SimpleDataTable.vue";
import ActionButton from "@/components/shared/ActionButton.vue";
import Icon from "@/components/shared/Icon.vue";
import FolderIcon from "@/components/icons/folder-icon.vue";

export default {
  name: "DocumentList",
  components: {
    Icon,
    ActionButton,
    DocumentAdd,
    AppHeader,
    SimpleDataTable,
    FolderIcon,
    FolderComponent,
  },
  data() {
    return {
      columns: {
        documentId: "Document ID",
        documentOwner: "Document Owner",
        time: "Created Date",
      },
      documents: [],
      folders: ["Work", "Personal", "Students"],
      pdfSrc: "/Real.pdf",
      isDocs: false,
    };
  },
  methods: {
    openDoc(document) {
      this.$router.push(
        `/${this.$route.meta.userAccessed}/document-details/${document.documentCid}`
      );
    },
    async retrieveFiles() {
      this.$store.dispatch("clearDocuments");
      this.$store.dispatch("setLoadingStatus", true);
      this.$store.dispatch("fetchAllDocuments").then(() => {
        this.$store.dispatch("setLoadingStatus", false);
        this.documents = this.$store.getters.getAllDocuments;
        if (this.documents.length > 0) this.isDocs = true;
      });
    },
  },
  async created() {
    await this.retrieveFiles();
  },
};
</script>

<style scoped></style>
