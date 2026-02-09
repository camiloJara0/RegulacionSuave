<template>
<section
  class="relative min-h-screen flex flex-col justify-center items-center px-6 py-20
         bg-[#faf8f5]
         bg-[radial-gradient(circle_at_center,_#2c2c2c_0%,_#0a0a0a_100%)]
         overflow-hidden"
>

  <!-- Textura sutil -->
  <div
    class="absolute inset-0 opacity-[0.03] pointer-events-none"
    style="background-image: url('/arena.jpg');"
  ></div>

  <!-- Contenido -->
  <div class="relative z-10 max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
    
    <h1 class="font-serif text-4xl md:text-6xl text-[#c5a47e] leading-tight">
      Acompañamiento para
      <br />
      <span class="italic font-light">Ansiedad y Vértigo</span>
    </h1>
    
    <div class="h-[1px] w-40 bg-[#c5a47e]/30 mx-auto my-6"></div>

    <p class="text-lg md:text-xl text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
      Un espacio suave y seguro para regular el sistema nervioso,
      recuperar equilibrio y confianza en el cuerpo, sin forzar procesos.
    </p>

    <div class="flex flex-wrap justify-center gap-3 pt-4">
      <span class="badge">Sesiones individuales</span>
      <span class="badge">Ritmo lento</span>
      <span class="badge">Enfoque suave</span>
    </div>

    <div class="pt-10">
      <a
        href="#contacto"
        class="inline-flex items-center gap-2 px-10 py-4
               bg-[#b38b59] hover:bg-[#967347]
               text-black rounded-3xl text-sm font-semibold
               uppercase tracking-widest transition-all duration-500
               hover:shadow-[0_0_20px_rgba(179,139,89,0.3)]"
      >
        Agendar sesión
      </a>
    </div>
  </div>

  <!-- Línea inferior decorativa -->
  <div class="absolute bottom-24 left-1/2 -translate-x-1/2 opacity-40">
    <div class="w-px h-16 bg-gradient-to-b from-transparent via-[#c5a47e]/50 to-transparent"></div>
  </div>

  <!-- 🔥 DEGRADADO DE SALIDA -->
  <div
    class="pointer-events-none absolute bottom-0 left-0 w-full h-40
           bg-gradient-to-b from-transparent to-[#121212]"
  ></div>

</section>
</template>
