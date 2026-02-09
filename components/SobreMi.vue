<template>
  <section
    id="sobre-mi"
    class="py-24 px-6 bg-[#faf8f5] dark:bg-[#121212] transition-colors"
  >
    <div class="max-w-2xl mx-auto space-y-14">

      <!-- ENCABEZADO -->
      <div class="text-center space-y-6">
        <h2 class="text-4xl font-light text-[#8c6b3f] dark:text-[#c5a47e]">
          Sobre mí
        </h2>

        <!-- Icono simbólico -->
        <div
          class="w-24 h-24 mx-auto rounded-full
                 bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
                 border border-black/5 dark:border-white/5
                 flex items-center justify-center"
        >
          <i
            class="fa-solid fa-seedling text-3xl
                   text-[#8c6b3f] dark:text-[#c5a47e]"
          ></i>
        </div>

        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            Acompaño desde la experiencia y la sensibilidad corporal,
            con un enfoque respetuoso del sistema nervioso.
          </p>

          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            Creo en procesos donde la seguridad, la escucha y el ritmo
            son más importantes que la intensidad.
          </p>
        </div>
      </div>

      <!-- DIVISOR -->
      <div class="h-px w-full bg-black/5 dark:bg-white/5" />

      <!-- CITA -->
      <blockquote
        class="rounded-3xl px-8 py-10 text-center
               bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
               border border-black/5 dark:border-white/5"
      >
        <p
          class="text-lg font-serif italic
                 text-[#8c6b3f] dark:text-[#c5a47e]
                 leading-relaxed"
        >
          “Tu cuerpo no está fallando.
          <br />
          Está intentando protegerte.”
        </p>
      </blockquote>

    </div>
  </section>
</template>
