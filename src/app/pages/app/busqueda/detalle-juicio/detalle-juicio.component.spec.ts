import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJuicioComponent } from './detalle-juicio.component';

describe('DetalleJuicioComponent', () => {
  let component: DetalleJuicioComponent;
  let fixture: ComponentFixture<DetalleJuicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleJuicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleJuicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
