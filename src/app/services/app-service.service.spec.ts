import { TestBed, getTestBed } from '@angular/core/testing';

import { AppServiceService } from './app-service.service';
import { AppService } from '../app.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
describe('AppServiceService', () => {
  let service: AppServiceService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService],
      imports: [
          HttpClientTestingModule,
          TranslateTestingModule.withTranslations('en', {
            Sitetitle: "Angular Multi Language Site",
            Name: "Name",
            NameError: "I am sure you must have a name!",
            Email: "Email address",
            PhoneNo: "Phone No",
            Password: "Password",
            Bio: "Enter bio",
            TermsConditions: "I agree to terms and conditions.",
            Submit: "Submit",
            CardTitle: "Card Title",
            CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            GoSomewhere:"Go somewhere"
          })
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
    service.fetchData().subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`https://demo6335756.mockable.io/Countries`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
});
});
