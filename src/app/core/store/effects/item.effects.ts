import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/
effects';
import { ApiService } from '../../services/api.service';
import { loadItems, loadItemsSuccess, loadItemsFailure } from
'../actions/item.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ItemEffects {
    loadItems$ = createEffect(() => 
    this.actions$.pipe(
        ofType(loadItems),
        mergeMap (() =>
        this.apiService.getItems().pipe(
            map(items => loadItemsSuccess ({ items })),
            catchError(error =>
                of(loadItemsFailure({ error }))
            )
        ))
    ));

    constructor(private actions$: Actions, private apiService: ApiService) {}
}