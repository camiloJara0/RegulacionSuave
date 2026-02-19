<template>
<section id="horarios" class="relative py-24 px-6 bg-gradient-to-b from-[#f4f8f5] to-[#e8f1ec] overflow-hidden">

  <div class="max-w-4xl mx-auto space-y-16">

    <!-- ENCABEZADO -->
    <div class="text-center space-y-5">
      <h2 class="text-3xl md:text-4xl font-light text-[#1f3d34] tracking-wide">
        Agenda tu espacio
      </h2>

      <p class="text-[#4a6b5d] max-w-xl mx-auto leading-relaxed">
        Las sesiones se realizan con agenda previa y cupos reducidos
        para cuidar la profundidad del proceso.
      </p>
    </div>

    <!-- BLOQUES HORARIOS -->
    <div class="grid md:grid-cols-2 gap-8">

      <!-- DÍAS -->
      <div class="bg-white rounded-3xl shadow-sm p-8 space-y-6 border border-[#dbe7e1]">
        <h4 class="text-center text-lg font-medium text-[#1f3d34]">
          Días de atención
        </h4>

        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="(dia) in ['Lunes', 'Martes', 'Miércoles']"
            :key="dia"
            class="px-5 py-2 rounded-full bg-[#e3f0ea] text-[#2f5e4f] text-sm"
          >
            {{ dia }}
          </span>
        </div>
      </div>

      <!-- HORARIOS -->
      <div class="bg-white rounded-3xl shadow-sm p-8 space-y-6 border border-[#dbe7e1]">
        <h4 class="text-center text-lg font-medium text-[#1f3d34]">
          Horarios disponibles
        </h4>

        <div class="space-y-4 text-center text-[#355f50]">
          <p class="text-base">10:00 a.m. – 1:00 p.m.</p>

          <div class="h-px w-full bg-[#e4eeea]"></div>

          <p class="text-sm text-[#6b8f82]">
            Un día adicional por semana:
          </p>

          <p class="text-base">4:00 – 5:00 p.m.</p>
        </div>
      </div>

    </div>

    <!-- MENSAJE SUAVE -->
    <div class="text-center max-w-2xl mx-auto space-y-4">
      <p class="text-[#557c6f] italic leading-relaxed">
        Cada día se atiende un número reducido de personas
        para mantener la calidad y profundidad del acompañamiento.
      </p>

      <p class="text-[#1f3d34] font-medium">
        Los cupos semanales son limitados.
      </p>
    </div>

    <!-- CTA PRINCIPAL -->
    <div class="text-center pt-6">
      <a 
        href="https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_ID_AQUI"
        target="_blank"
        class="inline-flex items-center gap-3 px-10 py-4
               bg-[#2f5e4f] hover:bg-[#244a3e]
               text-white rounded-full
               text-sm tracking-wide
               transition-all duration-300
               shadow-md hover:shadow-lg"
      >
        Agendar sesión ahora
      </a>

      <p class="mt-4 text-sm text-[#6b8f82]">
        Serás redirigida al calendario oficial para elegir tu horario disponible.
      </p>
    </div>

  </div>

</section>
</template>