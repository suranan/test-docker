/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BillManagementService } from './bill-management.service';

describe('BillManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillManagementService]
    });
  });

  it('should ...', inject([BillManagementService], (service: BillManagementService) => {
    expect(service).toBeTruthy();
  }));
});
