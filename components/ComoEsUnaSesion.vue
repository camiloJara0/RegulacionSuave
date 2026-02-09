<script setup>
const pasos = [
  "Inicio con orientación y seguridad",
  "Escucha breve (sin profundizar en historia)",
  "Regulación guiada paso a paso",
  "Integración y cierre claro",
];

const caracteristicas = [
  { icon: "fa-laptop", text: "Modalidad: online (llamada o videollamada)" },
  { icon: "fa-water", text: "Ritmo: suave, sin presión" },
  { icon: "fa-hand", text: "Tú puedes parar en cualquier momento" },
];
</script>

<template>
  <section
    id="sesiones"
    class="py-24 px-6 bg-[#faf8f5] dark:bg-[#121212] transition-colors"
  >
    <div class="max-w-3xl mx-auto space-y-16">

      <!-- ENCABEZADO -->
      <div class="text-center space-y-4">
        <h2 class="text-4xl font-light text-[#8c6b3f] dark:text-[#c5a47e]">
          Cómo es una sesión
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Sesión individual de 60 minutos
        </p>
      </div>

      <!-- TARJETAS PRINCIPALES -->
      <div class="grid md:grid-cols-2 gap-8">

        <!-- ESTRUCTURA -->
        <div
          class="rounded-3xl p-8 space-y-6
                 bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
                 border border-black/5 dark:border-white/5
                 backdrop-blur-sm"
        >
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">
            Estructura
          </h4>

          <ol class="space-y-4">
            <li
              v-for="(paso, index) in pasos"
              :key="index"
              class="flex items-start gap-4"
            >
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full
                       bg-[#e6dccf] dark:bg-[#2a2a2a]
                       flex items-center justify-center
                       text-sm font-serif
                       text-[#8c6b3f] dark:text-[#c5a47e]"
              >
                {{ index + 1 }}
              </span>
              <span class="pt-1 text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ paso }}
              </span>
            </li>
          </ol>
        </div>

        <!-- MODALIDAD -->
        <div
          class="rounded-3xl p-8 space-y-6
                 bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
                 border border-black/5 dark:border-white/5
                 backdrop-blur-sm"
        >
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200">
            Modalidad
          </h4>

          <ul class="space-y-4">
            <li
              v-for="(item, index) in caracteristicas"
              :key="index"
              class="flex items-center gap-4"
            >
              <i
                :class="['fa-solid', item.icon]"
                class="text-[#8c6b3f] dark:text-[#c5a47e]"
              ></i>
              <span class="text-gray-700 dark:text-gray-300">
                {{ item.text }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- DIVISOR -->
      <div class="h-px w-full bg-black/5 dark:bg-white/5" />

      <!-- DURACIÓN -->
      <div class="space-y-10">
        <h3 class="text-center text-lg font-light text-gray-800 dark:text-gray-200">
          Duración de las sesiones
        </h3>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            class="rounded-2xl p-6 text-center
                   bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
                   border border-black/5 dark:border-white/5"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Primera sesión
            </p>
            <p class="text-lg font-medium text-gray-800 dark:text-gray-200">
              60 minutos
            </p>
          </div>

          <div
            class="rounded-2xl p-6 text-center
                   bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
                   border border-black/5 dark:border-white/5"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Sesiones de seguimiento
            </p>
            <p class="text-lg font-medium text-gray-800 dark:text-gray-200">
              30 o 60 minutos
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
              (a elegir al agendar)
            </p>
          </div>
        </div>

        <p class="text-center text-sm italic text-gray-500 dark:text-gray-400">
          La duración se define previamente y no se extiende durante la sesión.
        </p>
      </div>

    </div>
  </section>
</template>
