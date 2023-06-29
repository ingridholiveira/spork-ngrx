import { createReducer, on } from '@ngrx/store';
import { IHero } from '../types/heroes.interface';
import { herosFetchAPISuccess } from './heros.action';

export const initialState: ReadonlyArray<IHero> = [];

export const heroReducer = createReducer(
  initialState,
  on(herosFetchAPISuccess, (state, { allHeros }) => {
    return allHeros;
  })
);
