<template>
<section
  id="sobre-mi"
  class="py-24 px-6 bg-[#faf8f5] dark:bg-[#121212] transition-colors"
>
  <div class="max-w-5xl mx-auto">

    <div class="grid md:grid-cols-2 gap-16 items-center">

      <!-- CONTENIDO -->
      <div class="space-y-8">

        <h2 class="text-4xl font-light text-[#8c6b3f] dark:text-[#c5a47e]">
          Sobre mí
        </h2>

        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Trabajo desde una integración real del sistema completo.
          No solo con la mente.
        </p>

        <!-- BLOQUE INTEGRACIÓN -->
        <div class="space-y-4 text-gray-600 dark:text-gray-400">

          <div class="flex items-start gap-3">
            <i class="fa-solid fa-brain text-[#8c6b3f] mt-1"></i>
            <p><strong>Psicoanálisis</strong> → origen emocional profundo</p>
          </div>

          <div class="flex items-start gap-3">
            <i class="fa-solid fa-spine text-[#8c6b3f] mt-1"></i>
            <p><strong>Quiropráctica</strong> → regulación física del sistema nervioso</p>
          </div>

          <div class="flex items-start gap-3">
            <i class="fa-solid fa-hand-holding-heart text-[#8c6b3f] mt-1"></i>
            <p><strong>Masoterapia terapéutica</strong> → liberación somática del trauma</p>
          </div>

          <div class="flex items-start gap-3">
            <i class="fa-solid fa-lightbulb text-[#8c6b3f] mt-1"></i>
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

      </div>

      <!-- IMAGEN PROFESIONAL -->
      <div class="relative">
        <div
          class="rounded-3xl overflow-hidden
                 border border-black/5 dark:border-white/5
                 shadow-sm"
        >
          <img
            src="public/profesional.jpg"
            alt="Foto profesional"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>

  </div>
</section>
</template>
