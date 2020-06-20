import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSecondComponent } from './demo-second.component';

describe('DemoSecondComponent', () => {
  let component: DemoSecondComponent;
  let fixture: ComponentFixture<DemoSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
