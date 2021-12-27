import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetleaddataComponent } from './getleaddata.component';

describe('GetleaddataComponent', () => {
  let component: GetleaddataComponent;
  let fixture: ComponentFixture<GetleaddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetleaddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetleaddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
