import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppServiceService } from '../../services/app-service.service'
import { FormsModule, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
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
});
