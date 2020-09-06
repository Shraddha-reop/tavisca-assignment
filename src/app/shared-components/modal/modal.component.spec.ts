import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalComponent } from './modal.component';
import { Component } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '.././../../app/app.model';
import { Store } from '@ngrx/store';
import { FormGroupDirective, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// async function rejected(promise) {
//   try {
//       await promise
//   } catch (e) {
//       return e
//   }
//   throw new Error('Expected promise to be rejected')
// }

// const toggleDark = {
//   toggleDark() {
//       const darkTheme = {
//         'primary-color': '#455363',
//         'background-color': '#1f2935',
//         'text-color': '#fff'
//       }
//       return of(darkTheme);
//   }
// };

describe('AppComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
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
        ModalComponent
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
        { provide: FormBuilder, useValue: formBuilder }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
    component.ngOnInit();
  });
  // it("I'm asynchronous", async () => {
  //   const promise = Promise.reject("boom!")
  //   expect("some precondition").toBeFalsy()
  //   await rejected(promise)
  //   expect("some postcondition").toBeTruthy()
  // })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should update user', () => {
  //   const spy = jest.fn();
  //   component.onUpdate(1);
  //   expect(component.isUpdate).toEqual(true)
  //   expect(component.add).toEqual(false)
  //   expect(spy).toHaveBeenCalledTimes(0);
  // });

//   it('should select breadcrumb  on onBreadCrumbsInit', () => {
//     const spy = jest.spyOn(TestBed.get(Store), 'dispatch');
//     component.ngOnInit();
//     expect(spy.mock.calls[0][0]).toMatchObject({ type: AppActionType.FETCH_USER_DATA });
// });

// it('should logout user', () => {
//   const spy = jest.fn();
//   component.logout();
//   expect(spy).toHaveBeenCalledTimes(0);
// });

  // it('should return addition', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   const sum = app.addFunction(10, 10);
  //   expect(sum).toEqual(20);
  // });
});
