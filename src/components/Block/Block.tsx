import React, {FC} from 'react'
import styles from './Block.module.scss'
import cl from 'classnames'

const Block:FC<MyProps> = ({title, children, className = ''}) => {
    return (
        <div className={cl(styles['container'], className)}>
            <h3 className={styles['title']}>
                {title}
            </h3>
            {children}
        </div>
    )
}

export default Block

type MyProps = {
    title: string,
    className?: string,
    children?: React.ReactNode
}
