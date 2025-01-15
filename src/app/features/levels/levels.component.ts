import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { createReducer, on, Store } from '@ngrx/store';
import { loadItems, completeLevel, loadItem } from '../../core/store/actions/item.actions';
import { selectCurrentItem, selectItemsLoading, selectItemsError }  from '../../core/store/selectors/item.selectors';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import { ScoreService } from '../../core/services/score.service';


@Component({
    selector: 'app-levels',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './levels.component.html',
    styleUrl: './levels.component.scss'
})

  export class LevelsComponent implements OnInit {
    item$: Observable<Item | undefined>;
    loading$: Observable<boolean>;
    error$: Observable<any>;
  
    constructor(
        private route: ActivatedRoute,
        private store: Store,
        private scoreService: ScoreService,
        private router: Router
    ){
        this.item$ = this.store.select(selectCurrentItem);
        this.loading$ = this.store.select(selectItemsLoading);
        this.error$ = this.store.select(selectItemsError);
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.store.dispatch(loadItem({ id }));
        }
    }

    completeLevel() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.store.dispatch(completeLevel ({itemId: id }));
            this.scoreService.addPoints(100);
            alert('Nível completado! Pontuacao aumentada.' );
            this.router.navigate(['/dashboard']);
        }
    }

}

