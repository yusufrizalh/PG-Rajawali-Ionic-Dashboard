import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasepagePage } from './firebasepage.page';

describe('FirebasepagePage', () => {
  let component: FirebasepagePage;
  let fixture: ComponentFixture<FirebasepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
