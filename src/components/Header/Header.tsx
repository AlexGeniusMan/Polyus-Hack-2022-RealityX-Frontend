import React from 'react'
import styles from './Header.module.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['left']}></div>
            <div className={styles['right']}></div>
            <div className={styles['logo']}>
                <Logo />
            </div>
        </div>
    )
}

export default Header
