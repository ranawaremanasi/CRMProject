import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetleadidComponent } from './getleadid.component';

describe('GetleadidComponent', () => {
  let component: GetleadidComponent;
  let fixture: ComponentFixture<GetleadidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetleadidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetleadidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
