import { TestBed } from '@angular/core/testing';

import { NgxStyleService } from './ngx-style.service';

describe('NgxStyleService', () => {
  let service: NgxStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
