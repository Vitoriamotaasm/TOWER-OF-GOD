import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from '../../core/store/actions/item.actions';
import { Observable } from 'rxjs';
import { selectAllItems, selectItemsError, selectItemsLoading } from '../../core/store/selectors/item.selectors';
import { Item } from '../../models/item.model';
import { ScoreService } from '../../core/services/score.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
items$: Observable<Item[]>;
loading$: Observable<boolean>;
error$: Observable<any>;
score$: Observable<number> | undefined;

constructor(private store: Store, private scoreService: ScoreService) {
    this.items$ = this.store.select(selectAllItems);
    this.loading$ = this.store.select(selectItemsLoading);
    this.error$ = this.store.select(selectItemsError)
    this.score$ = this.scoreService.score$;
  }

  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }
}
