import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChildFirstComponent } from './demo-child-first.component';

describe('DemoChildFirstComponent', () => {
  let component: DemoChildFirstComponent;
  let fixture: ComponentFixture<DemoChildFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChildFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChildFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
