<template>
    <Navbar :Propiedades="propiedadesNavbar" />
    <div class="p-10 pt-20">
        <Pagina :Propiedades="propiedadesPagina"></Pagina>
    </div>
    <Button :Propiedades="{texto:'Hola'}"></Button>
</template>

<script setup>
import Navbar from '~/components/organism/Navbar/Navbar.vue';
import Pagina from '~/components/organism/Pagina/Pagina.vue';
import Form from '~/components/organism/Forms/Form.vue';
import Button from '~/components/atoms/Buttons/Button.vue';
import { NavbarBuilder } from '~/Core/NavbarBuilder';
import { TablaBuilder } from '~/Core/TablaBuilder';
import { ComponenteBuilder } from '~/Core/ComponentesBuilder';
import { CalendarioBuilder } from '~/Core/CalendarioBuilder';
import { FormularioBuilder } from '~/Core/FormBuilder';

const propiedadesForm = new FormularioBuilder()
    .setFormularioFondo(false)
    .setBotones([{
        type: 'enviar', text: 'Enviar', color: 'bg-blue-500',
    }])
    // .setCamposRequeridos(['Empresa.nombre',
    //     'Empresa.logo',
    // ])
    .setFormularioContenedorCampos('grid lg:grid-cols-4! md:grid-cols-3! grid-cols-1!')
    .nuevaSeccion('Datos Empresa')
    .addCampo({
        component: 'Label',
        text: '<i class="fa-solid fa-building text-blue-500 mr-1"></i>Datos de la Empresa',
        tamaño: 'w-full lg:col-span-4 md:col-span-3 col-span-1',
        forLabel: 'nombre',
    })
    .addCampo({
        component: 'Input',
        type: 'text',
        placeholder: 'Nombre Comercial',
        id: 'nombre',
        name: 'nombre',
        tamaño: 'w-full',
        minlength: 3,
        vmodel: 'Empresa.nombre',
        upperCase: true
    })
    .addCampo({
        component: 'Input',
        type: 'text',
        placeholder: 'Logo',
        id: 'logo',
        name: 'logo',
        tamaño: 'w-full',
        vmodel: 'Empresa.logo',
    })
    .build()

const propiedadesNavbar = new NavbarBuilder()
    .setHome({
        text: 'thesalus',
        icono: 'fa-home',
        imagen: 'thesalus',
        link: '/'
    })
    .setEstilos('bg-blue-500 fixed left-0 right-0')
    .setSecciones([
        {
            type: 'Breadcrumb',
        },
        {
            type: 'DropDown',
            text: 'Inicio',
            link: '/home',
            icon: 'fa-user',
            subSeccion: [
                { id: 1, nombre: 'Notificaciones', icon: 'fa-bell', link: '#' },
                { id: 2, nombre: 'Alertas', icon: 'fa-bell-concierge', link: '#' }
            ]
        },
        {
            text: 'Inicio',
            link: '/',
            icon: 'fa-user'
        },
    ])
    .build()


const pagina = new ComponenteBuilder()
const builderTablaEPS = new TablaBuilder()
const EPSdata = ref([
    {
        nombre: 'nombre',
        direccion: 'nombre',
        email: 'nombre',
        telefono: 'nombre',
        codigo: 'nombre',
    }
])
const citas = ref([
    {
        nombre: 'nombre',
        fecha: '10/11/2025'
    }
])

// Construcción final
pagina
    .setFondo('FondoDefault')
    .setHeaderPage({
        titulo: 'Datos Asociados a la Empresa',
        descripcion: 'Registra y configura según los datos de tu Empresa.',
    })
    .setEstilos('')
    .setLayout('')
    .setContenedor('w-full flex flex-col gap-5');

pagina.addComponente('Tabla', builderTablaEPS
    .setColumnas([
        { titulo: 'nombre', value: 'Nombre', tamaño: 100, ordenar: true },
        { titulo: 'direccion', value: 'Direccion', tamaño: 100, ordenar: true },
        { titulo: 'email', value: 'Correo', tamaño: 100, ordenar: true },
        { titulo: 'telefono', value: 'Telefono', tamaño: 100, ordenar: true },
        { titulo: 'codigo', value: 'Codigo', tamaño: 100, ordenar: true },
    ])
    .setHeaderTabla({ titulo: 'EPS Registradas', color: 'bg-[var(--color-default)] text-white' })
    .setDatos(EPSdata)
)
pagina.addComponente('Calendario', new CalendarioBuilder()
    .setEstilos('w-150')
    .setCitas(citas)
)
pagina.addComponente('Form', propiedadesForm)

const propiedadesPagina = pagina.build();

</script>