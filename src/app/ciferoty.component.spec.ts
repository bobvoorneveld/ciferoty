import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CiferotyAppComponent } from '../app/ciferoty.component';

beforeEachProviders(() => [CiferotyAppComponent]);

describe('App: Ciferoty', () => {
  it('should create the app',
      inject([CiferotyAppComponent], (app: CiferotyAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
