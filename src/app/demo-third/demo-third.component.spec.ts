import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoThirdComponent } from './demo-third.component';

describe('DemoThirdComponent', () => {
  let component: DemoThirdComponent;
  let fixture: ComponentFixture<DemoThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
