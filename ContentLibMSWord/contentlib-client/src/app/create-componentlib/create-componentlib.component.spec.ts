import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentlibComponent } from './create-componentlib.component';

describe('CreateComponentlibComponent', () => {
  let component: CreateComponentlibComponent;
  let fixture: ComponentFixture<CreateComponentlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponentlibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
