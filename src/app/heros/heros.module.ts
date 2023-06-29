import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HerosEffect } from './store/heros.effect';
import { HerosRoutingModule } from './heros-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './store/heros.reducer';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HerosRoutingModule,
    StoreModule.forFeature('myheros', heroReducer),
    EffectsModule.forFeature([HerosEffect]),
  ],
})
export class HerosModule {}
