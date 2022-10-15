import React from 'react'
import styles from './Settings.module.scss'

import {Button} from '../Button/Button'
import Icon from '../Icon/Icon'
import {Input} from '../Input/Input'

const Settings = () => {
    return (
        <div className={styles['container']}>
            <Input title={'Минимальное значение негабарита'} className={styles['input']} placeholder={'12'} children={
                <Button
                    icon={<Icon name={'arrow-right-s-fill'} type={'fill'} size={24} />}
                />
            } />
        </div>
    )
}

export default Settings
