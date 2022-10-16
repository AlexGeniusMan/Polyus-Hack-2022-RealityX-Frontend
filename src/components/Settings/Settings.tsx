import React, {useState} from 'react'
import styles from './Settings.module.scss'

import {Button} from '../Button/Button'
import Icon from '../Icon/Icon'
import {Input} from '../Input/Input'

const Settings = () => {
    const [value, setValue] = useState('250')

    const handleSubmit = () => {
        console.log(value)
    }

    return (
        <div className={styles['container']}>
            <Input defaultValue={value} onChange={(e) => setValue(e.target.value)} title={'Минимальное значение негабарита'} className={styles['input']} placeholder={'250'} children={
                <Button onClick={() => handleSubmit()}
                    icon={<Icon name={'arrow-right-s-fill'} type={'fill'} size={24} />}
                />
            } />
        </div>
    )
}

export default Settings
