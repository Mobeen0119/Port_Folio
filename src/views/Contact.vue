<template>
  <div class="min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-500/30 overflow-x-hidden font-sans">
    
    <div class="fixed inset-0 -z-10">
      <div class="absolute top-[-10%] left-[-10%] w-100% md:w-[70%] h-[70%] bg-blue-600/10 blur-[100px] md:blur-[160px] rounded-full animate-pulse"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-125"></div>
    </div>

    <main class="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-20 md:pb-32 max-w-7xl">
      <div class="text-center mb-16 md:mb-32 space-y-6 md:space-y-10">
        <h1 class="text-6xl md:text-[11rem] font-black tracking-tighter leading-none italic uppercase">
          Let's <span class="text-transparent bg-clip-text bg-linear-to-b from-blue-300 via-blue-500 to-blue-800">Connect</span>.
        </h1>
        <p class="text-lg md:text-2xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed px-4">
          Operational in <span class="text-white font-medium underline underline-offset-8 decoration-blue-500/40">{{ location }}</span>. 
          Synchronizing for <span class="text-blue-400 italic">{{ availability }}</span> opportunities.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-stretch">
        
        <div class="lg:col-span-4 space-y-6 md:space-y-8">
          <div class="p-6 md:p-10 rounded-4x1 md:rounded-[3rem] border border-white/5 bg-white/[0.03] backdrop-blur-2xl">
            <p class="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-6 md:mb-10 flex items-center gap-2">
              <span class="w-6 md:w-8 h-px bg-slate-800"></span> 01_Identity
            </p>
            <h2 class="text-3xl md:text-5xl font-bold mb-2 tracking-tight">{{ name }}</h2>
            <p class="text-blue-400 font-mono text-[10px] md:text-sm uppercase tracking-[0.2em] mb-8 md:mb-12">{{ title }}</p>
            
            <div class="space-y-4 border-t border-white/5 pt-8 md:pt-10">
              <a v-for="(social, key) in socialLinks" :key="key" :href="social" target="_blank" 
                 class="flex justify-between items-center group/link p-4 rounded-xl hover:bg-white/5 transition-all bg-white/[0.02] border border-white/5">
                <span class="text-xs md:text-sm text-slate-400 capitalize font-medium">{{ key }}</span>
                <span class="text-blue-500 italic text-xs md:text-sm">Follow ↗</span>
              </a>
            </div>
          </div>

          <div class="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 bg-linear-to-br from-blue-500/10 to-transparent flex items-center justify-between">
            <div class="space-y-1">
              <p class="text-[9px] font-mono uppercase text-slate-500">Current_Status</p>
              <p class="text-base md:text-lg font-bold text-white uppercase tracking-tighter">{{ status }}</p>
            </div>
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-green-500/20 bg-green-500/10 flex items-center justify-center">
               <span class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="h-full p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-linear-to-br from-white/[0.07] to-transparent backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
            
            <p class="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-12 md:mb-20 flex items-center gap-2">
              <span class="w-6 md:w-8 h-px bg-slate-800"></span> 02_Comm_Link
            </p>
            
            <div class="space-y-16 md:space-y-24">
              <div>
                <p class="text-[10px] text-blue-400 mb-4 md:mb-6 font-bold tracking-[0.3em] uppercase italic">Official_Channel</p>
                <div class="flex flex-col gap-8">
                  <a :href="'mailto:' + email" class="text-xl md:text-5xl font-black hover:text-blue-400 transition-all duration-500 tracking-tighter break-all">
                    {{ email }}
                  </a>
                  
                  <button @click="copyEmail(email)" 
                    class="relative w-full md:w-max group/btn px-8 py-5 rounded-2xl  bg-white text-black font-black text-xs uppercase tracking-[0.2em] transition-all overflow-hidden">
                    <span class="relative z-10 group-hover:text-white transition-colors">{{ copyStatus }}</span>
                    <div class="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>

              <div class="border-t border-white/10 pt-12 md:pt-16">
                <p class="text-[10px] text-slate-500 mb-4 font-mono uppercase tracking-[0.3em]">Backup_Port</p>
                <a :href="'mailto:' + altEmail" class="text-lg md:text-3xl font-bold text-slate-400 hover:text-white transition-colors tracking-tight break-all">
                  {{ altEmail }}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: 'Mobeen Ahmed',
      title: 'Frontend Developer',
      location: 'Pakistan',
      availability: 'Freelance & Remote',
      status: 'Open for Work',
      email: 'amobeen652@gmail.com',
      altEmail: 'mobeen6222m119@gmail.com',
      copyStatus: 'Copy Email',
      socialLinks: {
        github: 'https://github.com/Mobeen0119',
        linkedin: 'https://www.linkedin.com/in/mobeen-ahmed-9a943835a/',
      }
    }
  },
  methods: {
    async copyEmail(text) {
      try {
        await navigator.clipboard.writeText(text);
        this.copyStatus = 'Copied!';
        setTimeout(() => { this.copyStatus = 'Copy Email'; }, 2000);
      } catch (err) { console.error('Failed to copy:', err); }
    }
  }
}
</script>