import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoJuicioComponent } from './nuevo-juicio.component';

describe('NuevoJuicioComponent', () => {
  let component: NuevoJuicioComponent;
  let fixture: ComponentFixture<NuevoJuicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoJuicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoJuicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
