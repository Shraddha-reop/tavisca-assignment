import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { Observable } from 'rxjs';
import { selectIsLoggedIn, selectData } from 'src/app/store/app.selectors';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IsLoggedIn, SaveSharedLinks, DeleteLink, FetchUserData, UpdateLink } from 'src/app/store/app.actions';
import * as uuid from 'uuid';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  updateForm: FormGroup;
  user: boolean;
  add = false;
  darkTheme = new FormControl(false);
  submitted = false;
  isUpdate = false;
  public id = null;
  public selectIsLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedIn);
  public selectData$: Observable<any> = this.store.select(selectData);
  constructor(
    private accountService: AccountService,
    public store: Store<AppState>,
    private themeService: ThemeService,
    private formBuilder: FormBuilder) {
    this.store.dispatch(new FetchUserData());
    this.store.dispatch(new IsLoggedIn(true));
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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      category: ['', Validators.required],
      releaseDate: ['', Validators.required]
    });

    this.updateForm = this.formBuilder.group({
      updateTitle: ['', Validators.required],
      updateDesc: ['', Validators.required],
      updateCategory: ['', Validators.required],
      updateYear: ['', Validators.required]
    });
  }
  logout() {
    this.accountService.logout();
  }
  OnClick() {
    this.add = true;
    this.isUpdate = false;
  }

  onUpdate(id) {
    this.id = id;
    this.isUpdate = true;
    this.add = false;
    window.scrollTo(0, 0);
  }
  onDelete(id) {
    this.store.dispatch(new DeleteLink(id));
    this.store.dispatch(new FetchUserData());
  }

  onCancel() {
    this.add = false;
    this.isUpdate = false;
  }

  onUpdateLink() {
    this.submitted = true;
    if (this.updateForm.invalid) {
      return;
    }
    const requestBody = {
      id: this.id,
      title: this.updateForm.value.updateTitle,
      description: this.updateForm.value.updateDesc,
      year: this.updateForm.value.updateYear,
      category: this.updateForm.value.updateCategory
    };
    this.store.dispatch(new UpdateLink(this.id, requestBody));
    this.store.dispatch(new FetchUserData());
    this.isUpdate = false;
  }

  get f() { return this.form.controls; }

  get fc() { return this.updateForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.id = null;
    if (this.form.invalid) {
      return;
    }
    this.add = false;
    const myId = uuid.v4();
    const requestBody = {
      id: myId,
      title: this.form.value.title,
      description: this.form.value.desc,
      category: this.form.value.category,
      year: this.form.value.releaseDate
    };
    this.store.dispatch(new SaveSharedLinks(requestBody));
  }

}
