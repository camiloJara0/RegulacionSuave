<script setup>
import DropdownNavbar from '~/components/molecules/Dropdowns/DropdownNavbar.vue';
import Breadcrumb from '~/components/molecules/BreadCrumbs/Breadcrumb.vue';
import { useShowNavbar } from '~/stores/navbarResponsive.js';

const { showNavbarBurguer, cambiarEstado } = useShowNavbar();

const props = defineProps({
    Propiedades: {
        default: {}
    }
});

</script>

<template>
    <div class="navbar" :class="Propiedades.estilos">
        <div class="navbar__content">

            <a :href="Propiedades.home.link" class="text-white text-xl font-extrabold ml-3">
                <i :class="`fa-solid ${Propiedades.home.icono} text-2xl`"></i>
                {{ Propiedades.home.text }}
            </a>

            <div class="menuResponsive" @click="cambiarEstado()">
                <h2 class="text-white"><i class="fa-solid fa-bars"></i></h2>
            </div>

            <ul class="navbar__content__list" @click="removeStorage()"
                :class="{ 'mostrarResponsive': showNavbarBurguer, 'ocultarResponsive': !showNavbarBurguer }">

                <li v-for="(seccion, index) in Propiedades.secciones" :key="index">
                    <Breadcrumb v-if="seccion.type === 'Breadcrumb'" />
                    <DropdownNavbar v-else-if="seccion.type === 'DropDown'" :icon="seccion.icon" :nombre="seccion.text"
                        :submenu="seccion.subSeccion" />
                    <a v-else :href="seccion.link" class="flex gap-1 align-center justify-center text-sm font-bold text-gray-100 hover:text-blue-500">
                        <i :class="`fa ${seccion.icon}`"></i>
                        <p>{{ seccion.text }}</p>
                    </a>
                </li>

            </ul>

        </div>
    </div>
</template>

<style scoped>
.navbar {
    padding: 10px 10px 5px 10px;
    grid-area: navbar;
}

.navbar__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: #fff;
    width: 110px;
    object-fit: contain;
    margin-left: 15px;
}

.navbar__content__list {
    display: flex;
    list-style: none;
    gap: 5px;
}

.navbar__content__list li {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 10px 15px;
}

.menuResponsive {
    display: none;
    font-size: 20px;
    font-weight: bold;
}

.burgerIcon {
    cursor: pointer;
}

.buergerIcon:hover {
    background-color: var(--color-negro-rojizo);
    border-radius: 10px;
}

.mostrarResponsive {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
}

@media screen and (max-width: 768px) {
    .ocultarResponsive {
        display: none;
    }

    .navbar {
        height: 40px;
        padding: 0;
    }

    .navbar .logo {
        height: 30px;
        margin: 5px;
    }

    .menuResponsive {
        display: block;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .navbar__content__list {
        position: absolute;
        z-index: 999;
        top: 95px;
        right: 0;
        width: 100%;
        background-color: var(--color-default-900);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .menuResponsive .navbar__content__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

}
</style>