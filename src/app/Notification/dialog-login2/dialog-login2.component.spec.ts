import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogin2Component } from './dialog-login2.component';

describe('DialogLogin2Component', () => {
  let component: DialogLogin2Component;
  let fixture: ComponentFixture<DialogLogin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLogin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLogin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
