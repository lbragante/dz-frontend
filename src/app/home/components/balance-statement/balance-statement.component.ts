import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from 'src/app/shared/models/Balance.model';
import { Statement } from 'src/app/shared/models/Statement.model';
import { BalanceStatementService } from './balance-statement.service';

@Component({
  selector: 'app-balance-statement',
  templateUrl: './balance-statement.component.html',
  styleUrls: ['./balance-statement.component.scss']
})
export class BalanceStatementComponent implements OnInit {

  balance$!: Observable<Balance[]>;
  statements$!: Observable<Statement[]>;

  constructor(private balanceStatementService: BalanceStatementService) { }

  ngOnInit() {
    this.balance$ = this.balanceStatementService.getBalance();
    this.statements$ = this.balanceStatementService.getStatement();
  }

}
