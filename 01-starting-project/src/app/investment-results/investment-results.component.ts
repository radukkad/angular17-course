import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResultsService } from '../shared/investment-results.service';
@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})

export class InvestmentResultsComponent {
  private investmentResultsService = inject(InvestmentResultsService);
  results = computed(() => this.investmentResultsService.resultData());
}
