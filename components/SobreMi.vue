<template>
  <section id="sobre-mi" class="py-24 px-6 bg-[#faf8f5] transition-colors">
    <div class="max-w-5xl mx-auto">

      <div class="grid md:grid-cols-2 gap-16 items-center">

        <!-- CONTENIDO -->
        <header class="space-y-8">

          <h2 class="text-4xl font-light text-[#8c6b3f] dark:text-[#c5a47e]">
            Sobre mí
          </h2>

          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            Trabajo desde una integración real del sistema completo.
            No solo con la mente.
          </p>

          <!-- BLOQUE INTEGRACIÓN -->
          <div class="space-y-4 text-gray-600 dark:text-gray-400">

            <div class="flex items-start gap-3" role="listitem">
              <i class="fa-solid fa-brain text-[#8c6b3f] mt-1" aria-hidden="true"></i>
              <p><strong>Psicoanálisis</strong> → origen emocional profundo</p>
            </div>

            <div class="flex items-start gap-3" role="listitem">
              <i class="fa-solid fa-bone text-[#8c6b3f] mt-1" aria-hidden="true"></i>
              <p><strong>Quiropráctica</strong> → regulación física del sistema nervioso</p>
            </div>

            <div class="flex items-start gap-3" role="listitem">
              <i class="fa-solid fa-hand-holding-heart text-[#8c6b3f] mt-1" aria-hidden="true"></i>
              <p><strong>Masoterapia terapéutica</strong> → liberación somática del trauma</p>
            </div>

            <div class="flex items-start gap-3" role="listitem">
              <i class="fa-solid fa-lightbulb text-[#8c6b3f] mt-1" aria-hidden="true"></i>
              <p><strong>ThetaHealing</strong> → reprogramación de creencias profundas</p>
            </div>

          </div>

          <!-- EXPERIENCIA REAL -->
          <div class="pt-6 border-t border-black/5 dark:border-white/5">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              No solo estudié regulación.
              La atravesé. La integré.
              Hoy la enseño y acompaño.
            </p>

            <p class="text-gray-600 dark:text-gray-400 mt-4">
              Especializada en ansiedad, trauma, alta sensibilidad
              y desregulación nerviosa.
            </p>
          </div>

        </header>

        <!-- IMAGEN PROFESIONAL -->
        <figure class="relative">
          <div class="relative rounded-3xl overflow-hidden
                 border border-black/5
                 shadow-sm">
            <img 
              src="public/erika.jpeg" 
              alt="Erika Jaramillo, psicoanalista y especialista en regulación del sistema nervioso femenino"
              class="w-full h-full object-cover" 
            />

            <!-- Degradado de integración -->
            <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div class="absolute bottom-0 w-full h-40 
                  bg-gradient-to-b 
                  from-transparent 
                  via-[#1b1314]/60 
                  to-[#1b1314]/80">
              </div>
            </div>
          </div>
        </figure>

      </div>

    </div>
  </section>
</template>
