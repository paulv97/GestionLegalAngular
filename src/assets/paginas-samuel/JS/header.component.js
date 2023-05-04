class HeaderComponent extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })
		
		const link = document.createElement('link')
		link.setAttribute('rel', 'stylesheet')
		link.setAttribute('href', 'https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css')
		shadow.appendChild(link)

		const link1 = document.createElement('link')
		link1.setAttribute('rel', 'stylesheet')
		link1.setAttribute('href', '../Sass/estilos.css')
		shadow.appendChild(link1)


		const main = document.createElement('div')
		main.innerHTML = this.render()
		shadow.appendChild(main)
	}

	render() {
		return `
		<header class ="menuEstilo">
        <a href="#" class="logo">GestionLegal</a>
        <div class="row columnaMenu">
		  <a href="Contacto.html" class="button">Contacto</a>
		  <a href="QuienesSomos.html" class="button">About</a>
		  <a href="Blogs.html" class="button">Blogs</a>
          <a href="#" class="button">Productos</a>
          <a href="#" class="button">Costo</a>
          <a href="#" class="button">Recursos</a>
		  <a href="Documentos.html" class="button">Documentos</a>
          <a href="index.html" class="button">Inicio</a>
          
        </div>
        <button>Comprar</button>
      </header>
		`
	}
}

customElements.define('app-header', HeaderComponent);