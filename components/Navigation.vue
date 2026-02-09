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
          <a href="#" class="font-serif text-xl color-btnText">
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
            class="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
                <div v-if="isOpen === true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </div>
                <div v-else>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </div>
            </svg>
          </button>
        </div>

          <div v-if="isOpen" class="md:hidden pt-4 pb-2 space-y-2 animate-fade-in">
              <a v-for="link in links"
                :key="link.href"
                :href="link.href"
                @click="() => isOpen = false"
                class="block py-2 text-body text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {{link.label}}
              </a>
          </div>
      </div>
    </nav>
</template>