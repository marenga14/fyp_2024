<template>
  <div class="my-2">
    <table class="w-full table bg-white">
      <thead class="bg-gradient">
        <tr class="">
          <th class="table-data">No</th>
          <th
            v-bind:key="index"
            class="table-data"
            v-for="(column, index) of columns"
          >
            {{ column }}
          </th>
          <th v-if="hasActions">Actions</th>
        </tr>
      </thead>
      <tbody v-if="hasData" class="">
        <tr v-bind:key="index" v-for="(data, index) of tableData">
          <td>{{ index + 1 }}</td>
          <td
            v-bind:key="index"
            class="table-data"
            v-for="(key, index) of Object.keys(columns)"
          >
            {{ data[key] }}
          </td>
          <td v-if="hasActions">
            <slot name="actions" v-bind:data="data"></slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="h-60 bg-gray-200 border-2 rounded-sm flex items-center justify-center w-full"
      v-if="!hasData"
    >
      <div class="w-full flex justify-center">No data found</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleDataTable",
  props: {
    columns: [],
    tableData: [],
    hasActions: Boolean,
    hasData: Boolean,
  },
};
</script>

<style scoped></style>
