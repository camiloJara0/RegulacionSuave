<template>
  <footer class="relative">

    <!-- DESVANECIDO SUPERIOR -->
    <div
      class="absolute top-0 left-0 w-full h-32
             bg-[#faf8f5]
             pointer-events-none"
    />

    <!-- CONTENIDO FOOTER -->
    <div
      class="relative py-20 px-6"
    >
      <div class="max-w-3xl mx-auto space-y-10">

        <!-- Encabezado -->
        <div class="text-center space-y-3">
          <div class="flex items-center justify-center gap-2 text-gray-500">
            <i class="fa-solid fa-circle-info text-sm"></i>
            <h3 class="text-xs uppercase tracking-widest font-medium">
              Aviso importante
            </h3>
          </div>
        </div>

        <!-- Texto legal -->
        <div
          class="text-center space-y-4
                 text-sm text-gray-600 leading-relaxed"
        >
          <p>
            Este acompañamiento no reemplaza atención médica,
            psicológica ni psiquiátrica.
          </p>
          <p>
            No se realizan diagnósticos ni tratamientos clínicos.
          </p>
          <p>
            El espacio está orientado a la regulación emocional y corporal,
            desde un enfoque suave y de acompañamiento.
          </p>
          <p>
            Cada persona es responsable de su proceso
            y puede detener la sesión en cualquier momento.
          </p>
        </div>

        <!-- Divisor -->
        <div class="h-px w-full bg-black/5" />

        <!-- Copyright -->
        <p class="text-center text-xs text-gray-500">
          © {{ new Date().getFullYear() }} · Todos los derechos reservados
        </p>

      </div>
    </div>
  </footer>
</template>
