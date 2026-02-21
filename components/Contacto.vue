<script setup>
const whatsappNumber = "573508738787";
const whatsappMessage = encodeURIComponent(
  "Hola, me gustaría más información sobre el acompañamiento para ansiedad y vértigo."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
</script>

<template>
  <section
    id="contacto"
    class="relative pb-28 px-6 rounded-b-[60px] z-20
           bg-gradient-to-b from-[#0b0b0b] to-[#141414]"
    role="region"
    aria-label="Sección de contacto"
  >
    <div class="max-w-2xl mx-auto text-center space-y-14">

      <!-- ENCABEZADO -->
      <header class="space-y-6">
        <h2 class="text-4xl font-light text-[#c5a47e]">
          Contacto
        </h2>

        <p class="text-gray-400 leading-relaxed">
          Si este enfoque resuena contigo,
          <br />
          puedes escribirme para más información
          o para agendar una sesión.
        </p>
      </header>

      <!-- CTA -->
      <div class="space-y-8">

        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-4
                 px-10 py-5 rounded-full
                 bg-[#c5a47e] text-[#121212]
                 text-lg font-medium
                 transition-all duration-500
                 hover:bg-[#d6b892]
                 hover:shadow-[0_0_40px_rgba(197,164,126,0.45)] focus:outline-none focus:ring-2 focus:ring-[#c5a47e] focus:ring-offset-2 focus:ring-offset-[#0b0b0b]"
          aria-label="Escribir por WhatsApp - Abre una nueva ventana"
          title="Contacta conmigo por WhatsApp"
        >
          <i
            class="fa-brands fa-whatsapp text-2xl"
            aria-hidden="true"
          ></i>
          <span>Escribir por WhatsApp</span>
        </a>

        <div role="region" aria-label="Número de contacto">
          <p class="text-gray-300">
            <span class="font-medium text-[#c5a47e]">
              +57 350 873 8787
            </span>
          </p>
        </div>
      </div>

      <!-- NOTA FINAL -->
<footer class="mt-20 text-center max-w-2xl mx-auto">
  <p class="text-sm leading-relaxed text-white/40 font-light">
    Tu sensibilidad no es debilidad.
    Es profundidad sin regulación todavía.
  </p>

  <p class="mt-4 text-sm leading-relaxed text-white/30 font-light">
    Cuando el sistema nervioso aprende seguridad,
    la vida cambia sin forzarse.
  </p>

  <p class="mt-4 text-sm leading-relaxed text-white/25 font-light">
    Sanar no es volverte otra persona.
    Es volver a ti sin miedo.
  </p>
</footer>

    </div>
  </section>
</template>
