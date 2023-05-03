import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCuentasComponent } from './listado-cuentas.component';

describe('ListadoCuentasComponent', () => {
  let component: ListadoCuentasComponent;
  let fixture: ComponentFixture<ListadoCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
