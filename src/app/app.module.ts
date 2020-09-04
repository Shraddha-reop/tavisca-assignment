import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptorInterceptor } from '../app/helpers/jwt-interceptor.interceptor'
import { ErrorInterceptorInterceptor } from '../app/helpers/error-interceptor.interceptor'
import { fakeBackendProvider } from '../app/helpers/fake-backend-interceptor.interceptor'
import { ButtonComponent } from '../app/shared/button/button.component'
import {  CardComponent  } from '../app/shared/card/card.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({
      appModel: appReducer,
  }),
  EffectsModule.forRoot([AppEffects]),
  HttpClientModule,
  ReactiveFormsModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: httpTranslateLoader ,
      deps: [HttpClient]
    }
  }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
