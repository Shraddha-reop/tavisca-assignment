import { TestBed, getTestBed } from '@angular/core/testing';

import { AppServiceService } from './app-service.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
describe('AppServiceService', () => {
  let service: AppServiceService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppServiceService],
      imports: [
          HttpClientTestingModule
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(AppServiceService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch activity overview', () => {
    const spy = jest.fn();
    const requestBody = {};
    service.addLinks(requestBody).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`http://localhost:3000/posts`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
});
});
