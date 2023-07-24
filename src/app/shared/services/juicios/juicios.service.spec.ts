import { TestBed } from '@angular/core/testing';

import { JuiciosService } from './juicios.service';

describe('JuiciosService', () => {
  let service: JuiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
