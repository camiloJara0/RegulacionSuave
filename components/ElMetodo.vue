<script setup>
const ejes = [
  {
    icon: "fa-leaf",
    title: "Regulación del sistema nervioso",
    description: "A través de:",
    items: [
      "Respiración no forzada",
      "Atención al apoyo y a la orientación corporal",
      "Ritmo lento y predecible",
    ],
    footer: "Esto ayuda a salir del estado de alerta constante.",
  },
  {
    icon: "fa-hands-holding",
    title: "Lenguaje corporal y presencia guiada",
    description: "La guía es verbal y suave, enfocada en:",
    items: [
      "Sensaciones neutras",
      "Límites internos",
      "Recuperar sensación de control",
    ],
    footer: "No se busca catarsis ni revivir experiencias.",
  },
  {
    icon: "fa-diamond",
    title: "Integración y autonomía",
    description: "El objetivo no es dependencia, sino que la persona:",
    items: [
      "Aprenda a reconocer señales de sobrecarga",
      "Recupere confianza en su cuerpo",
      "Se vaya con mayor estabilidad que cuando llegó",
    ],
    footer: "",
  },
];
</script>

<template>
<section
  id="metodo"
  class="py-24 px-6 bg-[#faf8f5] transition-colors"
>
  <div class="max-w-5xl mx-auto space-y-20">

    <!-- ENCABEZADO -->
    <header class="text-center space-y-6">
      <h2 class="text-4xl font-light text-[#8c6b3f] dark:text-[#c5a47e]">
        El método <span class="italic font-semibold ">SER</span>
      </h2>

      <div
        class="max-w-xl mx-auto rounded-2xl px-6 py-6
               bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
               border border-black/5 dark:border-white/5
               backdrop-blur-sm"
      >
        <p class="italic font-serif text-gray-600 dark:text-gray-300 leading-relaxed">
          "La ansiedad y el vértigo no se eliminan.<br />
          Se regulan cuando el cuerpo vuelve a sentirse seguro."
        </p>
      </div>
    </header>

  <!-- MÉTODO SER -->
<div class="grid md:grid-cols-3 gap-10" role="list" aria-label="Pilares del método SER">

  <!-- S -->
  <article
    class="rounded-3xl p-8 space-y-5
           bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
           border border-black/5 dark:border-white/5"
    role="listitem"
    aria-labelledby="ser-sentir-seguro"
  >
    <div class="text-center space-y-3">
      <h3 
        id="ser-sentir-seguro"
        class="text-5xl font-serif text-[#8c6b3f] dark:text-[#c5a47e]"
        aria-label="Pilar S: Sentir Seguro"
      >
        S
      </h3>
      <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">
        Sentir Seguro
      </h4>
    </div>

    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
      El cuerpo aprende que ya no está en peligro.
      Regulamos el sistema nervioso antes de entrar en procesos profundos.
    </p>
  </article>

  <!-- E -->
  <article
    class="rounded-3xl p-8 space-y-5
           bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
           border border-black/5 dark:border-white/5"
    role="listitem"
    aria-labelledby="ser-expandir-conciencia"
  >
    <div class="text-center space-y-3">
      <h3 
        id="ser-expandir-conciencia"
        class="text-5xl font-serif text-[#8c6b3f] dark:text-[#c5a47e]"
        aria-label="Pilar E: Expandir Conciencia"
      >
        E
      </h3>
      <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">
        Expandir Conciencia
      </h4>
    </div>

    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
      Comprendemos el origen emocional sin revictimización.
      Integramos mente, cuerpo y memoria emocional.
    </p>
  </article>

  <!-- R -->
  <article
    class="rounded-3xl p-8 space-y-5
           bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
           border border-black/5 dark:border-white/5"
    role="listitem"
    aria-labelledby="ser-reprogramar"
  >
    <div class="text-center space-y-3">
      <h3 
        id="ser-reprogramar"
        class="text-5xl font-serif text-[#8c6b3f] dark:text-[#c5a47e]"
        aria-label="Pilar R: Reprogramar desde Regulación"
      >
        R
      </h3>
      <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">
        Reprogramar desde Regulación
      </h4>
    </div>

    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
      El cambio ocurre sin forzar.
      La transformación nace desde una seguridad interna real.
    </p>
  </article>

</div>

    <!-- INTRO -->
    <div class="text-center space-y-3">
      <h3 class="text-lg font-light text-gray-700 dark:text-gray-300">
        ¿Cómo funciona?
      </h3>
      <p class="text-gray-600 dark:text-gray-400">
        El trabajo se sostiene en tres ejes principales:
      </p>
    </div>



    <!-- EJES -->
    <div class="grid gap-10 md:grid-cols-3" role="list" aria-label="Tres ejes de funcionamiento del método">
      <article
        v-for="(eje, index) in ejes"
        :key="index"
        class="rounded-3xl p-8
               bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
               border border-black/5 dark:border-white/5
               backdrop-blur-sm
               space-y-6 transition-colors"
        role="listitem"
        :aria-labelledby="`eje-${index}-title`"
      >
        <div class="flex items-center gap-4">
          <i
            :class="['fa-solid', eje.icon]"
            class="text-[#8c6b3f] dark:text-[#c5a47e] text-lg"
            aria-hidden="true"
          ></i>
          <h4 
            :id="`eje-${index}-title`"
            class="text-lg font-medium text-gray-800 dark:text-gray-200"
          >
            {{ eje.title }}
          </h4>
        </div>

        <p class="text-gray-600 dark:text-gray-400">
          {{ eje.description }}
        </p>

        <ul class="space-y-3 pt-2" role="list">
          <li
            v-for="(item, itemIndex) in eje.items"
            :key="itemIndex"
            class="flex items-start gap-3
                   text-gray-700 dark:text-gray-300"
          >
            <span
              class="mt-2 w-1.5 h-1.5 rounded-full
                     bg-[#b38b59]/70 dark:bg-[#c5a47e]/60"
              aria-hidden="true"
            ></span>
            <span class="leading-relaxed">
              {{ item }}
            </span>
          </li>
        </ul>

        <p
          v-if="eje.footer"
          class="pt-4 mt-4 border-t border-black/5 dark:border-white/5
                 text-sm italic text-gray-500 dark:text-gray-400"
        >
          {{ eje.footer }}
        </p>
      </article>
    </div>

    <!-- CIERRE VÉRTIGO -->
    <section
      class="max-w-3xl mx-auto rounded-3xl px-8 py-10 text-center
             bg-[#f5f3ef] dark:bg-[#1a1a1a]/70
             border border-black/5 dark:border-white/5
             backdrop-blur-sm transition-colors"
      aria-labelledby="vertigo-title"
    >
      <h4 
        id="vertigo-title"
        class="text-xl font-light text-[#8c6b3f] dark:text-[#c5a47e] mb-6"
      >
        ¿Por qué funciona para el vértigo?
      </h4>

      <ul class="space-y-3 text-gray-700 dark:text-gray-300" role="list">
        <li role="listitem">El vértigo suele estar ligado a hipervigilancia</li>
        <li role="listitem">Al bajar la alerta, el equilibrio mejora</li>
        <li role="listitem">El sistema vestibular necesita calma, no empuje</li>
      </ul>
    </section>

  </div>
</section>

</template>
