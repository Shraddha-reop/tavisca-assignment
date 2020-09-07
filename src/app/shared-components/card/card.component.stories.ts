import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { CardComponent } from './card.component';
import { ButtonComponent } from '../btn-component/btn-component.component';

storiesOf('Card', module)
    .addDecorator(
        moduleMetadata({
            declarations: [CardComponent, ButtonComponent],
            imports: [ TranslateTestingModule.withTranslations('en', {})]
        })
    )
    .add(
        'Home-Page card',
        () => ({
            template: `
            <sa-card title = 'Card Title' desc = 'Card Description' category = 'Category' year = 'Year'></sa-card>
            `,
            props: {
                title: 'Card Title'
            }
        })
    )
    .add(
        'Login User Card',
        () => ({
            template: `
            <sa-card title = 'Card Title' desc = 'Card Description' category = 'Category' year = 'Year' isLoggedIn = true></sa-card>
            `,
            props: {
                title: 'Card Title'
            }
        })
    );
