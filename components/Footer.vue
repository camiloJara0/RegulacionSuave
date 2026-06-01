<script setup>
const year = new Date().getFullYear()

const enlaces = [
    {
        titulo: 'Contacto',
        links: [
            { label: '+57 350 873 8787', href: '' },
            { label: 'Bogota DC', href: '' },
            { label: 'Sede Suba: Calle 151C #107-10', href: '' },
            { label: 'Sede Norte: Ak 15 #104-76', href: '' },
        ]
    },
    {
        titulo: 'Secciones',
        links: [
            { href: "#metodo", label: "El método", ariaLabel: "Ir a la sección: El método" },
            { href: "#para-quien", label: "Para quién es", ariaLabel: "Ir a la sección: Para quién es" },
            { href: "#sesiones", label: "Sesiones", ariaLabel: "Ir a la sección: Cómo es una sesión" },
            { href: "#horarios", label: "Horarios", ariaLabel: "Ir a la sección: Horarios disponibles" },
            { href: "#sobre-mi", label: "Sobre mí", ariaLabel: "Ir a la sección: Sobre mí" },
            { href: "#contacto", label: "Contacto", ariaLabel: "Ir a la sección: Contacto y redes" },
        ]
    },
    {
        titulo: 'Legal',
        links: [
            { label: 'Este espacio ofrece acompañamiento terapéutico complementario. No sustituye atención médica, psicológica o psiquiátrica, ni implica diagnóstico clínico. Cada persona es responsable de su proceso y puede detener la sesión en cualquier momento.', href: '' },
        ]
    }
]

const redes = [
    { icon: 'fa-solid fa-f', label: 'Facebook', href: '#' },
    { icon: 'fa-solid fa-x', label: 'Twitter', href: '#' },
    { icon: 'fa-solid fa-instagram', label: 'Instagram', href: '#' }
]

const contacto = [
    { icon: 'i-lucide-map-pin', label: 'Cra. 15 #123-45, Bogotá, Colombia', tipo: 'direccion' },
    { icon: 'i-lucide-phone', label: '+57 (1) 234 5678', tipo: 'telefono' },
    { icon: 'i-lucide-mail', label: 'info@sys-medical.com', tipo: 'email' }
]
</script>

<template>
    <footer class="bg-[#faf8f5] text-black overflow-hidden -mt-20 pt-20 relative z-1">
        <!-- Main Footer Content -->
        <div class="pt-16 pb-12 px-15">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

                <!-- Logo & Company Info -->
                <div class="lg:col-span-2">
                    <div class="mb-6">
                        <h3 class="text-2xl mb-2 font-serif sm:text-xl font-semibold transition-colors duration-300">
                            <span
                                class="bg-[#616C4B] bg-clip-text text-transparent">Ansiedad</span>
                            <span class="text-black">NoMas</span>
                        </h3>
                    </div>

                    <p class="text-gray-400 text-sm leading-relaxed mb-6">
                        Acompaño a mujeres a regular ansiedad y vertigo integrando cuerpo y sistema nervioso desde un
                        enfoque suave, humano y seguro.
                    </p>

                    <!-- Social Links -->
                    <!-- <div class="flex gap-3">
                        <a v-for="red in redes" :key="red.label" :href="red.href" :title="red.label"
                            class="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-colors duration-300 group">
                            <i :class="red.icon" class="w-5 h-5 text-gray-800 group-hover:text-black"></i>
                        </a>
                    </div> -->
                </div>

                <!-- Quick Links Section 1 -->
                <div v-for="seccion in enlaces" :key="seccion.titulo">
                    <h4 class="font-semibold text-black mb-4 text-sm uppercase tracking-wider">
                        {{ seccion.titulo }}
                    </h4>
                    <ul class="space-y-3">
                        <li v-for="link in seccion.links" :key="link.label">
                            <a :href="link.href"
                                class="text-gray-400 hover:text-[#616C4B] transition-colors duration-200 text-sm flex items-center gap-2 group">
                                <span
                                    class="w-1 h-1 bg-[#616C4B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-gray-200 bg-gray-100/50 backdrop-blur">
            <UContainer class="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-sm text-gray-500">
                    &copy; {{ year }} <span class="font-semibold text-black">Ansiedad NO Mas</span> Todos los derechos
                    reservados.
                </p>

                <div class="flex gap-6">
                    <a href="#" class="text-xs text-gray-500 hover:text-[#616C4B] transition-colors">
                        Política de privacidad
                    </a>
                    <a href="#" class="text-xs text-gray-500 hover:text-[#616C4B] transition-colors">
                        Términos de uso
                    </a>
                    <a href="#" class="text-xs text-gray-500 hover:text-[#616C4B] transition-colors">
                        Mapa del sitio
                    </a>
                </div>
            </UContainer>
        </div>
    </footer>
</template>

<style scoped>
/* Transiciones suaves */
a {
    transition: all 0.3s ease;
}

/* Efecto linear animado en hover */
@media (prefers-reduced-motion: no-preference) {
    .text-transparent {
        background-size: 200% 200%;
    }
}
</style>