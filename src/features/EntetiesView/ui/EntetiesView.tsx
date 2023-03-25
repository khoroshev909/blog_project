import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TileIcon from 'shared/assets/icons/tiled-24-24.svg';
import { memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from 'enteties/Article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './EntetiesView.module.scss';

interface EntetiesViewProps {
    className?: string,
    view: ArticleView,
    changeView: (view: ArticleView) => void
}

export const EntetiesView = memo(({ className, view, changeView }: EntetiesViewProps) => {
    const onClick = (view: ArticleView) => () => {
        changeView?.(view);
    };

    return (
        <div className={classNames(cls.EntetiesView, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onClick(ArticleView.BIG)}
            >
                <Icon Svg={ListIcon} className={view === ArticleView.BIG ? cls.active : ''} />
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onClick(ArticleView.SMALL)}
            >
                <Icon Svg={TileIcon} className={view === ArticleView.SMALL ? cls.active : ''} />
            </Button>
        </div>
    );
});
