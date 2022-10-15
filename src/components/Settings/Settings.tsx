import React from 'react'
import styles from './Settings.module.scss'

import {Button} from '../Button/Button'
import Icon from '../Icon/Icon'
import {Input} from '../Input/Input'

const Settings = () => {
    return (
        <div className={styles['container']}>
            <Input placeholder={'20'} children={
                <Button
                    icon={<Icon name={'arrow-right-s-fill'} type={'fill'} size={20} />}
                />
            } />

            {/*<Input placeholder={'kasjdkjsak'} />*/}
            {/*<Input title={'Turtles'} placeholder={'kasjdkjsak'} />*/}
            {/*<Button>Привет</Button>*/}
            {/*<Button*/}
            {/*    icon={<Icon name={'ri-check-line'} type={'line'} size={20} />}*/}
            {/*    iconPosition='left'*/}
            {/*    success*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    children={'asdjsa'}*/}
            {/*    icon={<Icon name={'arrow-right-s-fill'} type={'fill'} size={20} />}*/}
            {/*    iconPosition='right'*/}
            {/*/>*/}
            {/*<Input placeholder={'kasjdkjsak'} children={*/}
            {/*    <Button*/}
            {/*        icon={<Icon name={'arrow-right-s-fill'} type={'fill'} size={20} />}*/}
            {/*    />*/}
            {/*} />*/}
        </div>
    )
}

export default Settings
