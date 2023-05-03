import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosJudicialesComponent } from './servicios-judiciales.component';

describe('ServiciosJudicialesComponent', () => {
  let component: ServiciosJudicialesComponent;
  let fixture: ComponentFixture<ServiciosJudicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosJudicialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosJudicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
