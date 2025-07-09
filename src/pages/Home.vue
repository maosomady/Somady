<template>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div class="font-sans text-gray-900">
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center text-center bg-cover bg-center">
      <div class="bg-white bg-opacity-75 p-10 rounded-xl shadow-lg">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4">Hello, I'm Mao Somady.</h1>
        <p class="text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          A passionate web developer based in Cambodia.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link to="/about" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
              About Me
            </router-link>
            <router-link to="/project" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
              My Projects
            </router-link>
            <router-link to="/contact" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
              Contact
            </router-link>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script setup>
// No script logic needed for this static home page.
</script>

<style scoped>
/* Scoped styles can go here if needed. */
</style>
