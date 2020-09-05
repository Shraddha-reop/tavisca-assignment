import { TestBed, getTestBed } from '@angular/core/testing';

import { AppServiceService } from './app-service.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { AccountService } from './account.service';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('AccountService', () => {
  let service: AccountService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService,
        provideMockStore({
          initialState: {
            appModel: {
              data: [],
              isLoggedIn: false,
              requestBody: {},
              id: 1
            }
          }
        })],
      imports: [
          HttpClientTestingModule,
          RouterTestingModule
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(AccountService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
