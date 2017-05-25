/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAddService } from './user-add.service';

describe('UserAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAddService]
    });
  });

  it('should ...', inject([UserAddService], (service: UserAddService) => {
    expect(service).toBeTruthy();
  }));
});
