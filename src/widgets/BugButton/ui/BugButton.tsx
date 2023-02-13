import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string
}
export const BugButton = ({ className }: BugButtonProps) => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error('Bug button test');
        }
    }, [error]);

    const throwError = () => setError(true);

    return (
        <Button className={classNames('', {}, [className])} onClick={throwError}>
            {t('bugButton')}
        </Button>
    );
};
