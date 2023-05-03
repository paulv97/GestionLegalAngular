import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCuentaDestIntComponent } from './select-cuenta-dest-int.component';

describe('SelectCuentaDestIntComponent', () => {
  let component: SelectCuentaDestIntComponent;
  let fixture: ComponentFixture<SelectCuentaDestIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCuentaDestIntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCuentaDestIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
