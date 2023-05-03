import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfExternasComponent } from './transf-externas.component';

describe('TransfExternasComponent', () => {
  let component: TransfExternasComponent;
  let fixture: ComponentFixture<TransfExternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfExternasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfExternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
