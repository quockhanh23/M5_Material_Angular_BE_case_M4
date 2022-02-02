import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginRulesComponent } from './dialog-login-rules.component';

describe('DialogLoginRulesComponent', () => {
  let component: DialogLoginRulesComponent;
  let fixture: ComponentFixture<DialogLoginRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLoginRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoginRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
