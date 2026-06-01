<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal';

const { element, isVisible } = useScrollReveal();

const items = [
    "Terapia confrontativa",
    "Trabajo corporal invasivo",
    "Diagnóstico médico o psicológico",
    "Promesas de resultados rápidos",
  ];
</script>

<template>
    <section ref="element" id="que-no-es" :class="['bg-terracotta-soft/50 py-16 md:py-24 scroll-reveal', { active: isVisible }]">
      <div class="container-section py-0">
        <div class="max-w-2xl mx-auto text-center space-y-8">
          <h2 class="heading-section color-btnText font-bold text-3xl">Qué no es</h2>
          
          <p class="text-body text-base md:text-lg text-gray-300">
            Este espacio no es:
          </p>

          <ul class="space-y-3 text-left max-w-md mx-auto">
              <li v-for="(item, index) in items" :key="index" class="flex items-center gap-3 text-body text-base md:text-lg">
                <span class="w-2 h-2 rounded-full bg-[#616C4B]" />
                <span>{{item}}</span>
              </li>
          </ul>

          <div class="divider-soft" />

          <p class="text-body text-gray-400 italic font-serif text-lg">
            Aquí tú mantienes el control en todo momento.
          </p>
        </div>
      </div>
    </section>
</template>