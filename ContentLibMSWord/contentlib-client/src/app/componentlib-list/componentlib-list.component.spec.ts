import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentlibListComponent } from './componentlib-list.component';

describe('ComponentlibListComponent', () => {
  let component: ComponentlibListComponent;
  let fixture: ComponentFixture<ComponentlibListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentlibListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentlibListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
