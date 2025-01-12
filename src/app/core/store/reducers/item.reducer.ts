import { createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess, loadItemsFailure } from '../actions/item.actions';
import { Item } from '../../../models/item.model';

export interface ItemState {
    items: Item[];
    loading: boolean;
    error: any;
}

export const initialState: ItemState = {
    items: [],
    loading: false,
    error: null
};

export const itemReducer = createReducer(
    initialState,
    on(loadItems, (state: any) => ({ ...state, loading: true})),
    on(loadItemsSuccess, (state: any, { items }: any) => ({ ...state, loading: false, items })),
    on(loadItemsFailure, (state: any, { error }: any) => ({ ...state, loading: false, error}))
);