import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleApartmentsComponent } from './single-apartments.component';

describe('SingleApartmentsComponent', () => {
  let component: SingleApartmentsComponent;
  let fixture: ComponentFixture<SingleApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleApartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
