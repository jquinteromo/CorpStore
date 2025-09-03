import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corpstorebenefits } from './corpstorebenefits';

describe('Corpstorebenefits', () => {
  let component: Corpstorebenefits;
  let fixture: ComponentFixture<Corpstorebenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corpstorebenefits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corpstorebenefits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
