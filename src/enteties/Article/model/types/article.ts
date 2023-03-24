import { User } from 'enteties/User';

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}
export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    code: string;
    type: ArticleBlockType.CODE;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    title?: string;
    paragraphs: string[]
    type: ArticleBlockType.TEXT;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    src: string;
    title: string;
    type: ArticleBlockType.IMAGE;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export enum ArticleTypes {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}
export interface Article {
    id: string;
    user: User,
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlock[];
}
