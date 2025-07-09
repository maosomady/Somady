<template>
    <header class="bg-white">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <router-link class="block text-teal-600" to="/">
                <span class="sr-only">Home</span>
                <img alt=""
                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                    class="h-10 w-auto rounded-lg object-cover lg:h-10 lg:w-10"
                />
            </router-link>

            <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">
                        <li>
                            <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/about">
                            {{ $t('about') }}
                            </router-link>
                        </li>

                        <li>
                            <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/project"> 
                            {{ $t('project') }}
                            </router-link>
                        </li>
                        
                        <li>
                            <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/contact">
                            {{ $t('contact') }}
                            </router-link>
                        </li>
                        
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                     <div v-if="$i18n.locale === 'en'" @click="changeLanguage('khm')"
                        class="hover:cursor-pointer bg-blue-500 rounded-3xl px-3 py-2 text-white hover:bg-blue-300">
                        Khmer</div>
                    <div v-else @click="changeLanguage('en')"
                        class="hover:cursor-pointer bg-blue-500 rounded-3xl px-3 py-2 text-white hover:bg-blue-300">
                        English</div>
                    

                    <button
                        class="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                        <span class="sr-only">Toggle menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>