<template>

    <app-header title="Institutions"></app-header>


    <div class="flex flex-row justify-end mb-4">
      <OrganizationsAdd></OrganizationsAdd>
    </div>

    <div class="row">
      <div v-for="organization of organisations" class="col-md-6">
        <div class="p-2 bg-white my-2 slide-left
            flex flex-col rounded-md">
          <div class="text-primary2">
            Institution Name: <span class="font-bold">{{ organization.orgName }}</span>
          </div>
          <div class="flex flex-row">
            <div class="grow">
              <span class="text-gray-500 text-sm">
                Address:
              </span> <span class="text-gray-500 underline hover:text-gray-800
              hover:cursor-pointer hover:text-bold text-sm">{{ organization.orgAddress }}</span>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="grow">
              <span class="text-gray-500 text-sm">
                Location:
              </span> <span class="text-gray-700 text-sm">{{ organization.officeLocation }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>

</template>

<script>
import AppHeader from "@/components/shared/AppHeader";
import OrganizationsAdd from "@/views/admin/Organizations/OrganizationsAdd";

export default {
  name: "OrganizationList",
  components: {AppHeader, OrganizationsAdd},
  data() {
    return {
      open: true,
      group: null,
      organisations: [],
      organizationAdd: false
    };
  },

  async created() {
    this.$store.dispatch('clearOrganizations')
    this.$store.dispatch('setLoadingStatus', true)
    this.$store.dispatch('fetchAllOrganizations').then(
        () => {
          this.organisations = this.$store.getters.getAllOrganizations
          this.$store.dispatch('setLoadingStatus', false)
        }
    )

  },
};
</script>
