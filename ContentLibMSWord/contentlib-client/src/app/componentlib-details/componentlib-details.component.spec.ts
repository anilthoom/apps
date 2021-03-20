import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentlibDetailsComponent } from './componentlib-details.component';

describe('ComponentlibDetailsComponent', () => {
  let component: ComponentlibDetailsComponent;
  let fixture: ComponentFixture<ComponentlibDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentlibDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentlibDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
