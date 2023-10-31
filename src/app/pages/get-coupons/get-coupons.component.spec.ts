import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCouponsComponent } from './get-coupons.component';

describe('GetCouponsComponent', () => {
  let component: GetCouponsComponent;
  let fixture: ComponentFixture<GetCouponsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCouponsComponent]
    });
    fixture = TestBed.createComponent(GetCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
