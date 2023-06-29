import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { HerosService } from '../heros.service';
import { herosFetchAPISuccess, invokeHeroAPI } from './heros.action';
import { selectHeros } from './heros.selector';

@Injectable()
export class HerosEffect {
  constructor(
    private actions$: Actions,
    private herosService: HerosService,
    private store: Store
  ) {}

  loadAllHeros$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeHeroAPI),
      withLatestFrom(this.store.pipe(select(selectHeros))),
      mergeMap(([, heroformStore]) => {
        if (heroformStore.length > 0) {
          return EMPTY;
        }
        return this.herosService
          .getAll()
          .pipe(
            map((data) => herosFetchAPISuccess({ allHeros: data.results }))
          );
      })
    )
  );
}
