import { TestBed } from '@angular/core/testing';

import { BalanceStatementService } from './balance-statement.service';

describe('BalanceStatementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalanceStatementService = TestBed.get(BalanceStatementService);
    expect(service).toBeTruthy();
  });
});
