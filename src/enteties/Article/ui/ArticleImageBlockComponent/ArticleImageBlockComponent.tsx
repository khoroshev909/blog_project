import { memo } from 'react';
import { Image } from 'shared/ui/Image/Image';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string,
    block: ArticleImageBlock
}
export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
    <div className={cls.ArticleImageBlockComponent}>
        <Image block={block} title={block?.title} />
    </div>
));
