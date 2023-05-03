import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMarketingComponent } from './slider-marketing.component';

describe('SliderMarketingComponent', () => {
  let component: SliderMarketingComponent;
  let fixture: ComponentFixture<SliderMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
