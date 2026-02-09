// Clase base para construir formularios completos
export class NavbarBuilder {
  constructor() {
    this.propiedades = {
        home: '',
        secciones: [], // Secciones navbar
        estilos: '', // CSS Componente
    }
  }

  setHome(home) {
    this.propiedades.home = home
    return this
  }

  setSecciones(secciones) {
    this.propiedades.secciones = secciones
    return this
  }

  setEstilos(estilos) {
    this.propiedades.estilos = estilos
    return this
  }

  build() {
    return this.propiedades
  }
}