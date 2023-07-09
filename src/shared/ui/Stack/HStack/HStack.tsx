import { ReactNode } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

export const HStack = (props: FlexProps) => (
    <Flex direction="row" {...props} />
);
