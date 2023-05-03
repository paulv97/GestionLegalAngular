import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'sidebar-layout',
	templateUrl: './sidebar-layout.component.html',
	styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent implements OnInit {

	menuType: 'overlay' | 'static' = 'static'
	showMenu: boolean = false
	showMenuButton: boolean = false

	isOpen = false

	constructor() { }

	ngOnInit(): void {
		this.onResize()
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		const width = window.innerWidth

		if (width <= 685) {
			this.menuType = 'overlay'
			this.showMenuButton = true
			setTimeout(() => this.showMenu = false, 10)
		} else {
			this.menuType = 'static'
			this.showMenuButton = false
			this.showMenu = true
		}
	}

}
