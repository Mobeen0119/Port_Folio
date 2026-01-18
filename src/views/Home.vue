<template>
  <div class="min-h-screen bg-[#030303] text-white selection:bg-blue-600 overflow-x-hidden font-sans">
    
    <div class="fixed inset-0 -z-10 bg-[#020202]">
      <div class="absolute inset-0 bg-radial-gradient from-blue-900/40 to-transparent"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-75"></div>
      <div class="absolute inset-0 bg-linear-gradient to-right from-white/10 to-transparent bg-[size:60px_60px]"></div>
    </div>

    <main class="min-h-screen w-full flex flex-col p-4 md:p-8 lg:p-12">
      <div class="grow grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-3xl shadow-2xl">
        
        <div class="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-10 flex flex-col justify-between bg-linear-gradient to-bottom from-white/10 to-transparent order-2 lg:order-1">
          <div class="w-full">
            <div class="flex items-center gap-4 mb-8 lg:mb-14">
              <span class="w-3 h-3 bg-blue-500 animate-ping rounded-full shadow-lg shadow-blue-500/50"></span>
              <p class="text-xs font-mono tracking-widest text-blue-500 font-black uppercase">Core Matrix</p>
            </div>
            
            <div class="space-y-8 md:space-y-12">
              <div v-for="skill in skills" :key="skill.name" class="group">
                <div class="flex justify-between items-end mb-4">
                  <span class="text-xs md:text-sm font-black uppercase tracking-widest text-slate-200 group-hover:text-blue-400 transition-colors">
                    {{ skill.name }}
                  </span>
                  <span class="text-[10px] font-mono text-blue-400 opacity-60">
                    {{ skill.icon }}
                  </span>
                </div>
                <div class="flex gap-1 md:gap-2">
                  <div v-for="n in 5" :key="n" class="h-1.5 md:h-2 grow bg-white/10 rounded-full overflow-hidden border border-white/5">
                    <div 
                      class="h-full bg-blue-600 transition-all duration-1000 shadow-md shadow-blue-500/40" 
                      :style="{ width: n <= 3 ? '100%' : '0%', transitionDelay: (n * 100) + 'ms' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 lg:mt-auto pt-10 border-t lg:border-0 border-white/5 space-y-4">
            <p class="text-[10px] font-mono tracking-widest text-slate-500 mb-4 uppercase">Network Nodes</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a v-for="(link, platform) in socialLinks" :key="platform" :href="link" target="_blank"
                 class="group relative py-4 md:py-5 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-between px-6 md:px-8 overflow-hidden transition-all duration-500 hover:border-blue-500 shadow-xl">
                <div class="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span class="relative z-10 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-200 group-hover:text-white transition-colors">
                  {{ platform }}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" class="relative z-10 h-4 w-4 md:h-5 md:w-5 text-blue-500 group-hover:text-white transition-all group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col p-8 md:p-12 relative bg-linear-to-b from-blue-500/5 to-transparent order-1 lg:order-2 border-b lg:border-b-0 border-white/10">
          <div class="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-12 md:mb-16">
            <div class="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-20 blur-2xl animate-pulse"></div>
            <div class="relative w-full h-full overflow-hidden rounded-3xl border-2 border-white/10 bg-slate-900 shadow-2xl">
              <img :src="profileImage" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
            </div>
            <div class="absolute -top-4 -left-4 bg-white px-4 md:px-5 py-2 rounded-xl shadow-2xl transform -rotate-3">
              <h1 class="font-black text-black text-lg md:text-2xl">MOBEEN AHMED</h1>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg">
              {{ status }}
            </div>
          </div>
          
          <div class="space-y-6 text-center lg:text-left">
            <h2 class="text-3xl md:text-5xl font-black tracking-tighter italic leading-tight text-white uppercase">
              Building for <span class="text-blue-500">Function</span>,<br/>
              Refining for <span class="bg-linear-to-r from-slate-400 to-slate-100 bg-clip-text text-transparent">Impact</span>.
            </h2>
            <div class="space-y-4">
              <p class="text-slate-300 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Software Engineering Student || <span class="text-white border-b-2 border-blue-500/50 pb-0.5">Fundamentals-First</span>. 
              </p>
            </div>
            <div class="pt-4 flex flex-wrap justify-center lg:justify-start gap-3">
               <div v-for="tag in ['Logic Driven', 'Problem Solving']" :key="tag" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 uppercase tracking-widest">
                 <span class="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                 {{ tag }}
               </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 p-8 md:p-12 flex flex-col justify-center bg-linear-to-l from-blue-600/10 to-transparent relative order-3">
          <div class="space-y-2 mb-8 md:mb-12">
            <h2 class="text-5xl md:text-8xl font-black italic tracking-tighter leading-none">
              LET'S <br/>
              <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">CONNECT</span>
            </h2>
          </div>
          <p class="text-base md:text-lg font-light text-slate-400 mb-8 leading-snug">
            Synchronizing frontend excellence with logic-driven engineering.
          </p>
          <router-link to="/contact" class="group relative h-20 md:h-24 flex items-center justify-center overflow-hidden bg-blue-600 rounded-3xl transition-all hover:shadow-2xl hover:shadow-blue-500/40">
            <div class="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span class="relative z-10 font-black text-base md:text-lg tracking-widest uppercase text-white">Connect</span>
          </router-link>
          
          <div class="mt-12 flex items-center gap-4 group cursor-default">
            <span class="w-8 md:w-12 h-px bg-white/20"></span>
            <span class="text-[13px] text-slate-500 uppercase tracking-widest">{{ location }} — {{ new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }}</span>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      name: 'Mobeen Ahmed',
      location: 'Pakistan',
      status: 'Ready To Build',
      profileImage: 'https://tse1.mm.bing.net/th/id/OIF.6RQD9RISlNbSS9jDNs8VWg?pid=Api&P=0&h=220',
      socialLinks: {
        github: 'https://github.com/Mobeen0119',
        linkedin: 'https://www.linkedin.com/in/mobeen-ahmed-9a943835a/',
      },
      skills: [
        { name: 'Interface', icon: 'React/Vue' },
        { name: 'Architecture', icon: 'DSA' },
        { name: 'Logic Systems', icon: 'JS' },
        { name: 'Environment', icon: 'Github' },
      ]
    }
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
</style>