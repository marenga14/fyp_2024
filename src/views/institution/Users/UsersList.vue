<template>
  <div class="flex flex-col">
    <AppHeader title="Institution Users"></AppHeader>
    <UserAdd />
    <div class="my-2">
      <simple-data-table :columns="columns" :table-data="users"></simple-data-table>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/shared/AppHeader";
import UserAdd from "@/views/institution/Users/UserAdd";
import SimpleDataTable from "@/components/shared/SimpleDataTable";

export default {
  name: "UsersList",
  components: {SimpleDataTable, UserAdd, AppHeader},
  data() {
    return {
      users: [],
      columns: {
        name: "Name",
        userAddress: "Address",
        position: "Position"
      }
    }
  },
  mounted() {
    this.$store.dispatch('clearUsers')
    this.$store.dispatch('setLoadingStatus', true)
    this.$store.dispatch('fetchAllUsers').then(
        () => {
          this.$store.dispatch('setLoadingStatus', false)
          this.users = this.$store.getters.getAllUsers
        }
    )
  }
}
</script>

<style scoped>

</style>