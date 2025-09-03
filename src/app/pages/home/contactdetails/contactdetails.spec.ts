import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactdetails } from './contactdetails';

describe('Contactdetails', () => {
  let component: Contactdetails;
  let fixture: ComponentFixture<Contactdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
