import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from './app.model';
import { Store } from '@ngrx/store';
import { AppActionType } from './store/app.actions';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore<AppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({
          initialState: {
            appModel: {
              data: []
            }
          }
        })
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-dream-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-dream-app');
  });

  it('should select breadcrumb  on onBreadCrumbsInit', () => {
    const spy = jest.spyOn(TestBed.get(Store), 'dispatch');
    component.ngOnInit();
    expect(spy.mock.calls[0][0]).toMatchObject({ type: AppActionType.FETCH_USER_DATA });
});

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('my-dream-app app is running!');
  // });

  it('should return addition', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const sum = app.addFunction(10, 10);
    expect(sum).toEqual(20);
  });
});
