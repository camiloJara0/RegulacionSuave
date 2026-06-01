<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal';

const { element, isVisible } = useScrollReveal();

const precios = [
    {
        tipo: "Sesión Integral Método SER",
        duracion: "60 min",
        precio: "$130.000",
        destacado: true,
        nota: "Encuentro inicial de regulación profunda mente + cuerpo + campo energético",
    },
    {
        tipo: "Acompañamiento Profundo",
        duracion: "60 min",
        precio: "$130.000",
        destacado: false,
        nota: "Proceso terapéutico sostenido para transformación real y regulación nerviosa",
    },
    {
        tipo: "Regulación Nerviosa Somática",
        duracion: "60 min",
        precio: "$150.000",
        destacado: false,
        nota: "Liberación corporal de memorias del sistema nervioso y ajuste emocional",
    },
    {
        tipo: "Quiromasaje Terapéutico y Bienestar Corporal",
        duracion: "60 min",
        precio: "$130.000",
        destacado: false,
        nota: "Dolor de espalda, cuello, zona lumbar, ciática, relajación muscular, reflexología y stretching terapéutico.",
    },
    {
        tipo: "Regulación Emocional y Sistema Nervioso",
        duracion: "60 min",
        precio: "$130.000",
        destacado: true,
        nota: "Ansiedad, ataques de pánico, vértigo emocional, estrés, fobia social, alta sensibilidad.",
    },
];
</script>

<template>
    <section ref="element" id="valores"
        :class="['relative py-24 px-6 bg-gradient-to-b from-[#141414] via-[#101010] to-[#0b0b0b] scroll-reveal', { active: isVisible }]"
        aria-labelledby="valores-title">
        <div class="max-w-5xl mx-auto space-y-16">

            <!-- Encabezado -->
            <header class="text-center space-y-4">
                <h2 id="valores-title" class="text-4xl font-semibold text-[#616C4B] tracking-wide">
                    Servicios
                </h2>
                <p class="text-gray-400 max-w-xl mx-auto">
                    Un acompañamiento profesional, claro y sin compromisos a largo plazo
                </p>
            </header>

            <!-- Tarjetas -->
            <div class="grid md:grid-cols-3 gap-8" role="list" aria-label="Paquetes de sesiones disponibles">

                <article v-for="(item, index) in precios" :key="index" :class="[
                    'relative rounded-3xl p-8 text-center space-y-6 transition-all duration-300',
                    item.destacado
                        ? 'bg-[#1b1b1b] border border-[#616C4B]/40 shadow-[0_0_60px_rgba(197,164,126,0.15)] scale-[1.03]'
                        : 'bg-[#121212] border border-white/5'
                ]" role="listitem" :aria-label="`${item.tipo}: ${item.precio} - ${item.nota}`">
                    <!-- Badge destacado -->
                    <div v-if="item.destacado" class="absolute -top-3 left-1/2 -translate-x-1/2
                               px-4 py-1 rounded-full text-xs tracking-wide
                               bg-[#616C4B] text-[#121212]" role="img" aria-label="Sesión recomendada">
                        Recomendada
                    </div>

                    <div class="space-y-2">
                        <h3 class="text-sm uppercase tracking-widest text-gray-400">
                            {{ item.tipo }}
                        </h3>
                        <p class="text-gray-300">
                            {{ item.duracion }}
                        </p>
                    </div>

                    <div class="space-y-1">
                        <p class="text-3xl font-serif text-[#616C4B]">
                            {{ item.precio }}
                        </p>
                        <p class="text-sm text-gray-400">
                            COP
                        </p>
                    </div>

                    <p v-if="item.nota" class="text-sm text-gray-400 italic pt-2">
                        {{ item.nota }}
                    </p>
                </article>
            </div>

            <!-- Nota inferior -->
            <div class="max-w-3xl mx-auto rounded-3xl px-8 py-8 text-center
                       bg-[#0f0f0f] border border-white/5" role="region"
                aria-label="Información adicional sobre sesiones">
                <p class="text-gray-300 leading-relaxed">
                    <span class="text-[#616C4B] font-medium">
                        Cantidad de sesiones:
                    </span>
                    <br />
                    El acompañamiento tiene una duración máxima de hasta
                    <strong>6 sesiones por persona</strong>,
                    respetando siempre tu ritmo y proceso.
                </p>
            </div>

        </div>
    </section>
</template>
