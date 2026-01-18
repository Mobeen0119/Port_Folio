<template>
  <div class="min-h-screen bg-neutral-950 text-white selection:bg-blue-500/30 overflow-x-hidden relative">
    
    <div class="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
    <div class="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-emerald-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

    <section class="container mx-auto px-4 md:px-6 py-16 md:py-32">
      <div class="max-w-6xl mx-auto">
        
        <div class="mb-12 md:mb-20 border-l-4 border-blue-500 pl-6 md:pl-8">
          <h1 class="text-5xl md:text-8xl font-black mb-4 md:mb-6 bg-linear-to-r from-white via-blue-400 to-emerald-400 bg-clip-text text-transparent tracking-tighter">
            About Me.
          </h1>
          <p class="text-xl md:text-3xl text-gray-400 font-light max-w-3xl leading-relaxed">
            Software Engineering Student crafting digital experiences through <span class="text-white border-b-2 border-emerald-500">logic and code.</span>
          </p>
        </div>

        <div class="grid grid-cols-12 gap-8 md:gap-12 items-start">
          
          <div class="col-span-12 lg:col-span-8 space-y-8 md:space-y-10">
            <div class="bg-white/2 border border-white/10 p-6 md:p-14 rounded-3xl backdrop-blur-md shadow-2xl">
              <h3 class="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-400">The Mission</h3>
              <p class="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8">
                I’m a software engineering student focused on <span class="text-white underline decoration-blue-500 underline-offset-4">learning by building</span>on a journey of productivity and fulfillment.
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
                <div class="p-6 bg-white/3 rounded-2xl border border-white/5">
                  <h4 class="text-emerald-400 font-bold mb-2 uppercase text-[10px] tracking-widest">Tech Focus</h4>
                  <p class="text-gray-400 text-base md:text-lg">Frontend Architecture (Vue/React), logic-based systems, and clean data flow.</p>
                </div>
                <div class="p-6 bg-white/3 rounded-2xl border border-white/5">
                  <h4 class="text-blue-400 font-bold mb-2 uppercase text-[10px] tracking-widest">Industry Interest</h4>
                  <p class="text-gray-400 text-base md:text-lg">Healthcare tech, EdTech, and building tools that solve real-world problems.</p>
                </div>
              </div>

              <p class="text-base md:text-xl text-gray-400 mt-8 md:mt-12 italic border-l-2 border-gray-700 pl-4 md:pl-6">
                Priortizing projects that force real problem-solving.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
              <router-link to="/" class="group px-8 py-4 bg-white text-black rounded-2xl font-bold transition-all hover:bg-blue-500 hover:text-white flex items-center justify-center text-base md:text-lg">
                <span class="mr-2 transition-transform group-hover:-translate-x-2">←</span> Back to Home
              </router-link>
              <router-link to="/projects" class="px-8 py-4 bg-transparent border-2 border-white/10 hover:border-blue-500 rounded-2xl font-bold transition-all flex items-center justify-center text-base md:text-lg">
                Explore Projects
              </router-link>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-4 space-y-6 md:space-y-8">
            <div class="bg-linear-to-br from-blue-600/20 to-emerald-600/20 border border-white/10 p-6 md:p-8 rounded-3xl">
              <h3 class="text-white font-bold text-lg md:text-xl mb-4 md:mb-6">Core Values</h3>
              <ul class="space-y-4 md:space-y-6">
                <li v-for="val in ['Systems Thinking', 'Contextual Learning', 'Meaningful Systems', 'Depth over Speed']" :key="val" class="flex items-center text-gray-300 text-base md:text-lg">
                  <span class="h-2 w-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></span>
                  {{ val }}
                </li>
              </ul>
            </div>

            <div class="bg-white/2 border border-white/10 p-6 md:p-8 rounded-3xl">
              <h3 class="text-white font-bold text-lg md:text-xl mb-4 md:mb-6">Current Evolution</h3>
              <div class="space-y-5 md:space-y-6">
                <div v-for="skill in [{n:'Frontend', p:'85%'}, {n:'DSA', p:'60%'}, {n:'Full-Stack', p:'40%'}]" :key="skill.n">
                  <div class="flex justify-between mb-2 text-sm md:text-base">
                    <span class="text-gray-400">{{ skill.n }}</span>
                    <span class="text-blue-400 font-mono">{{ skill.p }}</span>
                  </div>
                  <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-500 transition-all duration-1000" :style="{ width: skill.p }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>