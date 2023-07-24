import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-recursos',
	templateUrl: './recursos.component.html',
	styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {
	safeSrc: SafeResourceUrl;

	constructor(private sanitizer: DomSanitizer,private router: Router) {
	  
	  this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://pruebaiframe-wg7upc524q-uc.a.run.app/archivos");
	}
  
	ngOnInit(): void {
	}

}
