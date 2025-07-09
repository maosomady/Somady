<template>
  <div class="font-sans mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <!-- Header Section -->
    <header class="bg-indigo-700 text-white text-center py-20">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl lg:text-5xl font-bold mb-2">About Me</h1>
        <p class="text-lg lg:text-xl text-indigo-200">
            I am a student at the Cambodia Academy of Digital Technology (CADT) 
            with a strong passion for building beautiful and functional web applications. 
            I enjoy learning new technologies and solving complex problems. 
            My goal is to become a skilled full-stack developer.        
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="py-16">
      <div class="container mx-auto px-6 space-y-16">
        
        <!-- Our Story Section -->
        <section class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <img 
              src="https://placehold.co/600x400/3730a3/FFFFFF?text=Our+Journey" 
              alt="Group of people working together in a modern office" 
              class="rounded-2xl shadow-xl w-full h-auto object-cover"
              onerror="this.onerror=null;this.src='https://placehold.co/600x400/3730a3/FFFFFF?text=Image+Not+Found';"
            >
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Founded in 2020, our company started with a small team of dedicated professionals who shared a common vision: to leverage technology to solve real-world problems. From our humble beginnings in a small garage, we have grown into a thriving organization, but our core values of innovation, integrity, and customer focus have remained the same.
            </p>
            <p class="text-gray-600 leading-relaxed">
              We believe that the best results come from collaboration and a relentless pursuit of excellence. Our journey has been one of continuous learning and adaptation, and we are excited about what the future holds.
            </p>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
// This page is mostly static, so no complex script is needed.
// You could fetch team data from an API here in a real application.
</script>

<style scoped>
/* Scoped styles can go here if needed. */
/* All styling is handled by Tailwind CSS classes in the template. */
/* Ensure your project is set up with Tailwind and Font Awesome. */
</style>
