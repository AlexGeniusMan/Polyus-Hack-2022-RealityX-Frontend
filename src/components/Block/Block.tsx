import React, {FC} from 'react'
import styles from './Block.module.scss'
import cl from 'classnames'

const Block:FC<MyProps> = ({title, children, className = '', button}) => {
    return (
        <div className={cl(styles['container'], className)}>
            <div className={styles['top']}>
                <h3 className={styles['title']}>
                    {title}
                </h3>
                {button}
            </div>
            {children}
        </div>
    )
}

export default Block

type MyProps = {
    title: string,
    className?: string,
    children?: string | React.ReactNode
    button?: React.ReactNode
}
