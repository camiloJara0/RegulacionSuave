<script setup>
import Navigation from '~/components/Navigation.vue';
import Hero from '~/components/Hero.vue';
import ParaQuienEs from '~/components/ParaQuienEs.vue';
import QueNoEs from '~/components/QueNoEs.vue';
import ElMetodo from '~/components/ElMetodo.vue';
import ComoEsUnaSesion from '~/components/ComoEsUnaSesion.vue';
import Valores from '~/components/Valores.vue';
import Horarios from '~/components/Horarios.vue';
import SobreMi from '~/components/SobreMi.vue';
import Reseñas from '~/components/Reseñas.vue';
import Contacto from '~/components/Contacto.vue';
import AvisoLegal from '~/components/AvisoLegal.vue';
</script>

<template>
    <div class="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ElMetodo />
        <ParaQuienEs />
        <ComoEsUnaSesion />
        <Horarios />
        <SobreMi />
        <Valores />
        <Reseñas />
        <Contacto />
      </main>
      <!-- <AvisoLegal /> -->
      <Footer/>
    </div>
</template>