import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGarantiasComponent } from './listado-garantias.component';

describe('ListadoGarantiasComponent', () => {
  let component: ListadoGarantiasComponent;
  let fixture: ComponentFixture<ListadoGarantiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoGarantiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoGarantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
