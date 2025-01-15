import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../../services/api.service';
import { loadItems, loadItemsSuccess, loadItemsFailure,
loadItem, loadItemSuccess, loadItemFailure } from '../actions/item.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ItemEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loadItems),
        mergeMap(() =>
            this.apiService.getItems().pipe(
                map(items => loadItemsSuccess({ items })),
                catchError(error =>
of(loadItemsFailure({ error })))
           )
        )
    )
 );
 loadItem$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loadItem),
        mergeMap(action =>
            this.apiService.getItem(action.id).pipe(
                map(item => loadItemSuccess({ item })),
                catchError(error => of(loadItemFailure({ error })))
            )
       )
   )
 );
 constructor(private actions$: Actions, private apiService:
ApiService) {}
}
