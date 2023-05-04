class FooterComponent extends HTMLElement {
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
		<footer>
        <p>© 2020 GestionLegal. All rights reserved</p>
      </footer>
		`
	}
}

customElements.define('app-footer', FooterComponent);