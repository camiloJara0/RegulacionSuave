<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const activeSection = ref('');
const isScrolled = ref(false);

const links = [
  { href: "#metodo", label: "El método", ariaLabel: "Ir a la sección: El método" },
  { href: "#para-quien", label: "Para quién es", ariaLabel: "Ir a la sección: Para quién es" },
  { href: "#sesiones", label: "Sesiones", ariaLabel: "Ir a la sección: Cómo es una sesión" },
  { href: "#horarios", label: "Horarios", ariaLabel: "Ir a la sección: Horarios disponibles" },
  { href: "#sobre-mi", label: "Sobre mí", ariaLabel: "Ir a la sección: Sobre mí" },
  { href: "#contacto", label: "Contacto", ariaLabel: "Ir a la sección: Contacto y redes" },
];

// Detecta la sección activa por scroll
const detectActiveSection = () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeSection.value = '#' + section.id;
    }
  });

  // Detect scroll position para cambiar estilo del navbar
  isScrolled.value = window.scrollY > 20;
};

// Detecta cuando el usuario clickea un link
const scrollToSection = (href) => {
  activeSection.value = href;
  isOpen.value = false;
  
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', detectActiveSection);
  detectActiveSection(); // Ejecutar al montar
});

onUnmounted(() => {
  window.removeEventListener('scroll', detectActiveSection);
});

const isLinkActive = (href) => {
  return activeSection.value === href;
};
</script>

<template>
<nav 
  :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled 
      ? 'bg-white/80 backdrop-blur-xl border-b border-[#616C4B]/10 shadow-lg' 
      : 'bg-transparent border-b border-transparent'
  ]"
  aria-label="Navegación principal"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-12 sm:h-16">
      <!-- Logo -->
      <a 
        href="/" 
        @click.prevent="() => { activeSection = ''; scrollToSection('#'); window.scrollTo({ top: 0, behavior: 'smooth' }); }"
        :class="[
          'font-serif text-lg sm:text-xl font-semibold transition-colors duration-300',
          isScrolled ? 'text-[#616C4B]' : 'text-white'
        ]"
        aria-label="Regulación Suave - Inicio"
        title="Ir a inicio del sitio"
      >
        Regulación Suave
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-1" role="menubar">
        <a 
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click.prevent="scrollToSection(link.href)"
          :aria-label="link.ariaLabel"
          role="menuitem"
          :class="[
            'relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300',
            isScrolled ? 'text-gray-700 hover:text-[#616C4B]' : 'text-white hover:text-[#616C4B]/80',
            isLinkActive(link.href) && (isScrolled ? 'text-[#616C4B]' : 'text-[#b3d89f]')
          ]"
        >
          {{ link.label }}
          
          <!-- Indicador animado debajo del link -->
          <span 
            :class="[
              'absolute bottom-0 left-3 right-3 lg:left-4 lg:right-4 h-0.5 bg-gradient-to-r from-[#616C4B] to-[#616C4B]/60 transition-all duration-500 ease-out',
              isLinkActive(link.href) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            ]"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        :class="[
          'md:hidden p-2 rounded-lg transition-all duration-300',
          isScrolled 
            ? 'text-gray-700 hover:bg-[#616C4B]/10' 
            : 'text-white hover:bg-white/10'
        ]"
        :aria-label="isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
      >
        <svg 
          v-if="!isOpen" 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg 
          v-else 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isOpen" 
        id="mobile-menu"
        :class="[
          'md:hidden pb-4 space-y-2 border-t',
          isScrolled ? 'border-[#616C4B]/10 bg-white/50' : 'border-white/10 bg-black/20'
        ]"
        role="menu"
      >
        <a 
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click.prevent="scrollToSection(link.href)"
          :aria-label="link.ariaLabel"
          role="menuitem"
          :class="[
            'block px-4 py-3 rounded-lg transition-all duration-300 relative',
            isScrolled ? 'text-gray-700' : 'text-white',
            isLinkActive(link.href) 
              ? (isScrolled ? 'bg-[#616C4B]/10 text-[#616C4B] font-semibold' : 'bg-[#616C4B]/20 text-[#b3d89f] font-semibold')
              : (isScrolled ? 'hover:bg-[#616C4B]/5' : 'hover:bg-white/5')
          ]"
        >
          <span class="flex items-center gap-2">
            <span 
              v-if="isLinkActive(link.href)"
              class="inline-block w-2 h-2 rounded-full bg-[#616C4B]"
              aria-hidden="true"
            ></span>
            {{ link.label }}
          </span>
        </a>
      </div>
    </transition>
  </div>
</nav>
</template>

<style scoped>
/* Transiciones suaves */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animación del indicador de sección activa */
@keyframes slideIn {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

/* Efecto hover mejorado */
a[role="menuitem"] {
  position: relative;
}

a[role="menuitem"]::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #616C4B, rgba(97, 108, 75, 0.3));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

a[role="menuitem"]:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Animación móvil */
@media (max-width: 768px) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: all 0.3s ease;
  }

  .mobile-menu-enter-from,
  .mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>