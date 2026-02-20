<script setup>
import { ref } from 'vue';
  const isOpen = ref(false);

  const links = [
    { href: "#para-quien", label: "Para quién es" },
    { href: "#metodo", label: "El método" },
    { href: "#sesiones", label: "Sesiones" },
    { href: "#horarios", label: "Horarios" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#contacto", label: "Contacto" },
  ];

</script>

<template>
<nav class="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-700">
      <div class="max-w-5xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <a href="#" class="font-serif text-xl text-white hover:text-foreground transition-colors duration-300">
            Regulación Suave
          </a>


          <div class="hidden md:flex items-center gap-8">
              <a v-for="(link) in links"
                :key="link.href"
                :href="link.href"
                class="text-small text-white hover:text-foreground transition-colors duration-300"
              >
                {{link.label}}
              </a>
          </div>


          <button
            @click="() => {isOpen = !isOpen}""
            class="md:hidden p-2 text-gray-100 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>

          <div v-if="isOpen" class="md:hidden pt-4 pb-2 space-y-2 animate-fade-in">
              <a v-for="link in links"
                :key="link.href"
                :href="link.href"
                @click="() => isOpen = false"
                class="block py-2 text-body text-white transition-colors duration-300"
              >
                {{link.label}}
              </a>
          </div>
      </div>
    </nav>
</template>