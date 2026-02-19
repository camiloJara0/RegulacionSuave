<template>
<footer class="relative bg-[#faf8f5] text-black overflow-hidden -mt-20 pt-20">

  <!-- DESVANECIDO SUPERIOR SUAVE -->
  <div
    class="absolute -top-20 left-0 w-full h-40
           bg-gradient-to-b from-transparent via-black/60 to-[#faf8f5]
           pointer-events-none"
  ></div>

  <!-- CONTENIDO -->
  <div class="relative py-24 px-6">

    <div class="max-w-4xl mx-auto space-y-14">

      <!-- IDENTIDAD PROFESIONAL -->
      <div class="text-center space-y-4">
        <h3 class="text-lg tracking-wide font-light">
          Erika Jaramillo
        </h3>

        <p class="text-sm text-black/70 tracking-wide">
          Psicoanalista · Quiropráctica · ThetaHealing · Masoterapia terapéutica
        </p>

        <p class="text-sm text-black/60">
          Especialista en regulación profunda del sistema nervioso femenino
        </p>

        <p class="text-xs uppercase tracking-[0.3em] text-black/40">
          Método SER — Firma terapéutica
        </p>
      </div>

      <!-- DIVISOR SUTIL -->
      <div class="h-px w-full bg-black/10"></div>

      <!-- AVISO LEGAL RESUMIDO -->
      <div class="text-center max-w-2xl mx-auto space-y-3 text-sm text-black/60 leading-relaxed">
        <p>
          Este espacio ofrece acompañamiento terapéutico complementario.
        </p>
        <p>
          No sustituye atención médica, psicológica o psiquiátrica,
          ni implica diagnóstico clínico.
        </p>
        <p>
          Cada persona es responsable de su proceso
          y puede detener la sesión en cualquier momento.
        </p>
      </div>

      <!-- COPYRIGHT -->
      <div class="pt-6">
        <p class="text-center text-xs text-black/40 tracking-wide">
          © {{ new Date().getFullYear() }} Erika Jaramillo · Todos los derechos reservados
        </p>
      </div>

    </div>

  </div>

</footer>

</template>
