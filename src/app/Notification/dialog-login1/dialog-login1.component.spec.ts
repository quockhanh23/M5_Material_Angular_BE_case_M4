import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogin1Component } from './dialog-login1.component';

describe('DialogLogin1Component', () => {
  let component: DialogLogin1Component;
  let fixture: ComponentFixture<DialogLogin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLogin1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLogin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
