import { classNames } from 'shared/lib/classNames/classNames';
import {
    Flex, FlexProps,
} from '../Flex/Flex';

export const VStack = (props: FlexProps) => {
    const { align = 'start', justify = 'start', className } = props;
    return (
        <Flex
            className={classNames('', {}, [className])}
            justify={justify}
            align={align}
            direction="column"
            {...props}
        />
    );
};
