import { TestBed } from '@angular/core/testing';

import { BlogsAbogadosService } from './blogs-abogados.service';

describe('BlogsAbogadosService', () => {
  let service: BlogsAbogadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsAbogadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
