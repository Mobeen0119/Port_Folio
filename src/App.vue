<template>
  <div id="app" class="bg-black min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
    <nav v-if="showNavigation" class="fixed top-0 w-full z-[100] px-4 md:px-6 py-4 md:py-8">
      <div class="container mx-auto">
        <div class="flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl">
          
          <router-link to="/" class="group flex items-center gap-2">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black group-hover:rotate-12 transition-transform text-white">M</div>
            <span class="text-white font-black tracking-tighter text-lg md:text-xl">PORTFOLIO</span>
          </router-link>

          <div class="hidden md:flex items-center gap-2">
            <router-link v-for="item in navItems" :key="item.path" :to="item.path"
              class="relative px-6 py-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 text-slate-400 hover:text-blue-400">
              {{ item.name }}
            </router-link>
          </div>

          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-white bg-white/5 border border-white/10 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <transition name="fade-slide">
          <div v-if="mobileMenuOpen" class="md:hidden mt-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 space-y-2">
            <router-link v-for="item in navItems" :key="item.path" :to="item.path" @click="mobileMenuOpen = false"
              class="block px-6 py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all"
              :class="$route.path === item.path ? 'bg-blue-600 text-white' : 'text-slate-400'">
              {{ item.name }}
            </router-link>
          </div>
        </transition>
      </div>
    </nav>

    <main :class="{ 'pt-24 md:pt-32': showNavigation }">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer v-if="showFooter" class="bg-[#050505] py-12 border-t border-white/5 mt-20">
      <div class="container mx-auto px-6 text-center md:text-left">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-white font-black text-xl mb-1">MOBEEN AHMED</h3>
            <p class="text-slate-500 text-[10px] font-mono uppercase tracking-widest">Logic Driven • Pakistan</p>
          </div>
          <p class="text-slate-600 text-[9px] font-mono tracking-widest uppercase md:text-right">
            &copy; 2026 / Built with Vue & Tailwind
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavigation: true,
      showFooter: true,
      mobileMenuOpen: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style>
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.3s ease; }
.fade-slide-enter-from, .fade-slide-leave-to { opacity: 0; transform: translateY(-10px); }
.page-enter-active, .page-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.page-enter-from { opacity: 0; transform: translateX(10px); }
.page-leave-to { opacity: 0; transform: translateX(-10px); }
</style>