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

      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div class="mt-4 row">
        <div class="col-lg-2 col-md-2">
          <div class="nav-wrapper-loc">
            <ul class="nav nav-pills nav-fill flex-column" id="tabs-icons-text" role="tablist">
              <li class="mb-2 nav-item">
                <a
                  class="nav-link active"
                  id="basic-data-tab"
                  data-toggle="tab"
                  href="#basic-data"
                  role="tab"
                  aria-controls="basic-data"
                  aria-selected="true"
                >
                  Product's Data</a
                >
              </li>
              <li class="mb-2 nav-item">
                <a
                  class="nav-link"
                  id="hotel-images-tab"
                  data-toggle="tab"
                  href="#hotel-images"
                  role="tab"
                  aria-controls="hotel-images"
                  aria-selected="true"
                >
                  Product's Images</a
                >
              </li>
              <li hidden></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-10 col-md-10">
          <MainTabPanel />
        </div>
      </div>
    </template>

    <template #modals>
      <ConfirmModal :title="confirmModal.title" :content="confirmModal.content" />
    </template>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue'
import DashboardPrimaryCard from '@/components/cards/DashboardPrimaryCard.vue'
import MainTable from '@/components/table/MainTable.vue'
import ConfirmModal from '@/components/common/modals/ConfirmModal.vue'
import MainTabPanel from '@/components/tab-panels/MainTabPanel.vue'

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

const confirmModal = {
  title: 'Confirm Modal',
  content: 'Are you agree with terms & conditions',
}
</script>

<style scoped>
.breadcrumb-text {
  color: #6343e9 !important;
}

.nav-link.active {
  background-color: #8b78d8 !important;
  color: #ffffff !important;
}

.nav-link {
  color: black;
}
</style>
