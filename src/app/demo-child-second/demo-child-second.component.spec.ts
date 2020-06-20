import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChildSecondComponent } from './demo-child-second.component';

describe('DemoChildSecondComponent', () => {
  let component: DemoChildSecondComponent;
  let fixture: ComponentFixture<DemoChildSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChildSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChildSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
