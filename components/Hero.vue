<template>
<section
  class="relative min-h-screen flex items-center overflow-hidden bg-gray-900"
  role="region"
  aria-label="Sección de bienvenida principal"
>
  <!-- Fondo degradado seguro y profesional -->
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-b from-[#202020] via-black to-[#202020]"></div>
    <!-- Ornamento decorativo sutil -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#616C4B]/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-[#616C4B]/3 rounded-full blur-3xl"></div>
  </div>

  <!-- Contenedor principal flex -->
  <div class="relative z-10 w-full max-w-6xl mx-auto">
    <!-- Grid layout: texto izquierda, imagen derecha (responsive) -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-8 lg:gap-12 items-center">
      
      <!-- CONTENIDO TEXTO - IZQUIERDA -->
      <div class="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1 absolute lg:top-0 top-50 bottom-0 lg:relative px-4 lg:px-1">

        <!-- Título principal -->
        <div>
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            No estás
            <span class="block text-[#616C4B]">rota.</span>
            <p class="text-xl sm:text-2xl font-light text-[#616C4B] italic">
              Tu sistema nervioso solo aprendió a sobrevivir.
            </p>
          </h1>
        </div>

        <!-- Línea divisoria -->
        <div class="h-1 w-20 bg-gradient-to-r from-[#616C4B] to-[#616C4B]/30"></div>

        <!-- Párrafo descriptivo -->
        <p class="text-lg sm:text-xl text-gray-300 max-w-md leading-relaxed font-light">
          Acompaño a mujeres a regular ansiedad y vértigo integrando cuerpo y sistema nervioso desde un enfoque suave y seguro.
        </p>

        <!-- Botones de llamada a acción -->
        <div class="flex flex-col sm:flex-row gap-4 pt-6">
          <a
            href="#metodo"
            class="px-6 sm:px-8 py-3 sm:py-4 bg-[#616C4B] hover:bg-[#525a41] 
                   text-white rounded-xl font-semibold transition-all duration-300
                   hover:shadow-lg hover:shadow-[#616C4B]/20 text-center
                   hover:scale-105 transform"
            aria-label="Ir a la sección del método SER"
          >
            <i class="fa-solid fa-calendar mr-1"></i>Agenda tu sesión
          </a>
          <a
            href="#contacto"
            class="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#616C4B] hover:bg-[#616C4B]/5
                   text-[#616C4B] rounded-xl font-semibold transition-all duration-300
                   hover:shadow-lg hover:shadow-[#616C4B]/10 text-center"
            aria-label="Ir a la sección de contacto para agendar tu sesión"
          >
            <i class="fa-solid fa-phone mr-1"></i>Escribir por whatsapp
          </a>
        </div>
      </div>

      <!-- IMAGEN DERECHA CON PARALLAX -->
      <div class="relative order-1 lg:order-2 h-screen">
        <!-- Contenedor con parallax -->
        <div
          ref="parallaxContainer"
          class="relative w-full h-full"
        >
          <!-- Imagen principal con efecto parallax -->
          <div
            class="absolute inset-0 transition-transform duration-75 ease-out flex items-end"
          >
            <img
              src="/hero.png"
              alt="Sesión terapéutica segura y profesional"
              class="w-full h-[80%] object-cover rounded-2xl shadow-2xl lg:opacity-80 opacity-15"
              loading="lazy"
            />
          </div>

          <!-- Overlay oscuro para móvil y efecto de seguridad -->
          <div class="absolute inset-0  rounded-2xl"></div>
          
        </div>
      </div>
    </div>
  </div>

  <!-- Indicador de scroll animado -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
    <div class="flex flex-col items-center gap-2">
      <span class="text-sm text-[#616C4B]/80 font-light">Desplázate para explorar</span>
      <svg class="w-6 h-6 text-[#616C4B]/90 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </div>
</section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.5s ease-out forwards;
}
</style>
