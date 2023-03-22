import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string,
    comments: Comment[],
    loading: boolean
}

export const CommentList = memo(({ className, comments, loading }: CommentListProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        loading={loading}
                        key={comment.id}
                        comment={comment}
                    />
                ))
            ) : (
                <Text text={t('noComments')} />
            )}
        </div>
    );
});
