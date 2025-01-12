import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { itemReducer } from './store/reducers/item.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './store/effects/item.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
 imports: [
 StoreModule.forRoot({ items: itemReducer }),
 EffectsModule.forRoot([ItemEffects]),
 StoreDevtoolsModule.instrument({ maxAge: 25, logOnly:
false })
 ]
})
export class CoreModule {}