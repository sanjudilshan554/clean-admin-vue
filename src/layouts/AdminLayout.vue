<template>
  <div class="g-sidenav-show bg-gray-100">
    <!-- <div class="min-height-100 bg-primary position-absolute w-100"></div> -->
    <Sidebar />
    <main class="main-content position-relative border-radius-lg">
      <Navbar />
      <div class="container-fluid py-4">
        <slot name="content" />
      </div>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Footer from '@/components/main/Footer.vue'
import Navbar from '@/components/main/Navbar.vue'
import Sidebar from '@/components/main/Sidebar.vue'
</script>

<style scoped>
/* You can add scoped styles here if needed */
</style>
