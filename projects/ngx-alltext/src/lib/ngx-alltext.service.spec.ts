import { TestBed } from '@angular/core/testing';

import { NgxAlltextService } from './ngx-alltext.service';

describe('NgxAlltextService', () => {
  let service: NgxAlltextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAlltextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
