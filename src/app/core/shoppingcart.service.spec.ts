import { TestBed } from '@angular/core/testing';

import { Shoppingcart } from './shoppingcart.service';

describe('Shoppingcart', () => {
  let service: Shoppingcart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shoppingcart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
