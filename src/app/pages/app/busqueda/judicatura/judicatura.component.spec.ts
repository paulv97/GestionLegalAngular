import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudicaturaComponent } from './judicatura.component';

describe('JudicaturaComponent', () => {
  let component: JudicaturaComponent;
  let fixture: ComponentFixture<JudicaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudicaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudicaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
