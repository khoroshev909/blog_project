import { ArticleImageBlock } from 'enteties/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ImageProps {
    className?: string,
    block: ArticleImageBlock,
    title?: string
}

export const Image = ({ className, block, title }: ImageProps) => (
    <>
        <img src={block.src} alt={block.title} />
        {title && (
            <Text text={title} />
        )}
    </>
);
