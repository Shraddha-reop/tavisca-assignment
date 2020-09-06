import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { ThemeComponent } from './theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';


storiesOf('Theme-Toggle', module)
    .addDecorator(
        moduleMetadata({
            declarations: [ThemeComponent],
            imports: [TranslateTestingModule.withTranslations('en', {}),
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                HttpClientTestingModule]
        })
    )
    .add(
        'Default',
        () => ({
            template: `
            <div>
            <app-theme></app-theme>
            </div>
            `
        })
    );
