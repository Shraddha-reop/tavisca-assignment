import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppServiceService } from '../../services/app-service.service';
import { FormsModule, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ThemeComponent } from '../../shared-components/theme-toggle/theme.component';

const spyScrollTo = jest.fn();

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let formGroupDirective: Partial<FormGroupDirective>;
  const formBuilder: FormBuilder = new FormBuilder();
  const router = {
    navigate: jasmine.createSpy('navigate')
  };


  beforeEach(async(() => {
    formGroupDirective = {
      form: new FormGroup({})
    };
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
    Object.defineProperty(global.window, 'scrollY', { value: 1 });
    spyScrollTo.mockClear();
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ThemeComponent],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout user', () => {
    const spy = jest.fn();
    component.logout();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should update user', () => {
    const spy = jest.fn();
    component.onUpdate(1);
    expect(component.isUpdate).toEqual(true);
    expect(component.add).toEqual(false);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('calls window.scrollTo', () => {
    component.onUpdate(1);
    expect(spyScrollTo).toHaveBeenCalledTimes(1);
  });

  it('should delete user', () => {
    const spy = jest.fn();
    component.onDelete(1);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should add user', () => {
    const spy = jest.fn();
    component.OnClick();
    expect(component.isUpdate).toEqual(false);
    expect(component.add).toEqual(true);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should cancel user', () => {
    const spy = jest.fn();
    component.onCancel();
    expect(component.isUpdate).toEqual(false);
    expect(component.add).toEqual(false);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should onUpdateLink user', () => {
    const spy = jest.fn();
    component.onUpdateLink();
    expect(component.submitted).toEqual(true);
    expect(component.isUpdate).toEqual(false);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should onUpdateLink user', () => {
    const spy = jest.fn();
    component.onSubmit();
    expect(component.submitted).toEqual(true);
    expect(component.add).toEqual(false);
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
