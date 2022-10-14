import React, {FC} from 'react'
import styles from './Layout.module.scss'
import Header from '../Header/Header'

const Layout:FC<MyProps> = ({children}) => {
    return (
        <div className={styles['container']}>
            <Header />
            <div className={styles['layout']}>
                {children}
            </div>
        </div>
    )
}

export default Layout

type MyProps = {
    children?: React.ReactNode
}
