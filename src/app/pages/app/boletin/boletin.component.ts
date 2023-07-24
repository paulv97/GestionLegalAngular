import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boletin',
  templateUrl: './boletin.component.html',
  styleUrls: ['./boletin.component.scss']
})
export class BoletinComponent implements OnInit {
  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,private router: Router) {
    
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://pruebaiframe-wg7upc524q-uc.a.run.app/boletines");
  }

  ngOnInit(): void {
  }

}
