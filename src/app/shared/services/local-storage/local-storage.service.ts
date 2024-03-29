import { Injectable } from '@angular/core';
import { LocalStorageTypes } from './local-storage-types';
import * as CryptoJS from 'crypto-js';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	private secretKey;

	constructor() {
		this.secretKey = this.generateSecretKey()
	}

	private generateSecretKey(): string {
		let navigator_info = window.navigator;
		let screen_info = window.screen;
		let uid = navigator_info?.mimeTypes?.length?.toString() || '';
		uid += screen_info?.orientation?.angle || '';
		uid += navigator_info?.userAgent?.replace(/\D+/g, '');
		uid += screen_info?.colorDepth || '';
		uid += navigator_info?.plugins?.length  || '';
		uid += screen_info?.pixelDepth || '';
		uid += navigator_info?.hardwareConcurrency?.toLocaleString() || ''

		return uid;
	}

	private getKey(key: string) {
		return CryptoJS.SHA224(key).toString();
	}

	getStorage(keyTypes: LocalStorageTypes) {
		try {
			const key = this.getKey(keyTypes.key)
			const data = window.localStorage.getItem(key);

			if(data) {
				const dataDecrypted = CryptoJS.AES.decrypt(data, this.secretKey).toString(CryptoJS.enc.Utf8);

				try {
					return JSON.parse(dataDecrypted)
				} catch {
					return dataDecrypted
				}
			}
		} catch(ex) {
			console.log('error storage', ex)
			return null
		}
	}

	setStorage(keyTypes: LocalStorageTypes, data: any): void {
		let key = this.getKey(keyTypes.key)
		let dataEncrypted = CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();

		window.localStorage.setItem(key, dataEncrypted);
	}

	getInformation(): any {
		let storage: any = this.getStorage({key: 'sesion'});
		let sesion: any = storage;
		return sesion;
	}

	clear(keyTypes: LocalStorageTypes) {
		let key = this.getKey(keyTypes.key)
		window.localStorage.removeItem(key);
	}

}
