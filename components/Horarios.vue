<template>
<section 
  id="horarios" 
  class="relative py-24 px-6 bg-gradient-to-b from-[#f4f8f5] to-[#e8f1ec] overflow-hidden"
  aria-labelledby="horarios-title"
>

  <div class="max-w-4xl mx-auto space-y-16">

    <!-- ENCABEZADO -->
    <header class="text-center space-y-5">
      <h2 
        id="horarios-title"
        class="text-3xl md:text-4xl font-light text-[#1f3d34] tracking-wide"
      >
        Agenda tu espacio
      </h2>

      <p class="text-[#4a6b5d] max-w-xl mx-auto leading-relaxed">
        Las sesiones se realizan con agenda previa y cupos reducidos
        para cuidar la profundidad del proceso.
      </p>
    </header>

    <!-- BLOQUES HORARIOS -->
    <div class="grid md:grid-cols-2 gap-8" role="list" aria-label="Información de horarios de atención">

      <!-- DÍAS -->
      <article 
        class="bg-white rounded-3xl shadow-sm p-8 space-y-6 border border-[#dbe7e1]"
        role="listitem"
        aria-labelledby="dias-title"
      >
        <h3 
          id="dias-title"
          class="text-center text-lg font-medium text-[#1f3d34]"
        >
          Días de atención
        </h3>

        <div class="flex flex-wrap justify-center gap-3">
          <span 
            v-for="(dia) in ['Lunes', 'Martes', 'Miércoles']"
            :key="dia"
            class="px-5 py-2 rounded-full bg-[#e3f0ea] text-[#2f5e4f] text-sm"
            role="presentation"
          >
            {{ dia }}
          </span>
        </div>
      </article>

      <!-- HORARIOS -->
      <article 
        class="bg-white rounded-3xl shadow-sm p-8 space-y-6 border border-[#dbe7e1]"
        role="listitem"
        aria-labelledby="horas-title"
      >
        <h3 
          id="horas-title"
          class="text-center text-lg font-medium text-[#1f3d34]"
        >
          Horarios disponibles
        </h3>

        <div class="space-y-4 text-center text-[#355f50]">
          <time class="text-base" datetime="10:00-13:00">10:00 a.m. – 1:00 p.m.</time>

          <div class="h-px w-full bg-[#e4eeea]" aria-hidden="true"></div>

          <p class="text-sm text-[#6b8f82]">
            Un día adicional por semana:
          </p>

          <time class="text-base" datetime="16:00-17:00">4:00 – 5:00 p.m.</time>
        </div>
      </article>

    </div>

    <!-- MENSAJE SUAVE -->
    <aside class="text-center max-w-2xl mx-auto space-y-4" aria-label="Información adicional sobre cupos">
      <p class="text-[#557c6f] italic leading-relaxed">
        Cada día se atiende un número reducido de personas
        para mantener la calidad y profundidad del acompañamiento.
      </p>

      <p class="text-[#1f3d34] font-medium">
        Los cupos semanales son limitados.
      </p>
    </aside>

    <!-- CTA PRINCIPAL -->
    <div class="text-center pt-6">
      <a 
        href="https://calendar.app.google/daqjZPEpZ1vEqQgU9"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-3 px-10 py-4
               bg-[#2f5e4f] hover:bg-[#244a3e] focus:outline-none focus:ring-2 focus:ring-[#2f5e4f] focus:ring-offset-2
               text-white rounded-full
               text-sm tracking-wide
               transition-all duration-300
               shadow-md hover:shadow-lg"
        aria-label="Agendar sesión ahora en Google Calendar - se abre en nueva ventana"
        title="Agendar tu sesión"
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