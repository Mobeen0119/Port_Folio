<template>
  <div class="min-h-screen bg-[#050507] text-slate-100 overflow-x-hidden font-sans selection:bg-[#8B9EFF]/30">
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#12131c,transparent)]"></div>
      <div class="absolute top-0 left-1/4 w-75 md:w-125 h-75 md:h-125 bg-[#5B7FFF]/10 blur-[100px] md:blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>

    <section class="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div class="mb-12 md:mb-20 space-y-4">
        <div class="flex items-center gap-3 text-[#8B9EFF] font-mono text-xs md:text-sm tracking-widest uppercase">
          <span class="h-px w-8 bg-[#8B9EFF]"></span>
          Selected Works
        </div>
        <h1 class="text-5xl md:text-8xl font-extrabold tracking-tighter italic uppercase">
          <span class="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            Projects
          </span>
          <span class="text-[#8B9EFF] inline-block animate-bounce">.</span>
        </h1>
      </div>

  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div v-for="(project, index) in completedProjects" :key="project.id"
          class="group relative flex flex-col h-full rounded-3xl border border-white/[0.08] bg-white/[0.035] backdrop-blur-xl transition-all duration-500 hover:border-[#8B9EFF]/50 hover:-translate-y-2">

          <div class="relative h-48 md:h-64 w-full overflow-hidden rounded-t-3xl border-b border-white/5">
            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent"></div>
            <div class="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono text-[#8B9EFF]">
              0{{ index + 1 }}
            </div>
          </div>

          <div class="p-6 md:p-8 flex flex-col flex-grow">
            <div class="mb-4">
              <span class="text-[9px] px-2 py-1 rounded border border-[#8B9EFF]/30 text-[#8B9EFF] font-bold uppercase tracking-tighter bg-[#8B9EFF]/5">
                {{ project.type }}
              </span>
            </div>

            <h3 class="text-xl md:text-2xl font-bold mb-3 text-[#F8FAFC] group-hover:text-[#A6B8FF] transition-colors">
              {{ project.title }}
            </h3>

            <p class="text-[#94A3B8] text-xs md:text-sm leading-relaxed mb-6 grow line-clamp-3 md:line-clamp-none">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="tech in project.tech" :key="tech"
                class="text-[9px] font-mono text-[#94A3B8] border border-white/[0.08] px-2 py-1 rounded">
                {{ tech }}
              </span>
            </div>

            <div class="mt-auto">
              <a v-if="getProjectLink(project.title) !== '#'"
                :href="getProjectLink(project.title)"
                target="_blank"
                class="w-full relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#8B9EFF] to-[#5B7FFF] text-[#050507] font-black text-[10px] uppercase tracking-widest transition-all hover:from-[#A6B8FF] hover:to-[#5B7FFF] hover:shadow-lg hover:shadow-[#5B7FFF]/25">
                Explore Project
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="inDevelopmentProject" class="mt-20 md:mt-32">
        <div class="mb-10 md:mb-14 space-y-4">
          <div class="flex items-center gap-3 text-[#58D68D] font-mono text-xs md:text-sm tracking-widest uppercase">
            <span class="h-px w-8 bg-[#58D68D]"></span>
            Currently Building
          </div>
          <h2 class="text-4xl md:text-6xl font-extrabold tracking-tighter italic uppercase">
            <span class="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              In Development
            </span>
            <span class="text-[#58D68D] inline-block animate-pulse">.</span>
          </h2>
        </div>

        <div class="group relative flex flex-col md:flex-row gap-8 h-full rounded-3xl border border-[#58D68D]/20 bg-white/[0.035] backdrop-blur-xl p-6 md:p-10 overflow-hidden transition-all duration-500 hover:border-[#58D68D]/50">
          <div class="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#58D68D]/10 border border-[#58D68D]/30">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#58D68D] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#58D68D]"></span>
            </span>
            <span class="text-[9px] font-mono uppercase tracking-widest text-[#58D68D]">Active</span>
          </div>

          <div class="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden rounded-2xl border border-white/[0.08]">
            <img :src="inDevelopmentProject.image" :alt="inDevelopmentProject.title"
              class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-[#050507]/60 via-transparent to-transparent"></div>
          </div>

          <div class="flex flex-col flex-grow">
            <span class="text-[9px] px-2 py-1 rounded border border-[#58D68D]/30 text-[#58D68D] font-bold uppercase tracking-tighter bg-[#58D68D]/5 w-fit mb-4">
              {{ inDevelopmentProject.type }}
            </span>

            <h3 class="text-2xl md:text-3xl font-bold mb-3 text-[#F8FAFC]">
              {{ inDevelopmentProject.title }}
            </h3>

            <p class="text-[#94A3B8] text-xs md:text-sm leading-relaxed mb-6 grow">
              {{ inDevelopmentProject.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span v-for="tech in inDevelopmentProject.tech" :key="tech"
                class="text-[9px] font-mono text-[#94A3B8] border border-white/[0.08] px-2 py-1 rounded">
                {{ tech }}
              </span>
            </div>
             <div class="mt-auto">
              <a v-if="getProjectLink(project.title) !== '#'"
                :href="getProjectLink(project.title)"
                target="_blank"
                class="w-full relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#8B9EFF] to-[#5B7FFF] text-[#050507] font-black text-[10px] uppercase tracking-widest transition-all hover:from-[#A6B8FF] hover:to-[#5B7FFF] hover:shadow-lg hover:shadow-[#5B7FFF]/25">
                Explore Project
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>


      <div class="mt-16 md:mt-24 text-center">
        <router-link to="/"
          class="inline-flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] hover:border-[#8B9EFF]/50 transition-all">
          <div class="text-left">
            <span class="text-[#94A3B8] text-xs font-semibold italic">Go back home</span>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    Project: { type: Array, default: () => [] }
  },
  data() {
    return {
      localProjects: [],
      Links: [
        { name: 'Anatomy Explorer', link: 'https://github.com/Mobeen0119/Anaromy_Explorer' },
        { name: 'Blog_So', link: 'https://github.com/Mobeen0119/Blog_So' },
        { name: 'Memory Web Console (DSA)', link: 'https://github.com/Mobeen0119/Memory_Web/tree/main' },
        { name: 'Chirper', link: 'https://github.com/Mobeen0119/Chirper' },
        { name: 'Medi_Care', link: 'https://github.com/Mobeen0119/Medi_Care' },
        { name: 'Booking Appointment Database', link: 'https://github.com/Mobeen0119/Booking_Appointment_service' },
        { name: 'Aevros', link: 'https://github.com/Mobeen0119/Aevros' }
      ]
    }
  },
  computed: {
    displayProjects() {
      return this.Project.length > 0 ? this.Project : this.localProjects;
    },
    // id 6 (Aevros Kernel) is still in development and shown separately
    inDevelopmentProject() {
      return this.displayProjects.find(p => p.id === 6) || null;
    },
    completedProjects() {
      return this.displayProjects.filter(p => p.id !== 6);
    }
  },
  methods: {
    getProjectLink(title) {
      if (!title) return '#';
      const normalizedSearch = title.toLowerCase().replace(/[\s_]/g, '');
      const linkMatch = this.Links.find(l =>
        l.name.toLowerCase().replace(/[\s_]/g, '') === normalizedSearch
      );
      return linkMatch ? linkMatch.link : '#';
    }
  },
  async mounted() {
    if (this.Project.length === 0) {
      try {
        const res = await fetch('/project.json');
        const data = await res.json();
        this.localProjects = data.featured;
      } catch (e) {
        console.error("Fetch failed", e);
      }
    }
  }
}
</script>