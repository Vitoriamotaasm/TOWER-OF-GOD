import { createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess, loadItemsFailure, loadItem, loadItemSuccess, loadItemFailure, completeLevel} from '../actions/item.actions';
import { Item } from '../../../models/item.model';
import { createAction, props } from '@ngrx/store';

export interface ItemState {
    items: Item[];
    currentItem?: Item;
    loading: boolean;
    error: any;
    score: number;
    points: number;
}

export const completeLevel = createAction(
    '[Item] Complete Level',
    props<{ itemId: string; points: number }>() // Incluímos o ID do item e a pontuação a ser adicionada
  );

export const initialState: ItemState = {
    items: [],
    loading: false,
    error: null,
    currentItem: null,
    score: 0,
};

export const itemReducer = createReducer(
    initialState,
    on(loadItems, (state: any) => ({ ...state, loading: true})),
    on(loadItemsSuccess, (state: any, { items }: any) => ({ ...state, loading: false, items })),
    on(loadItemsFailure, (state: any, { error }: any) => ({ ...state, loading: false, error})),

    on(loadItem, state => ({ ...state, loading: true })),
    on (loadItemsSuccess, (state, { Item }) => ({ ...state, loading: false, Error })),

    on(completeLevel, (state, { itemId, points }) => {
        const updateItems = state.items.map(item =>
            item.id ==== itemId ? { ...Item, completed: true } : Item 
        );

        return {
            ...state,
            items: updateItems,
            score: state.score + points
        };
    })
);