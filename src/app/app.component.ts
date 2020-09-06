import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.model';
import { FetchUserData, IsLoggedIn } from './store/app.actions';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { selectIsLoggedIn, selectData } from './store/app.selectors';
import { ThemeService } from '../app/services/theme.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: boolean;
  darkTheme = new FormControl(false);
  public selectIsLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedIn);
  public selectData$: Observable<any> = this.store.select(selectData);

  constructor(
    private accountService: AccountService,
    private router: Router,
    public store: Store<AppState>,
    private themeService: ThemeService) {
    this.store.dispatch(new IsLoggedIn(false));
    this.store.dispatch(new FetchUserData());
    this.selectIsLoggedIn$.subscribe(val => {
      this.user = val;
    });

    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.accountService.logout();
  }
}
