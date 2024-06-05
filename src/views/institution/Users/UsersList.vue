<template>
  <div class="flex flex-col">
    <AppHeader title="Institution Users"></AppHeader>
    <UserAdd />
    <div class="my-2">
      <simple-data-table
        class="h-full"
        :columns="columns"
        :table-data="users"
        :hasData="isDocs"
      >
      </simple-data-table>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/shared/AppHeader";
import UserAdd from "@/views/institution/Users/UserAdd";
import SimpleDataTable from "@/components/shared/SimpleDataTable";

export default {
  name: "UsersList",
  components: { SimpleDataTable, UserAdd, AppHeader },
  data() {
    return {
      users: [],
      columns: {
        name: "Name",
        userAddress: "Address",
        position: "Position",
      },
      isDocs: false,
    };
  },
  mounted() {
    this.$store.dispatch("clearUsers");
    this.$store.dispatch("setLoadingStatus", true);
    this.$store.dispatch("fetchAllUsers").then(() => {
      this.$store.dispatch("setLoadingStatus", false);
      this.users = this.$store.getters.getAllUsers;

      if (this.users.length > 0) this.isDocs = true;
    });
  },
};
</script>

<style scoped></style>
