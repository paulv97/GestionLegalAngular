import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCuentaOrigenComponent } from './select-cuenta-origen.component';

describe('SelectCuentaOrigenComponent', () => {
  let component: SelectCuentaOrigenComponent;
  let fixture: ComponentFixture<SelectCuentaOrigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCuentaOrigenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCuentaOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
