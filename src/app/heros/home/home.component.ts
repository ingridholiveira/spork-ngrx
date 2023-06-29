import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeHeroAPI } from '../store/heros.action';
import { selectHeros } from '../store/heros.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}
  heros$ = this.store.pipe(select(selectHeros));

  ngOnInit(): void {
    this.store.dispatch(invokeHeroAPI());
  }
}
