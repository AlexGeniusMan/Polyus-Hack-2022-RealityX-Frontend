import {ReactNode} from 'react'
import {DefaultParams} from '../../types/Types'

export interface BadgeProps extends DefaultParams {
    shape?: 'rectangular' | 'circle';
    type?: 'solid' | 'outline' | 'light';
    color?: 'primary' | 'red' | 'green' | 'orange';
    children: string | ReactNode;
}
