<template>
  <div class="g-sidenav-show bg-gray-100 d-flex flex-column min-vh-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="main-content position-relative border-radius-lg flex-grow-1">
      <Navbar />
      <div class="container-fluid py-4">
        <slot name="content" />

        <slot name="modals" />
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/main/Footer.vue'
import Navbar from '@/components/main/Navbar.vue'
import Sidebar from '@/components/main/Sidebar.vue'
</script>

<style scoped>
.g-sidenav-show {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
}
</style>
