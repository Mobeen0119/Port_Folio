<template>
  <div class="min-h-screen bg-[#030305] text-slate-100 overflow-x-hidden font-sans selection:bg-blue-500/30">
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)]"></div>
      <div class="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[100px] md:blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>

    <section class="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div class="mb-12 md:mb-20 space-y-4">
        <div class="flex items-center gap-3 text-blue-500 font-mono text-xs md:text-sm tracking-widest uppercase">
          <span class="h-px w-8 bg-blue-500"></span>
          Selected Works
        </div>
        <h1 class="text-5xl md:text-8xl font-extrabold tracking-tighter italic uppercase">
          <span class="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            Projects
          </span>
          <span class="text-blue-600 inline-block animate-bounce">.</span>
        </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div v-for="(project, index) in displayProjects" :key="project.id"
          class="group relative flex flex-col h-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2">
          
          <div class="relative h-48 md:h-64 w-full overflow-hidden rounded-t-3xl border-b border-white/5">
            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent"></div>
            <div class="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-blue-400">
              0{{ index + 1 }}
            </div>
          </div>

          <div class="p-6 md:p-8 flex flex-col flex-grow">
            <div class="mb-4">
              <span class="text-[9px] px-2 py-1 rounded border border-blue-500/30 text-blue-400 font-bold uppercase tracking-tighter bg-blue-500/5">
                {{ project.type }}
              </span>
            </div>

            <h3 class="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>

            <p class="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow line-clamp-3 md:line-clamp-none">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="tech in project.tech" :key="tech"
                class="text-[9px] font-mono text-slate-500 border border-white/5 px-2 py-1 rounded">
                {{ tech }}
              </span>
            </div>

            <div class="mt-auto">
              <a v-if="getProjectLink(project.title) !== '#'"
                :href="getProjectLink(project.title)" 
                target="_blank"
                class="w-full relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest transition-all hover:bg-blue-500">
                Explore Project
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div v-else class="text-center py-3 border border-dashed border-white/10 rounded-xl">
                 <span class="text-[9px] text-slate-600 font-mono uppercase tracking-widest">Internal Build</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 md:mt-24 text-center">
        <router-link to="/" 
          class="inline-flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/50 transition-all">
          <div class="text-left">
            <span class="block font-mono text-[10px] tracking-widest text-blue-500">ESC_RETURN</span>
            <span class="text-slate-400 text-xs font-semibold italic">Go back home</span>
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
        { name: 'Memory Web Console (DSA)', link: 'https://github.com/Mobeen0119/Memory_Web/tree/main' }
      ]
    }
  },
  computed: {
    displayProjects() {
      return this.Project.length > 0 ? this.Project : this.localProjects;
    }
  },
  methods: {
    getProjectLink(title) {
      if (!title) return '#';
      // Expandable search logic: matches regardless of spaces or underscores
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