import { createFeatureSelector } from '@ngrx/store';
import { IHero } from '../types/heroes.interface';

export const selectHeros = createFeatureSelector<IHero[]>('myheros');
