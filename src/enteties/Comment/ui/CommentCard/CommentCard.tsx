import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string,
    comment: Comment,
    loading?: boolean
}

export const CommentCard = ({ className, comment, loading }: CommentCardProps) => {
    if (loading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={classNames(cls.header, {}, [className])}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton className={cls.username} width={100} height={20} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={classNames(cls.header, {}, [className])}>
                {comment.user.avatar && (
                    <Avatar
                        src={comment.user.avatar}
                        size={30}
                    />
                )}
                <AppLink to={`/profile/${comment.user.id}`}>
                    <Text className={cls.username} title={comment.user.username} />
                </AppLink>
            </div>
            <Text text={comment.text} />
        </div>
    );
};
