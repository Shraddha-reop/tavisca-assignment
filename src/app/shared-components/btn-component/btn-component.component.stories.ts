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
        'Text-Button',
        () => ({
            template: `
                <app-button  [buttonConfig]="{text: 'Login'}" ></app-button>
            `,
            props: {
                buttonConfig: '{text: "Login"}'
            }
        })
    )
    .add(
        'Image-Button-Update',
        () => ({
            template: `
                <app-button  [buttonConfig]="{src: '../../../assets/svg/update.svg'}" ></app-button>
            `,
            props: {
                buttonConfig: '{src: "../../../assets/svg/update.svg"}'
            }
        })
    )
    .add(
        'Image-Button-Delete',
        () => ({
            template: `
                <app-button  [buttonConfig]="{src: '../../../assets/svg/delete.svg'}" ></app-button>
            `,
            props: {
                buttonConfig: '{src: "../../../assets/svg/delete.svg"}'
            }
        })
    );
