import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnStyleComponent } from './gn-style.component';

describe('GnStyleComponent', () => {
  let component: GnStyleComponent;
  let fixture: ComponentFixture<GnStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
