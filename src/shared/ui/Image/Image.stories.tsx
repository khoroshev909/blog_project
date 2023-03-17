import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from 'enteties/Article/model/types/article';
import { Image } from './Image';

export default {
    title: 'shared/Image',
    component: Image,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    block: {
        id: '2',
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
    },
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    block: {
        id: '2',
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
    },
    title: 'Рисунок 1 - скриншот сайта',
};
