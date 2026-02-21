<script setup>
import { ref } from 'vue';
  const isOpen = ref(false);

  const links = [
    { href: "#para-quien", label: "Para quién es", ariaLabel: "Ir a la sección: Para quién es" },
    { href: "#metodo", label: "El método", ariaLabel: "Ir a la sección: El método" },
    { href: "#sesiones", label: "Sesiones", ariaLabel: "Ir a la sección: Cómo es una sesión" },
    { href: "#horarios", label: "Horarios", ariaLabel: "Ir a la sección: Horarios disponibles" },
    { href: "#sobre-mi", label: "Sobre mí", ariaLabel: "Ir a la sección: Sobre mí" },
    { href: "#contacto", label: "Contacto", ariaLabel: "Ir a la sección: Contacto y redes" },
  ];

</script>

<template>
<nav 
  class="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-700"
  aria-label="Navegación principal"
>
      <div class="max-w-5xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <a 
            href="#" 
            class="font-serif text-xl text-white hover:text-foreground transition-colors duration-300"
            aria-label="Regulación Suave - Inicio"
            title="Ir a inicio del sitio"
          >
            Regulación Suave
          </a>


          <div class="hidden md:flex items-center gap-8" role="menubar">
              <a 
                v-for="(link) in links"
                :key="link.href"
                :href="link.href"
                :aria-label="link.ariaLabel"
                role="menuitem"
                class="text-small text-white hover:text-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#c5a47e] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
              >
                {{link.label}}
              </a>
          </div>


          <button
            @click="() => {isOpen = !isOpen}"
            class="md:hidden p-2 text-gray-100 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c5a47e] rounded"
            :aria-label="isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
          >
            <i class="fa-solid fa-bars" aria-hidden="true"></i>
          </button>
        </div>

          <div 
            v-if="isOpen" 
            id="mobile-menu"
            class="md:hidden pt-4 pb-2 space-y-2 animate-fade-in"
            role="menu"
          >
              <a 
                v-for="link in links"
                :key="link.href"
                :href="link.href"
                @click="() => isOpen = false"
                :aria-label="link.ariaLabel"
                role="menuitem"
                class="block py-2 text-body text-white transition-colors duration-300 px-2 rounded focus:outline-none focus:ring-2 focus:ring-[#c5a47e]"
              >
                {{link.label}}
              </a>
          </div>
      </div>
    </nav>
</template>