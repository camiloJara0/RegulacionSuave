// Clase base para construir formularios completos
export class AsideBuilder {
  constructor() {
    this.propiedades = {
        home: '',
        buttons: [], // Secciones aside
        estilos: '', // CSS Componente
    }
  }

  setHome(home) {
    this.propiedades.home = home
    return this
  }

  setButtons(buttons) {
    this.propiedades.buttons = buttons
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