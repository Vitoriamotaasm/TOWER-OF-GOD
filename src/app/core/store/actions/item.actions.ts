import { createAction, props } from '@ngrx/store';
import { Item } from '../../../models/item.model';

export const loadItems = createAction ('[Item List] Load Items');

export const loadItemsSuccess = createAction (
    '[Item List] Load Items Success',
    props<{ items: Item[] }>()
);

export const loadItemsFailure = createAction (
    '[Item List] Load Items Failure',
    props<{ error: any }>()
);

export const loadItem = createAction(
    '[Item Detail] Load Item',
    props<{ id: string }>()
   );
   export const loadItemSuccess = createAction(
    '[Item Detail] Load Item Success',
    props<{ item: Item }>()
   );
   export const loadItemFailure = createAction(
    '[Item Detail] Load Item Failure',
    props<{ error: any }>()
   );
   export const completeLevel = createAction(
    '[Level] Complete Level',
    props<{ itemId: string }>()
   );