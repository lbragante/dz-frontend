import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceStatementComponent } from './balance-statement.component';

describe('BalanceStatementComponent', () => {
  let component: BalanceStatementComponent;
  let fixture: ComponentFixture<BalanceStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
