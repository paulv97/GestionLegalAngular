import { Component, HostListener, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';

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

	constructor(
		private _storageService: LocalStorageService,
	) { }

	ngOnInit(): void {
		this.onResize()
		this.setToggleFromPreferences()
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		// const width = window.innerWidth

		// if (width <= 685) {
		// 	this.menuType = 'overlay'
		// 	this.showMenuButton = true
		// 	setTimeout(() => this.showMenu = false, 10)
		// } else {
		// 	this.menuType = 'static'
		// 	this.showMenuButton = false
		// 	this.showMenu = true
		// }
	}

	onMenuToggle(isOpen: boolean) {
		this.isOpen = isOpen

		let preferences = this._storageService.getStorage({key: 'preferences'})

		if (!preferences) preferences = {}

		preferences.isMenuOpen = isOpen

		this._storageService.setStorage({key: 'preferences'}, preferences)
	}

	setToggleFromPreferences() {
		const preferences = this._storageService.getStorage({key: 'preferences'})

		this.isOpen = preferences?.isMenuOpen || false
	}

}
