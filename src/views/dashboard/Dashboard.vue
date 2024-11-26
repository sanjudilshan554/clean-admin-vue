<template>
  <AdminLayout>
    <template #content>
      <div class="row">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" v-for="card in cards" :key="card.title">
          <DashboardPrimaryCard
            :title="card.title"
            :value="card.value"
            :percentage="card.percentage"
            :subtitle="card.subtitle"
            :icon-class="card.iconClass"
            :percentage-class="card.percentageClass"
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <MainTable title="Projects table" :headers="tableHeaders" :rows="tableRows" showActions>
            <!-- Slot for project column -->
            <template #projectSlot="{ row }">
              <div class="d-flex align-items-center">
                <img
                  :src="row.logo"
                  class="avatar avatar-sm rounded-circle me-2"
                  :alt="row.project"
                />
                <h6 class="mb-0 text-sm">{{ row.project }}</h6>
              </div>
            </template>
            <template #statusSlot="{ row }">
              <span
                class="badge"
                :class="{
                  'bg-success': row.status === 'done',
                  'bg-warning': row.status === 'working',
                  'bg-danger': row.status === 'stuck',
                }"
              >
                {{ row.status }}
              </span>
            </template>
          </MainTable>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue'
import DashboardPrimaryCard from '@/components/cards/DashboardPrimaryCard.vue'
import MainTable from '@/components/table/MainTable.vue'

const cards = [
  {
    title: "Today's Money",
    value: '$53,000',
    percentage: '+55%',
    subtitle: 'since yesterday',
    iconClass: 'ni ni-money-coins text-lg opacity-10',
  },
  {
    title: 'New Users',
    value: '2,300',
    percentage: '+5%',
    subtitle: 'since last week',
    iconClass: 'ni ni-money-coins text-lg opacity-10',
  },
  {
    title: 'Sales',
    value: '$103,000',
    percentage: '+10%',
    subtitle: 'since last month',
    iconClass: 'ni ni-cart text-lg opacity-10',
  },
  {
    title: 'Expenses',
    value: '$23,000',
    percentage: '-8%',
    subtitle: 'since yesterday',
    iconClass: 'ni ni-chart-bar-32 text-lg opacity-10',
    percentageClass: 'text-danger text-sm font-weight-bolder',
  },
]

const tableHeaders = [
  { label: 'Project', key: 'project', slotName: 'projectSlot' },
  { label: 'Budget', key: 'budget' },
  { label: 'Status', key: 'status', slotName: 'statusSlot' },
  { label: 'Completion', key: 'completion', center: true },
]

const tableRows = [
  {
    project: 'Spotify',
    logo: '../assets/img/small-logos/logo-spotify.svg',
    budget: '$2,500',
    status: 'working',
    completion: '60%',
  },
  {
    project: 'Invision',
    logo: '../assets/img/small-logos/logo-invision.svg',
    budget: '$5,000',
    status: 'done',
    completion: '100%',
  },
  {
    project: 'Trello',
    logo: '../assets/img/small-logos/logo-trello.svg',
    budget: '$1,000',
    status: 'stuck',
    completion: '30%',
  },
]
</script>
