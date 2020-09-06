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
        'Default',
        () => ({
            template: `
            <sa-card title = "title" desc = "{{data.description}}" category = "{{data.category}}" year = "{{data.year}}"></sa-card>
            `,
            props: {
                title: 'Card Title'
            }
        })
    );
