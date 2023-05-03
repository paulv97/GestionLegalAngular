import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfInternasComponent } from './transf-internas.component';

describe('TransfInternasComponent', () => {
  let component: TransfInternasComponent;
  let fixture: ComponentFixture<TransfInternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfInternasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfInternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
