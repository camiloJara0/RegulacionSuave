<script setup>
function toggleText(button) {
    const moreText = button.parentElement.querySelector('.more-text');
    moreText.classList.toggle('hidden');
    const isExpanded = !moreText.classList.contains('hidden');
    button.setAttribute('aria-expanded', isExpanded);
    button.textContent = isExpanded ? 'Leer menos' : 'Leer más';
}
</script>

<template>
    <section class="relative bg-gradient-to-b from-[#0b0b0b] via-[#121212] to-[#0b0b0b] pt-6 pb-24 px-6 overflow-hidden" aria-labelledby="testimonios-title">

        <div class="max-w-6xl mx-auto space-y-20">

            <!-- ENCABEZADO -->
            <header class="text-center space-y-4">
                <h2 
                  id="testimonios-title"
                  class="text-3xl md:text-4xl font-light text-[#c5a47e] tracking-wide"
                >
                    Experiencias de acompañamiento
                </h2>

                <p class="text-white/50 max-w-xl mx-auto leading-relaxed">
                    Procesos reales vividos desde la regulación,
                    el respeto y la profundidad terapéutica.
                </p>
            </header>

            <!-- GRID TESTIMONIOS (Solo 3) -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10" role="list" aria-label="Testimonios de clientes">

                <!-- TARJETA -->
                <div
                    class="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-[#c5a47e]/40">

                    <!-- Comilla decorativa -->
                    <span class="absolute top-6 left-2 text-6xl text-[#c5a47e]/20 font-serif">“</span>

                    <div class="relative space-y-5">

                        <p class="text-white/80 leading-relaxed text-sm">
                            Llegué sintiendo que mi cuerpo nunca descansaba.
                            Algo seguía activado dentro de mí.
                            Aquí entendí que mi cuerpo no fallaba…
                            <span class="hidden more-text">
                                estaba protegiéndome. Hoy puedo respirar profundo sin miedo.
                            </span>
                        </p>

                        <button @click="toggleText($event.target)"
                            class="text-[#c5a47e] text-xs tracking-wide uppercase hover:text-[#e0c2a0] transition">
                            Leer más
                        </button>

                        <p class="text-white/30 text-xs tracking-widest uppercase pt-4 border-t border-white/10">
                            Ansiedad y sobrealerta
                        </p>
                    </div>
                </div>

                <!-- TARJETA -->
                <div
                    class="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-[#c5a47e]/40">

                    <span class="absolute top-6 left-2 text-6xl text-[#c5a47e]/20 font-serif">“</span>

                    <div class="relative space-y-5">
                        <p class="text-white/80 leading-relaxed text-sm">
                            Siempre pensé que había algo mal en mí.
                            En el proceso entendí que mi sensibilidad
                            <span class="hidden more-text">
                                no era debilidad, sino profundidad sin regulación.
                                Hoy me siento más tranquila y más yo.
                            </span>
                        </p>

                        <button @click="toggleText($event.target)"
                            class="text-[#c5a47e] text-xs tracking-wide uppercase hover:text-[#e0c2a0] transition">
                            Leer más
                        </button>

                        <p class="text-white/30 text-xs tracking-widest uppercase pt-4 border-t border-white/10">
                            Alta sensibilidad
                        </p>
                    </div>
                </div>

                <!-- TARJETA -->
                <div
                    class="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-[#c5a47e]/40">

                    <span class="absolute top-6 left-2 text-6xl text-[#c5a47e]/20 font-serif">“</span>

                    <div class="relative space-y-5">
                        <p class="text-white/80 leading-relaxed text-sm">
                            Después de una crisis fuerte pensé que no volvería a sentirme segura.
                            El proceso fue respetuoso y a mi ritmo.
                            <span class="hidden more-text">
                                Hoy confío en mi cuerpo otra vez.
                            </span>
                        </p>

                        <button @click="toggleText($event.target)"
                            class="text-[#c5a47e] text-xs tracking-wide uppercase hover:text-[#e0c2a0] transition">
                            Leer más
                        </button>

                        <p class="text-white/30 text-xs tracking-widest uppercase pt-4 border-t border-white/10">
                            Crisis de ansiedad
                        </p>
                    </div>
                </div>

            </div>

        </div>

    </section>
</template>