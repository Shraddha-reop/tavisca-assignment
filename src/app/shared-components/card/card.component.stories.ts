import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { CardComponent } from './card.component'

storiesOf('Card', module)
    .addDecorator(
        moduleMetadata({
            declarations: [CardComponent],
            imports: [ TranslateTestingModule.withTranslations('en', {})]
        })
    )
    .add(
        'Default',
        () => ({
            template: `
           <h1>hiiiiiiiiiiiiiiiiiiiiii</h1>
            `,
            props: {}
        })
    );
