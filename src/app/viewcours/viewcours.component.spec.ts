import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcoursComponent } from './viewcours.component';

describe('ViewcoursComponent', () => {
  let component: ViewcoursComponent;
  let fixture: ComponentFixture<ViewcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
