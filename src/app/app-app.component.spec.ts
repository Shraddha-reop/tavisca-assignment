import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from './app.model';
import { Store } from '@ngrx/store';
import { AppActionType } from './store/app.actions';
import { ButtonComponent } from './shared-components/button/button.component'
import { FormGroupDirective, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { CardComponent } from './shared-components/card/card.component';
import { ThemeService } from './services/theme.service'
import { of } from 'rxjs';

const toggleDark = {
  toggleDark() {
      const darkTheme = {
        'primary-color': '#455363',
        'background-color': '#1f2935',
        'text-color': '#fff'
      }
      return of(darkTheme);
  }
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore<AppState>;
  let formGroupDirective: Partial<FormGroupDirective>;
  const formBuilder: FormBuilder = new FormBuilder();
  const router = {
    navigate: jasmine.createSpy('navigate')
};
  beforeEach(async(() => {
    formGroupDirective = {
      form: new FormGroup({})
  };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,ButtonComponent,CardComponent
      ],
      imports: [FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule],
      providers: [
        provideMockStore({
          initialState: {
            appModel: {
              data: [],
              isLoggedIn: false,
              requestBody: {},
              id: 1
            }
          },
          
        }),
        { provide: FormGroupDirective, useValue: formGroupDirective },
        { provide: FormBuilder, useValue: formBuilder },
        { provide: ThemeService, useValue: toggleDark }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
    component.ngOnInit();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

  // it(`should have as title 'my-dream-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('my-dream-app');
  // });

//   it('should select breadcrumb  on onBreadCrumbsInit', () => {
//     const spy = jest.spyOn(TestBed.get(Store), 'dispatch');
//     component.ngOnInit();
//     expect(spy.mock.calls[0][0]).toMatchObject({ type: AppActionType.FETCH_USER_DATA });
// });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('my-dream-app app is running!');
  // });

  // it('should return addition', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   const sum = app.addFunction(10, 10);
  //   expect(sum).toEqual(20);
  // });
});
