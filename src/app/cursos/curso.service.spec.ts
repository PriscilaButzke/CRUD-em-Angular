import { TestBed } from '@angular/core/testing';

import { ServiçosService } from './curso.service';

describe('ServiçosService', () => {
  let service: ServiçosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiçosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
