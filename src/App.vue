<template>
  <div id="app" class="bg-black min-h-screen selection:bg-blue-500/30">
    <nav v-if="showNavigation" class="fixed top-0 w-full z-100 px-6 py-8">
      <div class="container mx-auto">
        <div class="flex justify-between items-center bg-white/3 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
          
          <router-link to="/" class="group flex items-center gap-2">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black group-hover:rotate-12 transition-transform">M</div>
            <span class="text-white font-black tracking-tighter text-xl group-hover:text-blue-400 transition-colors">PORTFOLIO</span>
          </router-link>

          <div class="hidden md:flex items-center gap-2">
            <router-link 
              v-for="item in navItems" 
              :key="item.path" 
              :to="item.path"
              class="relative px-6 py-2 text-[16px] font-bold tracking-[0.2em] uppercase transition-all duration-300 group"
              :class="activeClass(item.path)"
            >
              <span class="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              
              <span class="relative z-10 group-hover:text-blue-400 transition-colors">{{ item.name }}</span>
              
              <span v-if="$route.path === item.path" class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
            </router-link>
          </div>

          <router-link to="/contact" class="md:hidden p-2 bg-blue-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </router-link>
        </div>
      </div>
    </nav>

    <main :class="{ 'pt-28': showNavigation }">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer v-if="showFooter" class="bg-[#050505] py-16 border-t border-white/5 mt-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div>
            <h3 class="text-white font-black text-2xl tracking-tighter mb-2">MOBEEN AHMED</h3>
            <p class="text-slate-500 text-sm font-mono uppercase tracking-widest">Logic Driven • Full Stack Vision</p>
          </div>
          <div class="flex flex-col md:items-end gap-4">
            <p class="text-slate-600 text-[10px] font-mono tracking-widest uppercase">
              &copy; {{ currentYear }} / Build with Tailwind and Vue / Pakistan
            </p>
            <div class="h-px w-24 bg-blue-600/30"></div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      showNavigation: true,
      showFooter: true,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  },
  methods: {
    activeClass(path) {
      return this.$route.path === path ? 'text-blue-500' : 'text-slate-400'
    }
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(109px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-109px);
}

.router-link-active {
  color: #3b82f6 !important;
}
</style>