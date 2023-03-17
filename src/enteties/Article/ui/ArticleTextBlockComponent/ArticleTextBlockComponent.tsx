import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string,
    block: ArticleTextBlock
}
export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => (
    <div className={classNames('', {}, [className])}>
        <Text title={block.title} />
        {block.paragraphs.map((text) => (
            <Text
                key={text}
                text={text}
                className={cls.title}
            />
        ))}
    </div>
));
