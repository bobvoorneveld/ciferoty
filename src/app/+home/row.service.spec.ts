import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { RowService } from './row.service';

describe('Row Service', () => {
  beforeEachProviders(() => [RowService]);

  it('should ...',
      inject([RowService], (service: RowService) => {
    expect(service).toBeTruthy();
  }));
});
