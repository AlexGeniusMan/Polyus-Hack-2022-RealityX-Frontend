import {useMemo} from 'react'
import {BadgeProps} from './BadgeProps'
import styles from './Badge.module.scss'
import {getClasses} from '../../utils/getClasses'

export function useBadge(props: BadgeProps) {
    const classes = useMemo(() => {
        const readyClasses: {[index: string]: boolean} = {
            'badge': true,
            'badge-primary': props.color === 'primary' || !props.color,
            'badge-red': props.color === 'red',
            'badge-green': props.color === 'green',
            'badge-solid': props.type === 'solid',
            'badge-outline': props.type === 'outline' || !props.type,
            'badge-light': props.type === 'light',
        }
        return getClasses(readyClasses, styles, props.className)
    }, [props.color, props.type, props.shape, props.className])

    return {classes}
}
