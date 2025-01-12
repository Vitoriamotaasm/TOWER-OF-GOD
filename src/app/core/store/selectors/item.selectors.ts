import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemState } from '../reducers/item.reducer';

export const selectorItemState =
createFeatureSelector<ItemState>('items');

export const selectAllItems = createSelector(
    selectorItemState,
    (state: ItemState) => state.items
);

export const selectItemsLoading = createSelector(
    selectorItemState,
    (state: ItemState) => state.loading
);

export const selectItemsError = createSelector(
    selectorItemState,
    (state: ItemState) => state.error
);