/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BillAddService } from './bill-add.service';

describe('BillAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillAddService]
    });
  });

  it('should ...', inject([BillAddService], (service: BillAddService) => {
    expect(service).toBeTruthy();
  }));
});
