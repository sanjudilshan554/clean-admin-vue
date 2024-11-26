<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>{{ title }}</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 ps-2 pe-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                v-for="(header, index) in headers"
                :key="index"
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                {{ header.label }}
              </th>
              <th
                v-if="showActions"
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
              <td v-for="(header, colIndex) in headers" :key="colIndex">
                <div v-if="header.slotName" class="d-flex align-items-center">
                  <slot :name="header.slotName" :row="row" />
                </div>
                <span v-else>{{ row[header.key] }}</span>
              </td>
              <td v-if="showActions" class="">
                <slot name="actions" :row="row" /> <i class="bi bi-pencil"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  headers: {
    type: Array,
    required: true,
    default: () => [],
  },
  rows: {
    type: Array,
    required: true,
    default: () => [],
  },
  showActions: { type: Boolean, default: false },
})
</script>

<style scoped>
/* Add any custom styles for the table here */
</style>
