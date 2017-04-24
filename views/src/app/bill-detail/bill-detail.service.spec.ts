/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BillDetailService } from './bill-detail.service';

describe('BillDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillDetailService]
    });
  });

  it('should ...', inject([BillDetailService], (service: BillDetailService) => {
    expect(service).toBeTruthy();
  }));
});
