<script setup>
const items = [
  "Sienten ansiedad persistente o ataques de pánico",
  "Experimentan vértigo, mareo o miedo a perder el equilibrio",
  "Se sienten hipersensibles, desbordadas o en alerta constante",
  "Han probado otras terapias y se sintieron invadidas",
  "Necesitan calma sin presión ni técnicas agresivas",
];

const items2 = [
  "Terapia confrontativa",
  "Trabajo corporal invasivo",
  "Diagnóstico médico o psicológico",
  "Promesas de resultados rápidos",
];
</script>

<template>
<section class="py-20 px-6 bg-[#faf8f5] transition-colors">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

    <!-- PARA QUIÉN ES -->
    <article
      class="rounded-3xl p-10
             bg-white/70 dark:bg-[#1a1a1a]/70
             border border-black/5 dark:border-white/5
             backdrop-blur-sm
             transition-colors"
      aria-labelledby="para-quien-title"
    >
      <div class="space-y-8 text-center">
        <h2 id="para-quien-title" class="text-3xl font-semibold text-[#8c6b3f] dark:text-[#c5a47e]">
          Para quién es
        </h2>

        <p class="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Este acompañamiento es para personas que:
        </p>

        <ul class="space-y-4 text-left max-w-md mx-auto" role="list">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="flex items-start gap-4
                   text-gray-700 dark:text-gray-300
                   text-base md:text-lg"
            role="listitem"
          >
            <span
              class="mt-2 w-2 h-2 rounded-full
                     bg-[#b38b59]/70
                     dark:bg-[#c5a47e]/70
                     flex-shrink-0"
              aria-hidden="true"
            />
            <span class="leading-relaxed">
              {{ item }}
            </span>
          </li>
        </ul>

        <div class="pt-6">
          <p class="italic font-serif text-gray-500 dark:text-gray-400 text-lg">
            Aquí no tienes que revivir nada<br />
            ni demostrar nada.
          </p>
        </div>
      </div>
    </article>

    <!-- QUÉ NO ES -->
    <article
      class="rounded-3xl p-10
             bg-white/70 dark:bg-[#1a1a1a]/70
             border border-black/5 dark:border-white/5
             backdrop-blur-sm
             transition-colors"
      aria-labelledby="que-no-es-title"
    >
      <div class="space-y-8 text-center">
        <h2 id="que-no-es-title" class="text-3xl font-semibold text-[#8c6b3f] dark:text-[#c5a47e]">
          Qué no es
        </h2>

        <p class="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Este espacio no es:
        </p>

        <ul class="space-y-4 text-left max-w-md mx-auto" role="list">
          <li
            v-for="(item, index) in items2"
            :key="index"
            class="flex items-start gap-4
                   text-gray-700 dark:text-gray-300
                   text-base md:text-lg"
            role="listitem"
          >
            <span
              class="mt-2 w-2 h-2 rounded-full
                     bg-[#b38b59]/40
                     dark:bg-[#c5a47e]/40
                     flex-shrink-0"
              aria-hidden="true"
            />
            <span class="leading-relaxed">
              {{ item }}
            </span>
          </li>
        </ul>

        <div class="pt-6">
          <p class="italic font-serif text-gray-500 dark:text-gray-400 text-lg">
            Aquí tú mantienes el control<br />
            en todo momento.
          </p>
        </div>
      </div>
    </article>

  </div>
</section>

</template>
