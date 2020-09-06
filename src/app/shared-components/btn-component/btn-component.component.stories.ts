import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { ButtonComponent } from './btn-component.component';

storiesOf('button', module)
    .addDecorator(
        moduleMetadata({
            declarations: [ButtonComponent],
            imports: [TranslateTestingModule.withTranslations('en', {})]
        })
    )
    .add(
        'Default',
        () => ({
            template: `
                <app-button  [buttonConfig]="{text: 'Login'}" ></app-button>
            `,
            props: {
                buttonConfig: '{text: "Login"}'
            }
        })
    );
