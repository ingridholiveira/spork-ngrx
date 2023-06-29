import { createAction, props } from '@ngrx/store';
import { IHero } from '../types/heroes.interface';

export const invokeHeroAPI = createAction('[Heros API] Invoke Heros Fetch API');

export const herosFetchAPISuccess = createAction(
  '[Heros API] Fetch API Success',
  props<{ allHeros: IHero[] }>()
);
