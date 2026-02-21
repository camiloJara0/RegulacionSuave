<template>
<section
  class="relative min-h-screen flex flex-col justify-center items-center px-6 py-20
         bg-[#faf8f5]
         bg-[radial-gradient(circle_at_center,_#2c2c2c_0%,_#0a0a0a_100%)]
         overflow-hidden"
  role="region"
  aria-label="Sección de bienvenida principal"
>

  <!-- Textura sutil -->
  <div
    class="absolute inset-0 opacity-[0.03] pointer-events-none"
    style="background-image: url('/arena.jpg');"
    aria-hidden="true"
    role="presentation"
  >
  </div>

  <!-- Contenido -->
  <div class="relative z-10 max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
    
    <h1 class="font-serif text-3xl md:text-4xl text-[#c5a47e] leading-tight">
      No estás rota.
      <br />
      <span class="italic font-light text-2xl md:text-3xl">
        Tu sistema nervioso solo aprendió a sobrevivir.
      </span>
    </h1>
    
    <div class="h-[1px] w-40 bg-[#c5a47e]/30 mx-auto my-6"></div>

    <p class="text-lg md:text-lg text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
      Acompaño a mujeres a regular ansiedad y vértigo
      integrando cuerpo y sistema nervioso desde un enfoque suave y seguro.
    </p>

    <div class="flex flex-wrap justify-center gap-3 pt-4 text-xs text-gray-400" role="list" aria-label="Características principales">
      <span class="badge" role="listitem">Vives en alerta constante</span>
      <span class="badge" role="listitem">Tu cuerpo reacciona aunque tu mente entienda</span>
      <span class="badge" role="listitem">Te cuesta relajarte sin culpa</span>
    </div>

    <div class="pt-10 flex md:flex-row flex-col justify-center gap-3" role="group" aria-label="Llamadas a acción principales">
      <a
        href="#metodo"
        class="md:inline-flex items-center gap-2 px-3 md:px-10 py-2 md:py-4
               border-2 border-[#b38b59] hover:bg-[#967347]
               text-white rounded-3xl text-sm font-semibold
               uppercase tracking-widest transition-all duration-500
               hover:shadow-[0_0_20px_rgba(179,139,89,0.3)] text-center"
        aria-label="Ir a la sección del método SER"
      >
        Conoce método SER
      </a>
      <a
        href="#contacto"
        class="md:inline-flex items-center gap-2 px-3 md:px-10 py-2 md:py-4
               bg-[#b38b59] hover:bg-[#967347]
               text-black rounded-3xl text-sm font-semibold
               uppercase tracking-widest transition-all duration-500
               hover:shadow-[0_0_20px_rgba(179,139,89,0.3)]"
        aria-label="Ir a la sección de contacto para agendar tu sesión"
      >
        Agenda tu sesión
      </a>
    </div>
  </div>

  <!-- Línea inferior decorativa -->
  <div class="absolute bottom-24 left-1/2 -translate-x-1/2 opacity-40">
    <div class="w-px h-16 bg-gradient-to-b from-transparent via-[#c5a47e]/50 to-transparent"></div>
  </div>

  <!-- Degradado de salida -->
  <div
    class="pointer-events-none absolute bottom-0 left-0 w-full h-40
           bg-gradient-to-b from-transparent to-[#121212]"
    aria-hidden="true"
  ></div>

</section>
</template>
