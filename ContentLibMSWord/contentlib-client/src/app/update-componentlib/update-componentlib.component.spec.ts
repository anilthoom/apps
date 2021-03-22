import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponentlibComponent } from './update-componentlib.component';

describe('UpdateComponentlibComponent', () => {
  let component: UpdateComponentlibComponent;
  let fixture: ComponentFixture<UpdateComponentlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponentlibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponentlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
