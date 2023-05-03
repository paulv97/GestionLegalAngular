import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCuentaDestExtComponent } from './select-cuenta-dest-ext.component';

describe('SelectCuentaDestExtComponent', () => {
  let component: SelectCuentaDestExtComponent;
  let fixture: ComponentFixture<SelectCuentaDestExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCuentaDestExtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCuentaDestExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
