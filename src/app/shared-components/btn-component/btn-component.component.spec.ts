import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppServiceService } from '../../services/app-service.service'
import { FormsModule, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ButtonComponent } from './btn-component.component';

async function rejected(promise) {
    try {
        await promise
    } catch (e) {
        return e
    }
    throw new Error('Expected promise to be rejected')
  }

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
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
      declarations: [ButtonComponent],
      imports: [FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({
          initialState: {
            appModel: {
              data: [],
              isLoggedIn: false,
              requestBody: {},
              id: 1
            }
          }
        }),
        { provide: FormGroupDirective, useValue: formGroupDirective },
        { provide: FormBuilder, useValue: formBuilder },
        AppServiceService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   test("I'm asynchronous", async () => {
  
//   })

  it("I'm asynchronous", async () => {
    const promise = Promise.reject("boom!")
    expect("some precondition").toBeFalsy()
    await rejected(promise)
    expect("some postcondition").toBeTruthy()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});